import {
  Button,
  Modal,
  PasswordInput,
  PinInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePassword, sendOTP, verifyOTP } from "../Services/UsersService";
import { signUpValidation } from "../Services/FormValidation";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [conPassError, setConPassError] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [resendLoader, setResendLoader] = useState(false);

  const interval = useInterval(() => {
    if (seconds === 0) {
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    } else {
      setSeconds((s) => s - 1);
    }
  }, 1000);
  //Method to send OTP
  const handleSendOtp = () => {
    setOtpSending(true);
    sendOTP(email)
      .then((res) => {
        console.log(res);
        setOtpSent(true);
        interval.start();
        setResendLoader(true);
        setOtpSending(false);
        successNotification("OTP Sent Successfully", "Enter OTP to reset");
      })
      .catch((error) => {
        console.log(error);
        setOtpSending(false);
        errorNotification(
          "OTP Sending Failed",
          error.response.data.errorMessage
        );
      });
  };

  //Method to verify OTP
  const handleVerifyOtp = (otp: string) => {
    verifyOTP(email, otp)
      .then((res) => {
        console.log(res);
        setVerified(true);
        successNotification("OTP Verified", "Enter New Password");
      })
      .catch((error) => {
        console.log(error);
        errorNotification(error.response.data.errorMessage, "");
      });
  };

  const resendOtp = () => {
    if (resendLoader) return;
    handleSendOtp();
  };

  const changeEmail = () => {
    setOtpSending(false);
    setOtpSent(false);
    setVerified(false);
    setSeconds(60);
    interval.stop();
  };

  const handleChangePassword = () => {
    changePassword(email, password)
      .then((res) => {
        console.log(res);
        successNotification("Password Changed", "Login with new password");
        setVerified(false);
        setOtpSent(false);
        props.close();
      })
      .catch((error) => {
        console.log(error);
        errorNotification(
          "Password Reset Failed",
          error.response.data.errorMessage
        );
      });
  };

  //Method to handle confirm Password Validation
  const handleConfirmPassword = (event: any) => {
    setConPassword(event.target.value);
    // if (conPassword === password) setConPassError("");
    // else setConPassError("Password do not match");
  };

  return (
    <>
      <Modal
        className="font-['poppins']"
        opened={props.open}
        onClose={props.close}
        title="Forget Password"
      >
        <div className="flex flex-col gap-3">
          {!verified && (
            <TextInput
              leftSection={
                <IconAt style={{ width: rem(16), height: rem(16) }} />
              }
              label="Email"
              withAsterisk
              placeholder="Your email"
              className="[&_input]:font-['poppins']"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              rightSection={
                <Button
                  loading={otpSending}
                  size="xs"
                  className="mr-1"
                  variant="filled"
                  autoContrast
                  onClick={handleSendOtp}
                  disabled={email === "" || otpSent}
                >
                  Login
                </Button>
              }
              rightSectionWidth="xl"
            />
          )}

          {otpSent && !verified && (
            <PinInput
              length={6}
              type="number"
              size="md"
              gap="lg"
              className="[&_input]:font-['poppins'] mx-auto"
              onComplete={handleVerifyOtp}
            />
          )}
          {otpSent && !verified && (
            <div className="flex gap-2">
              <Button
                onClick={resendOtp}
                // loading={resendLoader}
                // disabled={resendLoader}
                color="brightSun.4"
                fullWidth
                autoContrast
                size="sm"
                className="mr-1"
                variant="light"
              >
                {resendLoader ? seconds : "Resend"}
              </Button>
              <Button
                onClick={changeEmail}
                autoContrast
                fullWidth
                variant="filled"
                className="mr-1"
              >
                Change Email
              </Button>
            </div>
          )}
          {verified && (
            <>
              <PasswordInput
                label="Password"
                withAsterisk
                placeholder="Enter Password"
                leftSection={
                  <IconLock style={{ width: rem(18), height: rem(18) }} />
                }
                className="[&_input]:font-['poppins']"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPassError(signUpValidation(e.target.name, e.target.value));
                }}
                name="password"
                value={password}
                error={passError}
              />
              <PasswordInput
                value={conPassword}
                label="Confirm Password"
                withAsterisk
                placeholder="Enter Password"
                leftSection={
                  <IconLock style={{ width: rem(18), height: rem(18) }} />
                }
                name="confirmPassword"
                onChange={handleConfirmPassword}
                error={conPassError}
                className="[&_input]:font-['poppins']"
              />
            </>
          )}
          {verified && (
            <Button
              onClick={handleChangePassword}
              autoContrast
              fullWidth
              variant="filled"
              className="mr-1"
            >
              Change Password
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ResetPassword;

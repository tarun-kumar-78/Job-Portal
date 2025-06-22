import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Services/UsersService";
import { notifications } from "@mantine/notifications";
import { signUpValidation } from "../Services/FormValidation";

const Signup = () => {
  const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
  };

  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (event: any) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }
    let name = event.target.name,
      value = event.target.value;
    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signUpValidation(name, value) });
    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) {
        err = "Password do not match";
        setFormError({
          ...formError,
          [name]: signUpValidation(name, value),
          confirmPassword: err,
        });
      } else {
        setFormError({ ...formError, confirmPassword: "" });
      }
    }
    if (name === "confirmPassword") {
      if (data.password !== value)
        setFormError({
          ...formError,
          [name]: "Confirm password do not match",
        });
    }
  };

  // console.log(formError);
  const handleSubmit = () => {
    let valid = true;
    let newFormError: { [key: string]: string } = {};
    for (let key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = signUpValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "Password do not match";
      if (newFormError[key]) {
        valid = false;
      }
    }

    setFormError(newFormError);

    if (valid) {
      setLoading(true);
      registerUser(data)
        .then((res) => {
          setData(form);
          console.log(res);
          notifications.show({
            title: "Registered Successfully",
            message: "Redirect to login page....",
            withCloseButton: true,
            icon: <IconCheck className="w-[90%] h-[90%]" />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500 !font-['poppins']",
          });
          setTimeout(() => {
            setLoading(false);
            navigate("/login");
          }, 4000);
        })
        .catch((error) => {
          notifications.show({
            title: "Registration Failed",
            message: error.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX className="w-[90%] h-[90%]" />,
            color: "red",
            withBorder: true,
            className: "!border-red-500 !font-['poppins']",
          });
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        className="translate-x-1/2"
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        value={data.name}
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Full Name"
        withAsterisk
        placeholder="Enter Name"
        onChange={handleChange}
        name="name"
        error={formError.name}
        className="[&_input]:font-['poppins']"
      />
      <TextInput
        value={data.email}
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        withAsterisk
        placeholder="Your email"
        name="email"
        error={formError.email}
        onChange={handleChange}
        className="[&_input]:font-['poppins']"
      />
      <PasswordInput
        value={data.password}
        label="Password"
        withAsterisk
        placeholder="Enter Password"
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
        name="password"
        onChange={handleChange}
        error={formError.password}
        className="[&_input]:font-['poppins']"
      />
      <PasswordInput
        value={data.confirmPassword}
        label="Confirm Password"
        withAsterisk
        placeholder="Enter Password"
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
        name="confirmPassword"
        onChange={handleChange}
        error={formError.confirmPassword}
        className="[&_input]:font-['poppins']"
      />
      <Radio.Group
        label="You are"
        value={data.accountType}
        onChange={handleChange}
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400 hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5"
            // autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400 hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5"
            // autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>
          </>
        }
      />

      <Button
        loading={loading}
        onClick={handleSubmit}
        variant="filled"
        fullWidth
        autoContrast
      >
        Sign up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <span
          onClick={() => {
            navigate("/login");
            setData(form);
            setFormError(form);
          }}
          className="text-bright-sun-400 hover:underline cursor-pointer"
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;

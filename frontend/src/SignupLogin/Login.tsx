import {
  Button,
  LoadingOverlay,
  PasswordInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UsersService";
import { loginValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";

const form = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const handleChange = (event: any) => {
    let name = event.target.name,
      value = event.target.value;
    setFormError({ ...formError, [name]: loginValidation(name, value) });
    setData({ ...data, [name]: value });
  };
  // console.log(formError);

  const handleSubmit = () => {
    setLoading(true);
    let valid = true,
      newFormError: { [key: string]: string } = {};
    for (let key in data) {
      if (data[key] == "") newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if (valid) {
      loginUser(data)
        .then((res) => {
          console.log(res);
          notifications.show({
            title: "Login Successfully",
            message: "Redirect to home page....",
            withCloseButton: true,
            icon: <IconCheck className="w-[90%] h-[90%]" />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500 !font-['poppins']",
          });
          setTimeout(() => {
            setLoading(false);
            dispatch(setUser(res));
            navigate("/");
          }, 4000);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          notifications.show({
            title: "Login Failed",
            message: error.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX className="w-[90%] h-[90%]" />,
            color: "red",
            withBorder: true,
            className: "!border-red-500 !font-['poppins']",
          });
        });
    }
  };

  return (
    <>
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "brightSun.4", type: "bars" }}
        />
        <div className="text-2xl font-semibold">Login</div>
        <TextInput
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          withAsterisk
          placeholder="Your email"
          className="[&_input]:font-['poppins']"
          onChange={handleChange}
          name="email"
          value={data.email}
          error={formError.email}
        />
        <PasswordInput
          label="Password"
          withAsterisk
          placeholder="Enter Password"
          leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
          className="[&_input]:font-['poppins']"
          onChange={handleChange}
          name="password"
          value={data.password}
          error={formError.password}
        />
        <Button
          loading={loading}
          onClick={handleSubmit}
          variant="filled"
          fullWidth
          autoContrast
        >
          Login
        </Button>
        <div className="mx-auto">
          Don't have an account?{" "}
          <span
            onClick={() => {
              navigate("/signup");
              setData(form);
              setFormError(form);
            }}
            className="text-bright-sun-400 hover:underline cursor-pointer"
          >
            Sign up
          </span>
          <div
            className="text-bright-sun-400 hover:underline cursor-pointer text-center"
            onClick={open}
          >
            Forget Password?
          </div>
        </div>
      </div>
      <ResetPassword open={opened} close={close} />
    </>
  );
};

export default Login;

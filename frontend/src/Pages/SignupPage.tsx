import { IconAnchor, IconArrowLeft } from "@tabler/icons-react";
import Signup from "../SignupLogin/Signup";
import Login from "../SignupLogin/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const SignupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh]  bg-mine-shaft-950 font-['poppins'] overflow-hidden relative">
      <Button
        color="brightSun.4"
        variant="light"
        leftSection={<IconArrowLeft />}
        size="sm"
        className="!absolute left-5 top-3  !z-20"
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <div
        className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition duration-1000 ease-in-out ${
          location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`w-1/2 h-full bg-mine-shaft-900 transition-all duration-1000 ease-in-out  ${
            location.pathname == "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          }  flex flex-col gap-3 justify-center items-center`}
        >
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor
              stroke={2.5}
              className="h-16 w-16 text-bright-sun-400"
            />
            <div className="text-6xl font-semibold">JobHook</div>
          </div>
          <div className="font-semibold text-2xl text-mine-shaft-200">
            Find the made for you
          </div>
        </div>
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;

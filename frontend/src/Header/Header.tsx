import { Button, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import Navlinks from "./Navlinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../Services/ProfileService";
import { setProfile } from "../Slices/ProfileSlice";

const Header = () => {
  const location = useLocation();
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile(user.profileId)
      .then((res) => {
        console.log(res);
        dispatch(setProfile(res));
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {location.pathname != "/signup" && location.pathname != "/login" ? (
        <div className="w-full bg-mine-shaft-950 h-20 text-white flex px-6 justify-between items-center  font-['Poppins'] sticky top-0 z-30">
          <Link to="/" className="flex gap-3 items-center text-bright-sun-500">
            <IconAnchor stroke={2.5} className="h-10 w-10" />
            <div className="text-3xl font-semibold">JobHook</div>
          </Link>
          <div>
            <Navlinks />
          </div>
          <div className="flex gap-5 items-center">
            {user ? (
              <ProfileMenu />
            ) : (
              <Link to="/login">
                <Button variant="subtle" color="brightSun.4">
                  Login
                </Button>
              </Link>
            )}
            <div className="bg-mine-shaft-900 flex gap-2 p-1.5 rounded-full">
              <Indicator size={7} color="brightSun.4" offset={3} processing>
                <IconBell stroke={1.5} />
              </Indicator>
            </div>
            <div className="bg-mine-shaft-900 flex gap-2 p-1.5 rounded-full">
              <IconSettings stroke={1.5} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;

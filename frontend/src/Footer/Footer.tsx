import {
  IconAnchor,
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandX,
} from "@tabler/icons-react";
import { footerLinks } from "../Data/data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname != "/signup" && location.pathname != "/login" ? (
        <div className="py-20 flex justify-evenly bg-mine-shaft-950 font-['Poppins']">
          <div className="flex flex-col w-1/4 gap-4">
            <div className="flex gap-3 items-center text-bright-sun-500">
              <IconAnchor stroke={2.5} className="h-6 w-6" />
              <div className="text-3xl font-semibold">JobHook</div>
            </div>
            <div className="text-sm text-mine-shaft-300">
              Job portal with user profiles, skill updates, certifications,work
              experience and admin job posting
            </div>
            <div className="flex gap-3 [&>div]:text-bright-sun-300 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
              <div>
                <IconBrandInstagram />
              </div>
              <div>
                <IconBrandX />
              </div>
              <div>
                <IconBrandMeta />
              </div>
            </div>
          </div>

          {footerLinks.map((link, index) => (
            <div key={index}>
              <div className="text-lg font-semibold mb-5 text-bright-sun-400">
                {link.title}
              </div>
              {link.links.map((link, index) => (
                <div key={index}>
                  <div className="text-mine-shaft-100 hover:text-bright-sun-400 cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
                    {link}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;

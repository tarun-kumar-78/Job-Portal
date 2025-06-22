import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Jobs", url: "post-jobs" },
    { name: "Posted Jobs", url: "posted-jobs" },
    { name: "Job History", url: "job-history" },
  ];

  const location = useLocation();
  return (
    <>
      <div className="flex gap-5 text-md text-mine-shaft-300 items-center h-full">
        {links.map((link, index) => (
          <div
            key={index}
            className={`${
              location.pathname == "/" + link.url
                ? "border-bright-sun-400 text-bright-sun-400"
                : "border-transparent"
            } border-t-[3px] h-full flex items-center`}
          >
            <Link to={link.url}>{link.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navlinks;

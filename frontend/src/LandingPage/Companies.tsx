import Marquee from "react-fast-marquee";
import { arr } from "../Data/data";

const Companies = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-bold text-center text-mine-shaft-100 mb-5 [&>span]:text-bright-sun-400">
        Trusted By <span>1000+</span> Companies
      </div>
      <Marquee pauseOnHover={true}>
        {arr.map((company, index) => (
          <div
            key={index}
            className="mx-8 my-3 px-2 py-2 hover:bg-mine-shaft-900 cursor-pointer rounded-lg"
          >
            <img src={company} alt={company} className="h-24" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;

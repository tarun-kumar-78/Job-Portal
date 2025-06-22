import { Avatar } from "@mantine/core";
import image from "../assets/girl.jpg";
import { work } from "../Data/data";
import avatar3 from "../assets/avatar3.jpg";
const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-bold text-center text-mine-shaft-100 [&>span]:text-bright-sun-400">
        How it <span>Works</span>
      </div>
      <div className="text-lg mx-auto text-center text-mine-shaft-400 w-1/2">
        Effortlessly navigating through the process and land your dream job.
      </div>
      <div className="flex justify-between items-center px-20 pt-10 relative">
        <div>
          <img className="w-[30rem]" src={image} alt="image" />
          <div className="w-36 flex flex-col justify-center items-center gap-1 border border-bright-sun-300 p-2 rounded-lg backdrop-blur-md absolute top-[50%]">
            <Avatar className="!h-16 !w-16" src={avatar3} />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% complete</div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-10">
              <div className="bg-bright-sun-400 rounded-full p-2">
                <img src={item.img} alt="resume" className="h-24" />
              </div>
              <div>
                <div className="text-mine-shaft-200 font-semibold text-xl">
                  {item.name}
                </div>
                <div className="text-mine-shaft-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;

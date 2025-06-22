import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-bold text-center text-mine-shaft-100 [&>span]:text-bright-sun-400">
        What <span>User</span> say about us
      </div>
      <div className="flex mt-10 justify-evenly">
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 px-2 py-2 mx-2 rounded-md"
          >
            <div className="flex items-center gap-2">
              <Avatar className="!h-14 !w-14" src={data.avatar} alt="Its me" />
              <div>
                <div className="text-mine-shaft-100 text-lg">{data.name}</div>
                <Rating value={data.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-xs text-mine-shaft-300">{data.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

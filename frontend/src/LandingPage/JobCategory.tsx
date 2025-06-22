import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-bold text-center text-mine-shaft-100 [&>span]:text-bright-sun-400">
        Browse <span>Jobs</span> Category
      </div>
      <div className="text-lg mx-auto text-center text-mine-shaft-400 w-1/2">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today
      </div>
      <Carousel
        slideSize="18%"
        slideGap="sm"
        controlsOffset="sm"
        controlSize={26}
        withControls
        className="my-4 [&_button]:bg-bright-sun-400 [&_button]:border-none [&_button]:hidden [&_button]:hover:block"
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: "center",
        }}
      >
        {jobCategory.map((job, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 border border-bright-sun-400 p-2 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-400 my-5 transition duration-300 ease-in-out">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img src={job.img} alt={job.name} className="w-12" />
              </div>
              <div className="text-mine-shaft-200 text-xl font-semibold">
                {job.name}
              </div>
              <div className="text-sm text-mine-shaft-300 text-center">
                {job.desc}
              </div>
              <div className="text-bright-sun-300 text-lg">{job.post}</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;

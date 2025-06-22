import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { timeAgo } from "../Services/Utitlity";

const JobCard = (props: any) => {
  console.log(props);
  return (
    <Link
      to="/jobs"
      className="w-80 p-4 flex flex-col gap-4 rounded-xl bg-mine-shaft-900 cursor-pointer hover:shadow-[0_0_5px_1px] !shadow-bright-sun-400"
    >
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={`/Company/${props.company}.png`}
              className="w-10 bg-mine-shaft-700 p-1 rounded-md"
              alt="Meta"
            />
          </div>
          <div className="">
            <div className="text-lg text-mine-shaft-300 font-semibold">
              {props.title}
            </div>
          </div>
        </div>
        <div>
          <IconBookmark className="w-5 h-5 text-mine-shaft-300" />
        </div>
      </div>
      <div className="flex gap-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-md [&>div]:w-fit [&>div]:py-1 [&>div]:px-2 [&>div]:text-bright-sun-400 [&>div]:text-xs">
        <div>{props.jobType}</div>
        <div>{props.experience}</div>
        <div>{props.location}</div>
      </div>
      <div>
        <Text lineClamp={2} className="!text-xs text-justify">
          {props.description}
        </Text>
      </div>
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex justify-between text-xs">
        <div className="text-sm font-semibold">
          &#8377; {props.packageOffered} LPA
        </div>
        <div className="flex gap-1 text-mine-shaft-500 items-center">
          <IconClockHour3 className="w-5 h-5" />
          {timeAgo(props.postTime.toString())}
        </div>
      </div>
    </Link>
  );
};

export default JobCard;

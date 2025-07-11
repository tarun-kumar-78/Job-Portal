import {
  IconBookmark,
  IconBookmarkFilled,
  IconClockHour3,
} from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { timeAgo } from "../Services/Utitlity";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";

const JobCard = (props: any) => {
  // console.log(typeof props.id);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const stripHtml = (desc: any) => {
    return desc.replace(/<[^>]*>?/gm, "");
  };

  const handleSavedJobs = () => {
    let savedJobs = [...profile.savedJobs];
    if (savedJobs?.includes(props.id))
      savedJobs = savedJobs?.filter((id: any) => id !== props.id);
    else {
      savedJobs = [...savedJobs, props.id];
    }
    let updatedProfile = { ...profile, savedJobs: savedJobs };
    dispatch(setProfile(updatedProfile));
    updateProfile(updatedProfile)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-80 p-4 flex flex-col gap-4 rounded-xl bg-mine-shaft-900  hover:shadow-[0_0_5px_1px] !shadow-bright-sun-400">
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
              <Link to={`/jobs/${props.id}`} className="cursor-pointer">
                {props.title}
              </Link>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          {profile.savedJobs?.includes(props.id) ? (
            <IconBookmarkFilled
              onClick={handleSavedJobs}
              className=" w-5 h-5 text-bright-sun-400"
            />
          ) : (
            <IconBookmark
              onClick={handleSavedJobs}
              className="w-5 h-5 text-mine-shaft-300"
            />
          )}
        </div>
      </div>
      <div className="flex gap-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-md [&>div]:w-fit [&>div]:py-1 [&>div]:px-2 [&>div]:text-bright-sun-400 [&>div]:text-xs">
        <div>{props.jobType}</div>
        <div>{props.experience}</div>
        <div>{props.location}</div>
      </div>
      <div>
        <Text lineClamp={2} className="!text-xs text-justify">
          {stripHtml(props.description)}
        </Text>
      </div>
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex justify-between text-xs">
        <div className="text-sm font-semibold">
          &#8377; {props.packageOffered} LPA
        </div>
        <div className="flex gap-1 text-mine-shaft-500 items-center">
          <IconClockHour3 className="w-5 h-5" />
          {timeAgo(props.postTime)}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

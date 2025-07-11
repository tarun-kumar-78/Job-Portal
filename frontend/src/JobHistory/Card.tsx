import { Button, Divider, Text } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { timeAgo } from "../Services/Utitlity";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";

const Card = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state: any) => state.profile);
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
    <div className="w-80 p-4 flex flex-col gap-4 rounded-xl bg-mine-shaft-900 cursor-pointer hover:shadow-[0_0_5px_1px] !shadow-bright-sun-400">
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
            <Link to="/jobs">
              <div className="text-lg text-mine-shaft-300 font-semibold">
                {props.title}
              </div>
            </Link>
          </div>
        </div>
        <div>
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

          {props.applied || props.interviewing
            ? "Applied "
            : props.offered
            ? "Interview "
            : "Posted "}
          {timeAgo(props.postTime)}
        </div>
      </div>
      {props.offered ||
        (props.interviewing && <Divider size="xs" color="mineShaft.7" />)}
      {props.offered && (
        <div className="flex gap-2">
          <Button color="brightSun.4" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="brightSun.4" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      )}

      {props.interviewing && (
        <div className="flex gap-2 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} className="text-bright-sun-400" />{" "}
          Sat, August 23 &bull;
          <span className="text-mine-shaft-400">10:00 AM</span>
        </div>
      )}
      <Button
        variant="light"
        className="!text-bright-sun-400 "
        onClick={() => navigate(`/jobs/${props.id}`)}
      >
        View Job
      </Button>
    </div>
  );
};

export default Card;

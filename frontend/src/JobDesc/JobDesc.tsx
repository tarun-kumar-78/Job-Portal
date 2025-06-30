import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
// import Meta from "../assets/Company/Meta.png";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card } from "../Data/data";
import DOMPurify from "dompurify";
import { timeAgo } from "../Services/Utitlity";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import { getItem } from "../Services/LocalStorageService";
import { useEffect, useState } from "react";

const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(props.description);
  window.scrollTo({ top: 0, behavior: "smooth" });
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const user = getItem("user");
  const [applied, setApplied] = useState(false);

  // console.log(user);
  useEffect(() => {
    let applicantId = props.applicant?.filter(
      (job: any) => job.applicantId === user.id
    ).length;
    // console.log(applicantId);
    if (applicantId > 0) setApplied(true);
    else setApplied(false);
  }, [props]);

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
    <div className="w-2/3 p-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={`/Company/${props.company}.png`}
              className="h-14 bg-mine-shaft-700 p-3 rounded-xl"
              alt={props.company}
            />
          </div>
          <div className="">
            <div className="text-2xl text-mine-shaft-300 font-semibold">
              {props.title}
            </div>
            <div className="text-lg text-mine-shaft-400">
              {props.company} &bull; {timeAgo(props.postTime)} &bull;{" "}
              {props.applicant ? props.applicant.length : 0} Applicant
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          {applied ? (
            <Button color="green.8" variant="light" size="sm">
              Applied
            </Button>
          ) : (
            <>
              <Link to={`/apply-job/${props.id}`}>
                <Button color="brightSun.4" variant="light" size="sm">
                  {props.edit && applied ? "Edit" : "Apply"}
                </Button>
              </Link>

              {props.edit ? (
                <Button color="red.5" variant="light">
                  Delete
                </Button>
              ) : profile.savedJobs?.includes(props.id) ? (
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
            </>
          )}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item: any, index: any) => (
          <div key={index} className="flex flex-col gap-1 items-center">
            <ActionIcon
              variant="light"
              className="!h-12 !w-12"
              color="brightSun.4"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">
              {item.id != "packageOffered"
                ? props
                  ? props[item.id]
                  : "NA"
                : props[item.id] + " LPA"}
            </div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex gap-2 flex-wrap">
          {props.skills?.map((skill: any, index: number) => (
            <ActionIcon
              key={index}
              variant="light"
              className="!h-fit !w-fit font-medium !text-sm"
              color="brightSun.4"
              p="xs"
              radius="xl"
              aria-label="Settings"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      {/* Direcly add the raw html into page.Due to that there may be chance of XSS attack in future so we have to use this carefully and for that we use dompurify library that purify thr html before sending */}
      <div
        className="[&_h4]:my-5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={`/Company/${props.company}.png`}
                  className="h-14 bg-mine-shaft-700 p-3 rounded-xl"
                  alt="Meta"
                />
              </div>
              <div>
                <div className="text-2xl text-mine-shaft-300 font-semibold">
                  {props.company}
                </div>
                <div className="text-sm text-mine-shaft-400">10K+ Employee</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Link to={`/company/${props.company}`}>
                <Button color="brightSun.4" variant="light" size="sm">
                  Company Page
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-mine-shaft-300 mt-2 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium laboriosam dolore nam id voluptas repudiandae laborum
            consectetur et natus, distinctio, itaque voluptatem corporis
            aspernatur voluptatum nihil molestiae rem maxime dolorem odio
            consequuntur autem, nemo enim ut quisquam! Possimus, soluta nulla.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;

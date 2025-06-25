import { Divider } from "@mantine/core";
// import Meta from "../assets/Company/Meta.png";
import { useEffect } from "react";
import { timeAgo } from "../Services/Utitlity";
import ApplyJobForm from "./ApplyJobForm";
const ApplyJob = (props: any) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div className="w-2/3 mx-auto">
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
                {props.company}
              </div>
              <div className="text-lg text-mine-shaft-400">
                {props.company} &bull; {timeAgo(props.postTime)} &bull;{" "}
                {props.applicant ? props.applicant.length : 0} Applicant
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center"></div>
        </div>
        <Divider my="xl" />
        <ApplyJobForm />
      </div>
    </>
  );
};

export default ApplyJob;

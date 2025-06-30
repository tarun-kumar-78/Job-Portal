import { useEffect, useState } from "react";
import JobCard from "../FindJobs/JobCard";
import { getAllJobs } from "../Services/PostJobService";
import { useParams } from "react-router-dom";

const RecommendedJobs = () => {
  const { id } = useParams();
  const jobId = Number(id);
  const [jobList, setJobList] = useState<any>();
  useEffect(() => {
    getAllJobs()
      .then((res) => {
        setJobList(res?.filter((job: any) => job.status == "ACTIVE"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="">
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col gap-5">
        {jobList?.map(
          (job: any, index: number) =>
            job.id !== jobId && index < 4 && <JobCard {...job} key={index} />
        )}
      </div>
    </div>
  );
};

export default RecommendedJobs;

import { jobs } from "../Data/data";
import JobCard from "../FindJobs/JobCard";

const RecommendedJobs = () => {
  return (
    <div className="">
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col gap-5">
        {jobs.map(
          (job, index) => index < 6 && <JobCard {...job} key={index} />
        )}
      </div>
    </div>
  );
};

export default RecommendedJobs;

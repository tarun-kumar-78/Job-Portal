import { jobs } from "../Data/data";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
  return (
    <div className="flex flex-wrap  gap-4 py-3">
      {jobs.map((job, index) => index < 6 && <JobCard key={index} {...job} />)}
    </div>
  );
};

export default CompanyJobs;

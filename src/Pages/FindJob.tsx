import { Divider } from "@mantine/core";
import Job from "../FindJobs/Job";
import SearchBar from "../FindJobs/SearchBar";
import JobCard from "../FindJobs/JobCard";
import { jobs } from "../Data/data";

const FindJob = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Job />
      <Divider size="xs" mx="md" />
      <div className="mt-10 flex gap-5 flex-wrap px-20">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default FindJob;

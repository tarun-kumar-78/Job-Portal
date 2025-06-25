import { Divider } from "@mantine/core";
import Job from "../FindJobs/Job";
import SearchBar from "../FindJobs/SearchBar";
import JobCard from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/PostJobService";

const FindJob = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllJobs()
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Job />
      <Divider size="xs" mx="md" />
      <div className="mt-10 flex gap-5 flex-wrap px-20">
        {data.map((job: any, index: number) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default FindJob;

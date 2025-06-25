import { Tabs } from "@mantine/core";
import { jobs } from "../Data/data";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/PostJobService";

const JobHistory = () => {
  const [];
  const [jobList, setJobList] = useState<any>();

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        console.log(res);
        setJobList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="text-2xl font-semibold py-2">Job History</div>
      <Tabs defaultValue="applied" className="[&_button]:text-lg font-semibold">
        <Tabs.List>
          <Tabs.Tab value="applied">Applied</Tabs.Tab>
          <Tabs.Tab value="saved">Saved</Tabs.Tab>
          <Tabs.Tab value="offered">Offered</Tabs.Tab>
          <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="applied">
          <div className="mt-10 flex gap-5 flex-wrap px-20">
            {jobs.map((job, index) => (
              <Card key={index} applied {...job} />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="saved">
          <div className="mt-10 flex gap-5 flex-wrap px-20">
            {jobs.map((job, index) => (
              <Card key={index} {...job} saved />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="offered">
          <div className="mt-10 flex gap-5 flex-wrap px-20">
            {jobs.map((job, index) => (
              <Card key={index} {...job} offered />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="interviewing">
          <div className="mt-10 flex gap-5 flex-wrap px-20">
            {jobs.map((job, index) => (
              <Card key={index} {...job} interviewing />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default JobHistory;

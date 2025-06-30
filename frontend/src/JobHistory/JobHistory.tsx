import { Tabs } from "@mantine/core";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/PostJobService";
import { getItem } from "../Services/LocalStorageService";
import { useSelector } from "react-redux";

const JobHistory = () => {
  const [activeTab, setActiveTab] = useState<any>("APPLIED");
  const [jobList, setJobList] = useState<any>([]);
  const [showList, setShowList] = useState<any>();
  const user = getItem("user");
  const profile = useSelector((state: any) => state.profile);

  const handleTabChange = (value: string | null) => {
    setActiveTab(value);
    if (value == "SAVED") {
      setShowList(
        jobList.filter((job: any) => profile.savedJobs?.includes(job.id))
      );
    } else {
      setShowList(
        jobList.filter((job: any) => {
          let found = false;
          job.applicant?.forEach((applicant: any) => {
            if (
              applicant.applicantId == user.id &&
              applicant.applicationStatus == value
            )
              found = true;
          });
          return found;
        })
      );
    }
  };

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        setJobList(res);
        setShowList(
          res.filter((job: any) => {
            let found = false;
            job.applicant?.forEach((applicant: any) => {
              if (
                applicant.applicantId == user.id &&
                applicant.applicationStatus == "APPLIED"
              )
                found = true;
            });
            return found;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="text-2xl font-semibold py-2 mx-2">Job History</div>
      <Tabs
        mx="md"
        value={activeTab}
        onChange={handleTabChange}
        className="[&_button]:text-lg font-semibold"
      >
        <Tabs.List>
          <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
          <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
          <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
          <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={activeTab}>
          <div className="mt-10 flex gap-5 flex-wrap px-20">
            {showList?.map((job: any, index: number) => (
              <Card
                key={index}
                {...job}
                {...{ [activeTab.toLowerCase()]: true }}
              />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default JobHistory;

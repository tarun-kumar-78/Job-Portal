import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc = (props: any) => {
  const [tab, setTab] = useState<any>();
  const [arr, setArr] = useState([]);

  const handleTab = (e: any) => {
    setTab(e);
    if (e == "applicants")
      setArr(
        props.applicant?.filter(
          (applicant: any) => applicant.applicationStatus == "APPLIED"
        )
      );
    else if (e === "invites") {
      setArr(
        props.applicant?.filter(
          (applicant: any) => applicant.applicationStatus == "INTERVIEWING"
        )
      );
    } else if (e == "offered") {
      setArr(
        props.applicant?.filter(
          (applicant: any) => applicant.applicationStatus == "OFFERED"
        )
      );
    } else {
      setArr(
        props.applicant?.filter(
          (applicant: any) => applicant.applicationStatus == "REJECTED"
        )
      );
    }
  };
  console.log(arr);

  useEffect(() => {
    setTab("overview");
  }, [props]);

  return (
    <div className="mt-5 w-3/4 px-5">
      {props.title ? (
        <>
          <div className="text-2xl font-semibold flex items-center">
            {props.title}
            <Badge variant="light" color="brightSun.4" size="sm" ml="sm">
              {props.status}
            </Badge>
          </div>
          <div className="font-medium text-mine-shaft-300 mb-5">
            {props.location}
          </div>
          <div>
            <Tabs value={tab} onChange={handleTab}>
              <Tabs.List>
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="invites">Invited</Tabs.Tab>
                <Tabs.Tab value="offered">Offered</Tabs.Tab>
                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="overview" className="[&>div]:w-full ">
                <JobDesc edit {...props} closed={props.status == "CLOSED"} />
              </Tabs.Panel>

              <Tabs.Panel value="applicants">
                <div className="flex flex-wrap gap-7 mt-5">
                  {arr?.length == 0 ? (
                    <div className="flex items-center justify-center w-full font-semibold text-2xl">
                      No Applicants
                    </div>
                  ) : (
                    arr?.map((talent: any, index: number) => (
                      <TalentCard shedule key={index} {...talent} />
                    ))
                  )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="invites">
                <div className="flex gap-5 flex-wrap pt-5">
                  {arr?.length == 0 ? (
                    <div className="flex items-center justify-center w-full font-semibold text-2xl">
                      No candidates Invited
                    </div>
                  ) : (
                    arr?.map((talent: any, index: number) => (
                      <TalentCard
                        shedule
                        key={index}
                        {...talent}
                        {...props}
                        invited
                      />
                    ))
                  )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="offered">
                <div className="flex gap-5 flex-wrap pt-5">
                  {arr?.length == 0 ? (
                    <div className="flex items-center justify-center w-full font-semibold text-2xl">
                      No Job Offered
                    </div>
                  ) : (
                    arr?.map((talent: any, index: number) => (
                      <TalentCard key={index} {...talent} />
                    ))
                  )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="rejected">
                <div className="flex gap-5 flex-wrap pt-5">
                  {arr?.length == 0 ? (
                    <div className="flex items-center justify-center w-full font-semibold text-2xl">
                      No candidates Rejected
                    </div>
                  ) : (
                    arr?.map((talent: any, index: number) => (
                      <TalentCard key={index} {...talent} {...props} />
                    ))
                  )}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="text-2xl font-semibold flex justify-center items-center min-h-[70vh]">
          No Job Selected
        </div>
      )}
    </div>
  );
};

export default PostedJobDesc;

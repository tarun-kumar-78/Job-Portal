import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { useEffect, useState } from "react";

const PostedJobs = (props: any) => {
  // console.log(props);
  const [active, setActive] = useState<string | null>("ACTIVE");

  useEffect(() => {
    setActive(props.job?.status || "ACTIVE");
    // console.log(props.job?.status);
  }, [props.job]);

  return (
    <div className="mt-5 w-1/6">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
        <Tabs autoContrast variant="pills" value={active} onChange={setActive}>
          <Tabs.List>
            <Tabs.Tab value="ACTIVE">
              Active[
              {
                props.jobList?.filter((job: any) => job.status == "ACTIVE")
                  .length
              }
              ]
            </Tabs.Tab>
            <Tabs.Tab value="DRAFT">
              Drafts[
              {
                props.jobList?.filter((job: any) => job.status == "DRAFT")
                  .length
              }
              ]
            </Tabs.Tab>
          </Tabs.List>

          <div className="flex flex-col gap-5 py-5">
            {active == "ACTIVE"
              ? props.jobList?.map(
                  (item: any, index: number) =>
                    item.status == "ACTIVE" && (
                      <PostedJobCard key={index} {...item} />
                    )
                )
              : props.jobList?.map(
                  (item: any, index: number) =>
                    item.status == "DRAFT" && (
                      <PostedJobCard key={index} {...item} />
                    )
                )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobs;

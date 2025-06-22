import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/data";
import PostedJobCard from "./PostedJobCard";

const PostedJobs = () => {
  return (
    <div className="mt-5 w-1/6">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
        <Tabs autoContrast variant="pills" defaultValue="active">
          <Tabs.List>
            <Tabs.Tab value="active">Active[4]</Tabs.Tab>
            <Tabs.Tab value="draft">Drafts[1]</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="active">
            <div className="flex flex-col gap-5 py-5">
              {activeJobs.map((item, index) => (
                <PostedJobCard key={index} {...item} />
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="draft">s</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobs;

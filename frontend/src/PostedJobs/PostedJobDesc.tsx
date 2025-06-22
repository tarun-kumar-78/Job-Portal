import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talent } from "../Data/data";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer
        <Badge variant="light" color="brightSun.4" size="sm" ml="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300 mb-5">
        New York, Unites States
      </div>
      <div>
        <Tabs defaultValue="overview">
          <Tabs.List>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invites">Invited</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview" className="[&>div]:w-full ">
            <JobDesc edit />
          </Tabs.Panel>

          <Tabs.Panel value="applicants">
            <div className="flex flex-wrap gap-7 mt-5">
              {talent.map(
                (talent, index) =>
                  index < 4 && <TalentCard shedule key={index} {...talent} />
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invites">
            <div className="flex gap-5 flex-wrap pt-5">
              {talent.map(
                (talent, index) =>
                  index < 4 && <TalentCard invited key={index} {...talent} />
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDesc;

import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
// import Meta from "../assets/Company/Meta.png";
import banner from "../assets/banner.jpg";
import avatar from "../assets/avatar1.jpg";
import avatar1 from "../assets/avatar2.jpg";
import avatar2 from "../assets/avatar3.jpg";
import About from "./About";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployee from "./CompanyEmployee";

const Company = (props: any) => {
  return (
    <div className="w-9/12 px-3">
      <div className="relative">
        <img className="rounded-t-2xl h-52 w-full" src={banner} alt="" />
        <img
          src={`/public/Company/google`}
          className="rounded-xl p-3 bg-mine-shaft-950 w-36 h-36 absolute -bottom-14 left-6 border-mine-shaft-900 border"
          alt=""
        />
      </div>
      <div className="px-3 mt-20">
        <div className="text-3xl font-semibold flex justify-between items-center">
          Meta
          <Avatar.Group>
            <Avatar src={avatar} />
            <Avatar src={avatar1} />
            <Avatar src={avatar2} />
            <Avatar>+10K</Avatar>
          </Avatar.Group>
        </div>

        <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5" /> Mumbai
        </div>
        <Divider size="xs" my="xl" />
        <div>
          <Tabs
            defaultValue="About"
            className="[&_button]:text-lg font-semibold"
          >
            <Tabs.List>
              <Tabs.Tab value="About">About</Tabs.Tab>
              <Tabs.Tab value="Jobs">Jobs</Tabs.Tab>
              <Tabs.Tab value="Employees">Employees</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="About">
              <About {...props} />
            </Tabs.Panel>

            <Tabs.Panel value="Jobs">
              <CompanyJobs />
            </Tabs.Panel>
            <Tabs.Panel value="Employees">
              <CompanyEmployee />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Company;

import { Avatar, TextInput } from "@mantine/core";
import boy from "../assets/boy-removebg-preview.png";
import { IconSearch } from "@tabler/icons-react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
// import google from "../assets/Company/google.png";
const DreamJob = () => {
  return (
    <div className="flex items-center  px-20">
      <div className="w-[45%] flex flex-col gap-3">
        <div className="text-7xl font-bold text-mine-shaft-100 leading-tight  [&>span]:text-bright-sun-400">
          Find your <span>dream</span> <span>job</span> with us
        </div>
        <div className="text-mine-shaft-200 text-lg">
          Good life begins with good company. Start explore thousand of jobs in
          one place
        </div>
        <div className="flex gap-3 items-center mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg px-1 py-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 rounded-lg p-2 hover:bg-bright-sun-500">
            <IconSearch className="h-[85%] w-[85%] text-mine-shaft-100 " />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex justify-center">
        <div className="w-[30rem] relative">
          <img src={boy} alt="boy" />
          <div className="w-fit p-2 border-bright-sun-400 border rounded-lg backdrop-blur-md absolute top-[80%] ">
            <div className="text-center text-sm text-mine-shaft-100 w-fit mb-1">
              10K+ got job
            </div>

            <Avatar.Group>
              <Avatar src={avatar1} />
              <Avatar src={avatar2} />
              <Avatar src={avatar3} />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>
          <div className="w-fit p-2 border-bright-sun-400 border rounded-lg backdrop-blur-md absolute top-[80%] -right-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-12 h-12 p-1 bg-mine-shaft-900 rounded-lg">
                <img src={`/public/Company/Google`} alt="" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 text-mine-shaft-200 text-sm">
                <span>1 day ago</span>
                <span>120 Applicants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;

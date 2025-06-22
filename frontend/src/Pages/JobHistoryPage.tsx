import { Divider } from "@mantine/core";
import JobHistory from "../JobHistory/JobHistory";

const JobHistoryPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <div className="my-5">
        <JobHistory />
      </div>
    </div>
  );
};

export default JobHistoryPage;

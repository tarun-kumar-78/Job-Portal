import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJob from "../ApplyJob/ApplyJob";

const ApplyJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <Link to="/jobs" className="my-4 inline-block mx-4">
        <Button
          color="brightSun.4"
          variant="light"
          leftSection={<IconArrowLeft />}
          size="sm"
        >
          Back
        </Button>
      </Link>
      <div>
        <ApplyJob />
      </div>
    </div>
  );
};

export default ApplyJobPage;

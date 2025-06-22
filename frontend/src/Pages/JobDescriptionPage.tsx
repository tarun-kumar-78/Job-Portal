import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

const JobDescriptionPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <Link to="/find-jobs" className="my-4 inline-block mx-4">
        <Button
          color="brightSun.4"
          variant="light"
          leftSection={<IconArrowLeft />}
          size="sm"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-24 justify-center">
        <JobDesc />

        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDescriptionPage;

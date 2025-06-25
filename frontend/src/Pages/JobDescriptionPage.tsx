import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";
import { useEffect, useState } from "react";
import { getJob } from "../Services/PostJobService";

const JobDescriptionPage = () => {
  const { id } = useParams();
  const jobId = Number(id);
  // console.log(typeof id);
  const [job, setJob] = useState<any>();
  useEffect(() => {
    window.scrollTo(0, 0);
    getJob(jobId)
      .then((res) => {
        setJob(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
        <JobDesc {...job} />

        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDescriptionPage;

import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyJob from "../ApplyJob/ApplyJob";
import { useEffect, useState } from "react";
import { getJob } from "../Services/PostJobService";

const ApplyJobPage = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState<any>();
  const jobId = Number(id);
  const navigate = useNavigate();
  useEffect(() => {
    getJob(jobId)
      .then((res) => setJobData(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />

      <Button
        onClick={() => navigate(-1)}
        color="brightSun.4"
        variant="light"
        leftSection={<IconArrowLeft />}
        size="sm"
        my="md"
        mx="md"
      >
        Back
      </Button>

      <div>
        <ApplyJob {...jobData} />
      </div>
    </div>
  );
};

export default ApplyJobPage;

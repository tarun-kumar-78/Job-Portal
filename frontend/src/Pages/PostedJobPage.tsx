import { Divider } from "@mantine/core";
import PostedJobs from "../PostedJobs/PostedJobs";
import PostedJobDesc from "../PostedJobs/PostedJobDesc";
import { useEffect, useState } from "react";
import { getPostedBy } from "../Services/PostJobService";
import { useNavigate, useParams } from "react-router-dom";
import { getItem } from "../Services/LocalStorageService";

const PostedJobPage = () => {
  const { id } = useParams();
  const [jobList, setJobList] = useState<any>([]);
  const [job, setJob] = useState<any>([]);
  const user = getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    getPostedBy(user.id)
      .then((res) => {
        setJobList(res);
        if (res && res.length > 0 && Number(id) == 0)
          navigate(`/posted-jobs/${res[0].id}`);
        setJob(res.find((job: any) => job.id == id));
        // console.log(job);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins'] px-5">
      <Divider size="xs" />

      <div className="flex gap-5">
        <PostedJobs job={job} jobList={jobList} />
        <PostedJobDesc {...job} />
      </div>
    </div>
  );
};

export default PostedJobPage;

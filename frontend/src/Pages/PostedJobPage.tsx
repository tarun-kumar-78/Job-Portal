import { Divider } from "@mantine/core";
import PostedJobs from "../PostedJobs/PostedJobs";
import PostedJobDesc from "../PostedJobs/PostedJobDesc";

const PostedJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins'] px-5">
      <Divider size="xs" />

      <div className="flex gap-5">
        <PostedJobs />
        <PostedJobDesc />
      </div>
    </div>
  );
};

export default PostedJobPage;

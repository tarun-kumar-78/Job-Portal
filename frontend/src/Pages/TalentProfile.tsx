import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import { talent } from "../Data/data";

const TalentProfile = () => {
  let { id } = useParams();
  let num = Number(id);
  const data = talent.filter((talent) => talent.id == num);
  const obj = Object.assign({}, ...data);
  // console.log(obj);
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <Link to="/find-talent" className="my-4 inline-block mx-4">
        <Button
          color="brightSun.4"
          variant="light"
          leftSection={<IconArrowLeft />}
          size="sm"
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-10">
        <Profile {...obj} />
        <RecommendTalent />
      </div>
    </div>
  );
};

export default TalentProfile;

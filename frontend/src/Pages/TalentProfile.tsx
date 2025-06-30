import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import { useEffect, useState } from "react";
import { getProfile } from "../Services/ProfileService";

const TalentProfile = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [talent, setTalent] = useState({});

  useEffect(() => {
    getProfile(Number(id))
      .then((res) => {
        setTalent(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  // console.log(obj);
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />

      <Button
        color="brightSun.4"
        variant="light"
        leftSection={<IconArrowLeft />}
        size="sm"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <div className="flex gap-10">
        <Profile {...talent} />
        <RecommendTalent />
      </div>
    </div>
  );
};

export default TalentProfile;

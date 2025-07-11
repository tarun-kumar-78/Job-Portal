import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import { useEffect, useState } from "react";
import { getProfiles } from "../Services/ProfileService";

const TalentProfile = () => {
  const navigate = useNavigate();
  const [talent, setTalent] = useState<any>();

  useEffect(() => {
    getProfiles()
      .then((res) => {
        setTalent(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />

      <Button
        color="brightSun.4"
        variant="light"
        leftSection={<IconArrowLeft />}
        size="sm"
        onClick={() => navigate(-1)}
        m="md"
      >
        Back
      </Button>

      <div className="flex gap-10">
        <Profile />
        <RecommendTalent talent={talent} />
      </div>
    </div>
  );
};

export default TalentProfile;

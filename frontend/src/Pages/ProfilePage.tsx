import { Divider } from "@mantine/core";
import UserProfile from "../Profile/UserProfile";

const ProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider mx="md" mb="xl" />
      <UserProfile />
    </div>
  );
};

export default ProfilePage;

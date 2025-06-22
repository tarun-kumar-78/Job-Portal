import banner from "../assets/banner.jpg";
import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { useEffect } from "react";

import { getProfile, updateProfile } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import SectionInfo from "./SectionInfo";
import { setProfile } from "../Slices/ProfileSlice";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";

const UserProfile = () => {
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const { hovered, ref } = useHover();

  const handleFileChange = async (image: any) => {
    let picture: any = await getBase64(image);
    let updatedProfile = { ...profile, picture: picture.split(",")[1] };
    dispatch(setProfile(updatedProfile));
    updateProfile(updatedProfile)
      .then((res) => {
        console.log(res);
        successNotification("Success", "Profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Failed", "Failed to update profile picture");
      });
  };

  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
    });
  };

  // API Call
  useEffect(() => {
    getProfile(user.profileId)
      .then((res) => {
        console.log(res);
        dispatch(setProfile(res));
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-4/5 mx-auto p-3 my-3 font-['poppins']">
      <div className="relative">
        <img className="rounded-t-2xl h-52 w-full" src={banner} alt="" />
        <div
          ref={ref}
          className="absolute -bottom-1/3 left-3 flex items-center justify-center"
        >
          <Avatar
            className="!w-48 !h-48 border-8 border-mine-shaft-900 rounded-full"
            src={
              profile.picture
                ? `data:image/jpeg;base64,${profile.picture}`
                : `${Avatar}`
            }
            alt="profile"
          />
          {hovered && (
            <Overlay
              color="#000"
              backgroundOpacity={0.75}
              className="!rounded-full"
            />
          )}
          {hovered && <IconEdit className="absolute z-[300] w-16 h-16" />}
          {hovered && (
            <FileInput
              onChange={handleFileChange}
              accept="image/png,image/jpeg"
              className="absolute w-full [&_*]:!h-full !h-full z-[301] [&_*]:!rounded-full"
              variant="transparent"
            />
          )}
        </div>
      </div>
      <div className="px-3 mt-20">
        <SectionInfo {...profile} />

        <Divider size="xs" my="lg" />
        <div>
          <AboutSection />
          <Divider size="xs" my="lg" />
          <SkillsSection />
          <Divider size="xs" my="lg" />
          <Experience add />
          <Divider size="xs" my="lg" />
          <Certificate />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

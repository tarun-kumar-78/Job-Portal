import banner from "../assets/banner.jpg";
import avatar from "../assets/avatar2.jpg";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Button, Divider } from "@mantine/core";
import ExperienceCard from "./ExperienceCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../Services/ProfileService";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<any>();
  useEffect(() => {
    window.scrollTo(0, 0);
    getProfile(Number(id))
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  // console.log(profile);

  return (
    <div className="w-2/3 p-3">
      <div className="relative">
        <img className="rounded-t-2xl h-52 w-full" src={banner} alt="" />
        <img
          src={
            profile?.picture
              ? `data:image/jpeg;base64,${profile?.picture}`
              : avatar
          }
          className="rounded-full w-48 h-48 absolute -bottom-20 left-6 border-mine-shaft-950 border-8"
          alt=""
        />
      </div>
      <div className="px-3 mt-20">
        <div className="text-3xl font-semibold flex justify-between items-center">
          {profile?.name}
          <Button color="brightSun.4" variant="outline">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-2 items-center text-mine-shaft-300">
          <IconBriefcase className="h-5 w-5" />
          {profile?.jobTitle} &bull; {profile?.company}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5" /> {profile?.location}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
          <IconBriefcase className="h-5 w-5" /> {profile?.exp}
          {profile?.exp > 1 ? " Years" : "Year"}
        </div>
        <Divider size="xs" my="xl" />
        <div>
          <div className="text-2xl font-semibold mb-3">About</div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            {profile?.about}
          </div>
          <Divider size="xs" my="xl" />
          <div>
            <div className="text-2xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">
              {profile?.skills?.map((skill: any, index: any) => (
                <div
                  key={index}
                  className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <Divider size="xs" my="xl" />
          <div>
            <div className="text-2xl font-semibold mb-3">Experience</div>
            <div>
              {profile?.experiences?.map((exp: any, index: number) => (
                <div className="my-4">
                  <ExperienceCard {...exp} key={index} />
                </div>
              ))}
            </div>
          </div>
          <Divider size="xs" my="xl" />
          <div>
            <div className="text-2xl font-semibold mb-3">Certifications</div>
            <div>
              {profile?.certifications?.map(
                (certificate: any, index: number) => (
                  <div className="my-4">
                    <CertiCard key={index} {...certificate} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

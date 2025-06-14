import banner from "../assets/banner.jpg";
import avatar from "../assets/avatar2.jpg";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import ExperienceCard from "./ExperienceCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";

import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import { getProfile } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import SectionInfo from "./SectionInfo";
import { setProfile } from "../Slices/ProfileSlice";

const UserProfile = () => {
  const [edit, setEdit] = useState([false, false, false, false, false]);

  const [value, setValue] = useState(
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum abodio quisquam numquam ullam labore, vero officia praesentium deserunt iste. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Error, harum voluptatem architecto eius quas magnam deserunt ducimus nobis! Eaque earum modi aspernatur, id quod voluptatibus voluptatum enim laborum nostrum. Laborum delectus fugiat mollitia alias pariatur dolor, labore deleniti unde? Tempora excepturi a adipisci ipsam, neque quidem eligendi numquam eos. Facere."
  );
  const [skill, setSkill] = useState(["React", "HTML"]);
  const [exp, setExp] = useState(false);
  const [certi, setCerti] = useState(false);
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  console.log(profile);

  // API Call
  useEffect(() => {
    getProfile(user.profileId)
      .then((res) => {
        console.log(res);
        dispatch(setProfile(res));
      })

      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (index: number) => {
    const newEdit = [...edit]; // Put all the values of edit array into newEdit
    newEdit[index] = !newEdit[index]; // Revert the value of particular index
    setEdit(newEdit);
    console.log(edit);
  };
  return (
    <div className="w-4/5 mx-auto p-3 my-3 font-['poppins']">
      <div className="relative">
        <img className="rounded-t-2xl h-52 w-full" src={banner} alt="" />
        <img
          src={avatar}
          className="rounded-full w-48 h-48 absolute -bottom-20 left-4 mb-3 border-mine-shaft-950 border-8"
          alt=""
        />
      </div>
      <div className="px-3 mt-20">
        <SectionInfo {...profile} />

        <Divider size="xs" my="lg" />
        <div>
          <div className="flex justify-between">
            <div className="text-2xl font-semibold mb-3">About</div>
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={() => handleEdit(1)}
            >
              {edit[1] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
              ) : (
                <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
              )}
            </ActionIcon>
          </div>
          {edit[1] ? (
            <Textarea
              placeholder="Enter about yourself..."
              className="[&_.mantine-Input-input]:font-['poppins']"
              rows={5}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          ) : (
            <div className="text-sm text-mine-shaft-300 text-justify">
              {profile.about}
            </div>
          )}
          <Divider size="xs" my="lg" />
          <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">
              Skills
              <ActionIcon
                variant="subtle"
                size="lg"
                onClick={() => handleEdit(2)}
              >
                {edit[2] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
                ) : (
                  <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
                )}
              </ActionIcon>
            </div>
            {edit[2] ? (
              <TagsInput
                label="Skill"
                placeholder="Enter Skill"
                withAsterisk
                value={skill}
                onChange={setSkill}
                splitChars={[",", " ", "|"]}
                className="[&_input]:font-['poppins']"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile?.skills?.map((skill: any, index: number) => (
                  <div
                    key={index}
                    className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Divider size="xs" my="lg" />
          <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">
              Experience{" "}
              <div className="flex gap-2">
                <ActionIcon variant="subtle" size="lg">
                  <IconPlus
                    className="h-4/5 w-4/5 text-bright-sun-400"
                    stroke={2.5}
                    onClick={() => setExp(true)}
                  />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  size="lg"
                  onClick={() => handleEdit(3)}
                >
                  {edit[3] ? (
                    <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
                  ) : (
                    <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
                  )}
                </ActionIcon>
              </div>
            </div>

            <div>
              {profile?.experiences?.map((exp: any, index: number) => (
                <ExperienceCard edit={edit[3]} exp={exp} key={index} />
              ))}
              {exp && <ExpInput setEdit={setExp} add />}
            </div>
          </div>
          <Divider size="xs" my="lg" />
          <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">
              Certifications{" "}
              <div className="flex gap-2">
                <ActionIcon variant="subtle" size="lg">
                  <IconPlus
                    className="h-4/5 w-4/5 text-bright-sun-400"
                    stroke={2.5}
                    onClick={() => setCerti(true)}
                  />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  size="lg"
                  onClick={() => setCerti(true)}
                >
                  {edit[4] ? (
                    <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
                  ) : (
                    <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
                  )}
                </ActionIcon>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {profile?.certifications?.map((certi: any, index: number) => (
                <CertiCard edit={edit[4]} certi={certi} key={index} />
              ))}

              {certi && <CertiInput edit={setCerti} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

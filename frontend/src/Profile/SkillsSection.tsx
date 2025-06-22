import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import { successNotification } from "../Services/NotificationService";

const SkillsSection = () => {
  const [edit, setEdit] = useState(false);
  const [skill, setSkill] = useState(["React", "Java"]);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
      setSkill(profile.skills);
    }
  };

  const handleSave = () => {
    let updatedData = { ...profile, skills: skill };
    dispatch(setProfile(updatedData));
    updateProfile(updatedData)
      .then((res) => {
        console.log(res);
        successNotification("Success", "Profile Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    setEdit(false);
  };
  return (
    <div>
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Skills
        <div>
          {edit && (
            <ActionIcon variant="subtle" size="lg" onClick={handleSave}>
              <IconCheck className="h-4/5 w-4/5 text-green-600" />
            </ActionIcon>
          )}
          <ActionIcon variant="subtle" size="lg" onClick={handleEdit}>
            {edit ? (
              <IconX className="h-4/5 w-4/5 text-red-600" />
            ) : (
              <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </div>
      </div>
      {edit ? (
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
  );
};

export default SkillsSection;

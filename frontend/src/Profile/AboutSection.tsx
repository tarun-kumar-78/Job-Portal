import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import { successNotification } from "../Services/NotificationService";

const AboutSection = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const profile = useSelector((state: any) => state.profile);
  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      setValue(profile.about);
    } else setEdit(false);
  };

  const handleSave = () => {
    let updatedData = { ...profile, about: value };
    dispatch(setProfile(updatedData));
    updateProfile(updatedData)
      .then((res) => {
        console.log(res);
        successNotification("Success", "Profile Updated Successfully");
        setEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="text-2xl font-semibold mb-3">About</div>
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
    </>
  );
};

export default AboutSection;

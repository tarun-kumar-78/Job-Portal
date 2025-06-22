import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import ExpInput from "./ExpInput";
import { useSelector } from "react-redux";
import { useState } from "react";

const Experience = (props: any) => {
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState(false);
  const [addExp, setAddExp] = useState(false);

  const handleEdit = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const handleAddExp = () => {
    setAddExp(true);
  };
  return (
    <div>
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Experience{" "}
        <div className="flex gap-2">
          <div>
            <ActionIcon variant="subtle" size="lg" onClick={handleAddExp}>
              <IconPlus
                className="h-4/5 w-4/5 text-bright-sun-400"
                stroke={2.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" size="lg" onClick={handleEdit}>
              {edit ? (
                <IconX className="h-4/5 w-4/5 text-red-600" />
              ) : (
                <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
              )}
            </ActionIcon>
          </div>
        </div>
      </div>

      <div>
        {profile?.experiences?.map((exp: any, index: number) => (
          <ExperienceCard edit={edit} {...exp} key={index} index={index} />
        ))}
        {addExp && <ExpInput {...props} setEdit={setAddExp} edit={edit} add />}
      </div>
    </div>
  );
};

export default Experience;

import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import CertiCard from "./CertiCard";
import CertiInput from "./CertiInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Certificate = () => {
  const [edit, setEdit] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const profile = useSelector((state: any) => state.profile);

  const handleAddExp = () => {
    setAddCerti(true);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div>
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Certifications{" "}
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
      <div className="flex flex-col gap-3">
        {profile?.certifications?.map((certi: any, index: number) => (
          <CertiCard edit={edit} {...certi} key={index} index={index} />
        ))}

        {addCerti && <CertiInput setEdit={setAddCerti} />}
      </div>
    </div>
  );
};

export default Certificate;

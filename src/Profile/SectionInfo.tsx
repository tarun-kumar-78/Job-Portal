import { ActionIcon } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { selectfields } from "../Data/data";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useSelector } from "react-redux";

const SectionInfo = (props: any) => {
  const select = selectfields;
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state: any) => state.profile);

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
      });
    } else {
      setEdit(false);
      console.log(form.getValues());
    }
  };

  const form = useForm({
    mode: "controlled",
    initialValues: { jobTitle: "", company: "", location: "" },
  });

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between items-center">
        <div>Jarod Wood</div>
        <ActionIcon variant="subtle" size="lg" onClick={handleEdit}>
          {edit ? (
            <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
          ) : (
            <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
          )}
        </ActionIcon>
      </div>
      {!edit ? (
        <>
          <div className="text-xl flex gap-2 items-center text-mine-shaft-300">
            <IconBriefcase className="h-5 w-5" />
            {props.jobTitle} &bull; {props.company}
          </div>
          <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
            <IconMapPin className="h-5 w-5" /> {props.location}
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-10 [&>*]:w-1/2 my-3">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[2]} />
          </div>
          <div className="mb-3">
            <SelectInput form={form} name="location" {...select[1]} />
          </div>
        </>
      )}
    </>
  );
};

export default SectionInfo;

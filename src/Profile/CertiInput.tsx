import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import { selectfields } from "../Data/data";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {
  const select = selectfields;
  const [issueDate, setIssueDate] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2 my-3  [&_input]:font-['poppins']">
        <TextInput label="Title" placeholder="Enter Title" withAsterisk />
        <SelectInput {...select[0]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2  [&_*]:font-['poppins'] [&_input]:font-['poppins']">
        <MonthPickerInput
          label="Issue Date"
          placeholder="End Date"
          withAsterisk
          value={issueDate}
          onChange={setIssueDate}
          maxDate={new Date()}
        />
        <TextInput label="Certificate ID" placeholder="Enter Id" withAsterisk />
      </div>
      <div className="flex gap-4 my-3">
        <Button
          variant="outline"
          onClick={() => props.setEdit(false)}
          color="brightSun.4"
        >
          Save
        </Button>
        <Button
          color="red.8"
          variant="light"
          onClick={() => props.setEdit(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;

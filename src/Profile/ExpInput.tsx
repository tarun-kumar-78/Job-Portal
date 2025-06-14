import { Button, Checkbox, Textarea } from "@mantine/core";
import { selectfields } from "../Data/data";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = selectfields;
  const [startMonth, setStartMonth] = useState<string | null>(null);
  const [endMonth, setEndMonth] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [desc, setDesc] = useState("");
  return (
    <div>
      {props.add ? "Add Experience" : "Edit Experience"}
      <div className="flex gap-10 [&>*]:w-1/2 my-3">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <div className="mb-3">
        <SelectInput {...select[2]} />
        <Textarea
          label="Description"
          withAsterisk
          placeholder="Enter about yourself..."
          className="[&_.mantine-Input-input]:font-['poppins'] my-4"
          rows={5}
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 my-3 [&_span]:font-['poppins']">
        <MonthPickerInput
          label="Start Date"
          placeholder="Start Date"
          withAsterisk
          value={startMonth}
          onChange={setStartMonth}
          maxDate={endMonth || undefined}
        />
        {!checked ? (
          <MonthPickerInput
            label="End Date"
            placeholder="End Date"
            withAsterisk
            value={endMonth}
            onChange={setEndMonth}
            maxDate={new Date()}
            minDate={startMonth || undefined}
          />
        ) : (
          <MonthPickerInput
            label="End Date"
            placeholder="End Date"
            withAsterisk
            disabled
            value={endMonth}
            onChange={setEndMonth}
            maxDate={new Date()}
            minDate={startMonth || undefined}
          />
        )}
      </div>
      <Checkbox
        label="Currently Working"
        autoContrast
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
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

export default ExpInput;

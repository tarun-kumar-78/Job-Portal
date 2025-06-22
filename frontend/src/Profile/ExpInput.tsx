import { Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";

const ExpInput = (props: any) => {
  const [startDate, setStartdate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const profile = useSelector((state: any) => state.profile);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  let form = {
    title: props.add ? title : props.title, // Field name in backend code is same as frontend
    company: props.add ? company : props.company,
    location: props.add ? location : props.location,
    description: props.add ? desc : props.description,
    startDate: props.add ? startDate : props.startDate,
    endDate: props.add ? endDate : props.endDate,
    working: props.add ? check : props.working,
  };

  // console.log(form);
  //Method to update experience
  const handleSave = () => {
    let exp = [...profile.experiences];
    if (!props.add) {
      form.startDate = new Date(form.startDate);
      form.endDate = new Date(form.endDate);
      exp[props.index] = form;
      console.log(exp);
      exp[props.index].startDate = exp[props.index].startDate.toISOString();
      if (form.working) {
        exp[props.index].endDate = new Date().toISOString();
      } else {
        exp[props.index].endDate = exp[props.index].endDate.toISOString();
      }
    } else {
      form.startDate = new Date(startDate);
      form.endDate = new Date(endDate);
      exp.push(form);
      console.log(exp);
      exp[exp.length - 1].startDate =
        exp[exp.length - 1].startDate.toISOString(); // convert date to year-month-day format string
      if (form.working) {
        console.log(form.working);
        exp[exp.length - 1].endDate = new Date().toISOString();
      } else {
        exp[exp.length - 1].endDate = exp[exp.length - 1].endDate.toISOString();
      }
    }
    let updatedProfile = { ...profile, experiences: exp };
    console.log(updateProfile);
    dispatch(setProfile(updatedProfile));
    updateProfile(updatedProfile)
      .then((res) => {
        console.log(res);
        successNotification("Success", "Experience Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Failed", "Failed to update");
      });
    props.setEdit(false);
  };

  return (
    <div>
      <div className="my-3 font-semibold">
        {props.add ? "Add Experience" : "Edit Experience"}
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 my-3 [&_input]:font-['poppins']">
        <TextInput
          label="Title"
          placeholder="Enter Title"
          withAsterisk
          onChange={(e) => setTitle(e.target.value)}
          value={form.title}
        />
        <TextInput
          label="Company"
          placeholder="Enter company name"
          withAsterisk
          onChange={(e) => setCompany(e.target.value)}
          value={form.company}
        />
      </div>
      <div className="mb-3 [&_input]:font-['poppins']">
        <TextInput
          label="Location"
          placeholder="Enter company location"
          withAsterisk
          onChange={(e) => setLocation(e.target.value)}
          value={form.location}
        />
        <Textarea
          label="Description"
          withAsterisk
          placeholder="Enter about yourself..."
          className="[&_.mantine-Input-input]:font-['poppins'] my-4"
          rows={5}
          value={form.description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 my-3 [&_span]:font-['poppins'] [&_button]:font-['poppins']">
        <MonthPickerInput
          label="Start Date"
          placeholder="Start Date"
          withAsterisk
          onChange={setStartdate}
          value={form.startDate}
          maxDate={endDate}
        />

        <MonthPickerInput
          label="End Date"
          placeholder={check ? "" : "End Date"}
          withAsterisk
          disabled={check}
          maxDate={new Date()}
          onChange={setEndDate}
          value={form.endDate}
          minDate={startDate || undefined}
        />
      </div>

      <Checkbox
        checked={check}
        onChange={() => setCheck(!check)}
        label="Currently Working"
        autoContrast
      />

      <div className="flex gap-4 my-3">
        <Button variant="light" color="green.8" onClick={handleSave}>
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

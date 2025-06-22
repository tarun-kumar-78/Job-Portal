import { Button, TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
import { useState } from "react";

const CertiInput = (props: any) => {
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const [issueDate, setIssueDate] = useState<any>();

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      issuer: "",
      issueDate: "",
      certificationId: "",
    },
    validate: {
      title: isNotEmpty("Title is required"),
      issuer: isNotEmpty("Issuer name is required"),
      issueDate: isNotEmpty("Issue date is required"),
      certificationId: isNotEmpty("Certification id is required"),
    },
  });

  const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;
    let exp = [...profile.certifications];
    exp.push(form.getValues());
    console.log(exp);
    exp[exp.length - 1].issueDate = new Date(
      exp[exp.length - 1].issueDate
    ).toISOString();
    let updatedProfile = { ...profile, certifications: exp };
    dispatch(setProfile(updatedProfile));
    updateProfile(updatedProfile)
      .then((res) => {
        console.log(res);
        successNotification("Success", "Profile Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Failed", "Failed to update");
      });

    props.setEdit(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2 my-3  [&_input]:font-['poppins']">
        <TextInput
          label="Title"
          placeholder="Enter Title"
          withAsterisk
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Issuer"
          withAsterisk
          placeholder="Enter issuer name"
          {...form.getInputProps("issuer")}
        />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2  [&_button]:font-['poppins'] [&_input]:font-['poppins']">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Enter issue date"
          withAsterisk
          maxDate={new Date()}
          onChange={setIssueDate}
          value={issueDate}
        />
        <TextInput
          label="Certificate ID"
          placeholder="Enter Id"
          withAsterisk
          {...form.getInputProps("certificationId")}
        />
      </div>
      <div className="flex gap-4 my-3">
        <Button variant="outline" onClick={handleSave} color="brightSun.4">
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

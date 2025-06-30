import { Button, NumberInput, TagsInput } from "@mantine/core";
import { content, fields } from "../Data/data";
import SelectInput from "./SelectInput";
import RichText from "./RichText";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../Services/PostJobService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostJob = () => {
  const select = fields;
  const navigate = useNavigate();
  const profile = useSelector((state: any) => state.profile);

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      company: "",
      jobType: "",
      experience: "",
      location: "",
      packageOffered: "",
      skills: [],
      description: content,
      postedBy: 0,
      status: "",
      // about: "",
    },
    validate: {
      title: isNotEmpty("Job title is required"),
      jobType: isNotEmpty("Job type is required"),
      location: isNotEmpty("Location is required"),
      packageOffered: isNotEmpty("Salary is required"),
      company: isNotEmpty("Company is required"),
      experience: isNotEmpty("Experience is required"),
      skills: isNotEmpty("Skills are required"),
      description: isNotEmpty("Description is required"),
      // about: isNotEmpty("About is required"),
    },
  });

  const handlePostJob = () => {
    form.validate();
    if (!form.isValid()) return;
    // console.log(form.getValues());
    postJob({ ...form.getValues(), postedBy: profile.id, status: "ACTIVE" })
      .then((res) => {
        console.log(res);
        successNotification("Success", "Job Posted Successfully");
        navigate(`/posted-jobs/${res.id}`);
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Failed", "Failed to post job");
      });
  };

  const handleDraftJob = () => {
    postJob({ ...form.getValues(), postedBy: profile.id, status: "DRAFT" })
      .then((res) => {
        console.log(res);
        successNotification("Success", "Job Drafted Successfully");
        navigate(`/posted-jobs/${res.id}`);
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Failed", "Failed to post job");
      });
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold py-2">Post a Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} form={form} name="title" />
          <SelectInput {...select[1]} form={form} name="company" />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} form={form} name="jobType" />
          <SelectInput {...select[3]} form={form} name="experience" />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} form={form} name="location" />
          <NumberInput
            label="Salary"
            placeholder="Enter Salary"
            withAsterisk
            min={1}
            max={300}
            clampBehavior="strict"
            className="[&_input]:font-['poppins']"
            {...form.getInputProps("packageOffered")}
          />
        </div>
        <TagsInput
          {...form.getInputProps("skills")}
          className="[&_input]:font-['poppins']"
          withAsterisk
          label="Skills"
          placeholder="Enter skills"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />

        <div className="[&_button[data-active='true']]:text-bright-sun-400 [&_button[data-active='true']]:bg-bright-sun-400/20">
          <div className="text-sm font-medium">
            Job Description <span className="text-red-500">*</span>
          </div>
          <RichText form={form} />
        </div>
        <div className="flex gap-3">
          <Button
            color="brightSun.4"
            variant="light"
            size="sm"
            onClick={handlePostJob}
          >
            Publish Job
          </Button>
          <Button
            color="brightSun.4"
            variant="outline"
            size="sm"
            onClick={handleDraftJob}
          >
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;

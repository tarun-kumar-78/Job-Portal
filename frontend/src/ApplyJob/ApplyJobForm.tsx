import {
  Button,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from "../Services/Utitlity";
import { applyJob } from "../Services/PostJobService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
import { useSelector } from "react-redux";

const ApplyJobForm = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();
  const { id } = useParams();
  const jobId = Number(id);
  const user = useSelector((state: any) => state.profile);

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      applicantId: 0,
      name: "",
      email: "",
      website: "",
      phone: "",
      coverLetter: "",
      resume: null,
    },
    validate: {
      name: isNotEmpty("Name is required"),
      email: isNotEmpty("Email is required"),
      phone: isNotEmpty("Phone no is required"),
      resume: isNotEmpty("Resume is required"),
    },
  });

  const handleSubmit = async () => {
    setSubmit(true);
    let resume: any = await getBase64(form.getValues().resume);
    let applicant = {
      ...form.getValues(),
      applicantId: user.id,
      resume: resume.split(",")[1],
    };
    applyJob(jobId, applicant)
      .then((res) => {
        console.log(res);
        setSubmit(false);
        successNotification("Success", `Application Submitted Successfully`);
        let x = 5;
        const interval = setInterval(() => {
          x--;
          setSec(x);
          if (x == 0) {
            clearInterval(interval);
            setSubmit(false);
            navigate("/job-history");
          }
        }, 1000);
      })
      .catch((err) => {
        setSubmit(false);
        console.log(err);
        errorNotification("Failed", err.response.data.errorMessage);
      });
    // console.log(form.getValues());
  };

  const handlePreview = () => {
    console.log(preview);
    form.validate();
    if (!form.isValid()) console.log(form.isValid());
    setPreview(!preview);
  };
  return (
    <>
      <LoadingOverlay
        className="!fixed"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div
        className={`[&_input]:placeholder:font-sans [&_input]:placeholder:text-sm flex flex-col gap-5 [&_input]:text-lg [&_input]:font-sans ${
          preview ? "[&_input]:border-none" : "[&_input]:border"
        } `}
      >
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("name")}
            readOnly={preview}
            label="Full Name"
            placeholder="Enter Name"
            withAsterisk
          />
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="Enter Email"
            withAsterisk
            readOnly={preview}
          />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <NumberInput
            {...form.getInputProps("phone")}
            readOnly={preview}
            label="Phone No"
            placeholder="Enter Phone No"
            withAsterisk
            hideControls
            clampBehavior="strict"
            min={0}
            max={9999999999}
          />

          <TextInput
            {...form.getInputProps("website")}
            readOnly={preview}
            label="Personal Website"
            placeholder="Enter URL"
            withAsterisk
          />
        </div>

        <FileInput
          {...form.getInputProps("resume")}
          readOnly={preview}
          className="[&_button]:font-['poppins']"
          accept="application/pdf"
          label="Attach Your CV"
          placeholder="Choose File"
          withAsterisk
          clearable
          leftSection={<IconPaperclip stroke={1.5} />}
        />
        <Textarea
          className="[&_.mantine-Input-input]:font-['poppins']"
          {...form.getInputProps("coverLetter")}
          readOnly={preview}
          label="Cover Letter"
          placeholder="Enter About yourself"
          rows={5}
        />
        {preview ? (
          <div className="flex gap-5">
            <Button
              color="brightSun.4"
              variant="light"
              fullWidth
              onClick={handlePreview}
            >
              Edit
            </Button>
            <Button
              color="brightSun.4"
              variant="outline"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        ) : (
          <Button color="brightSun.4" variant="light" onClick={handlePreview}>
            Preview
          </Button>
        )}
      </div>
    </>
  );
};

export default ApplyJobForm;

import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
// import Meta from "../assets/Company/Meta.png";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ApplyJob = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handlePreview = () => {
    setPreview(!preview);
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    const interval = setInterval(() => {
      x--;
      setSec(x);
      if (x == 0) {
        clearInterval(interval);
        setSubmit(false);
        navigate("/find-jobs");
      }
    }, 1000);
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
      <div className="w-2/3 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <img
                src={`/public/Company/google`}
                className="h-14 bg-mine-shaft-700 p-3 rounded-xl"
                alt="Meta"
              />
            </div>
            <div className="">
              <div className="text-2xl text-mine-shaft-300 font-semibold">
                Product Engineer
              </div>
              <div className="text-lg text-mine-shaft-400">
                Meta &bull; 3 days ago &bull; 20 Applicants
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center"></div>
        </div>
        <Divider my="xl" />
        <div>
          <div className="text-xl font-semibold mb-5">
            Submit Your Application
          </div>
          <div
            className={`[&_input]:placeholder:font-sans [&_input]:placeholder:text-sm flex flex-col gap-5 [&_input]:text-lg [&_input]:font-sans ${
              preview ? "[&_input]:border-none" : "[&_input]:border"
            } `}
          >
            <div className="flex gap-10 [&>*]:w-1/2">
              <TextInput
                readOnly={preview}
                label="Full Name"
                placeholder="Enter Name"
                withAsterisk
              />
              <TextInput
                label="Email"
                placeholder="Enter Email"
                withAsterisk
                readOnly={preview}
              />
            </div>

            <div className="flex gap-10 [&>*]:w-1/2">
              <NumberInput
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
                readOnly={preview}
                label="Personal Website"
                placeholder="Enter URL"
                withAsterisk
              />
            </div>

            <FileInput
              readOnly={preview}
              accept="pdf"
              label="Attach Your CV"
              placeholder="Choose File"
              withAsterisk
              clearable
              leftSection={<IconPaperclip stroke={1.5} />}
            />
            <Textarea
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
              <Button
                color="brightSun.4"
                variant="light"
                onClick={handlePreview}
              >
                Preview
              </Button>
            )}
          </div>
        </div>
      </div>
      <Notification
        icon={<IconCheck />}
        color="teal"
        title="Appliction Submitted"
        mt="md"
        withCloseButton={false}
        withBorder
        className={`!border-bright-sun-400  !fixed top-0  left-[35%] z-[1001] ${
          submit
            ? "translate-y-20 transition duration-300 ease-in-out"
            : "-translate-y-20"
        }`}
      >
        Redirecting to Find Jobs Page in {sec} second
      </Notification>
    </>
  );
};

export default ApplyJob;

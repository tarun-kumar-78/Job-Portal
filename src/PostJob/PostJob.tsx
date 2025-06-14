import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/data";
import SelectInput from "./SelectInput";
import RichText from "./RichText";

const PostJob = () => {
  const select = fields;
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold py-2">Post a Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>
        <TagsInput
          withAsterisk
          label="Skills"
          placeholder="Enter skills"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />
        <div className="[&_button[data-active='true']]:text-bright-sun-400 [&_button[data-active='true']]:bg-bright-sun-400/20">
          <div className="text-sm font-medium">Job Description</div>
          <RichText />
        </div>
        <div className="flex gap-3">
          <Button color="brightSun.4" variant="light" size="sm">
            Publish Job
          </Button>
          <Button color="brightSun.4" variant="outline" size="sm">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;

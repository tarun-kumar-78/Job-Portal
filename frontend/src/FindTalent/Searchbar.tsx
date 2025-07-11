import { useState } from "react";
import { searchFields } from "../Data/data";
import { Input, RangeSlider } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import MultiInput from "../FindJobs/MultiInput";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Slices/FilterSlice";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 60]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleTalentNameChange = (name: any, event: any) => {
    if (name == "exp") {
      dispatch(updateFilter({ exp: event }));
    } else {
      setName(event.target.value);
      dispatch(updateFilter({ name: event.target.value }));
    }
  };
  return (
    <div className="flex gap-3 pt-5 px-3 py-5 items-center">
      <div>
        <div className=" px-2 mr-2 flex items-center bg-mine-shaft-900 rounded-md">
          <IconUserCircle className="text-bright-sun-400" />
          <Input
            className="text-mine-shaft-100 bg-mine-shaft-900 px-1 [&_input]:font-['poppins']"
            variant="unstyled"
            placeholder="Talent Name"
            defaultValue={name}
            onChange={(e) => handleTalentNameChange("name", e)}
          />
        </div>
      </div>
      {searchFields.map((item: any, index: any) => (
        <div key={index} className="w-1/5">
          <MultiInput {...item} />
        </div>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
        <div className="flex justify-between">
          <div>Experience</div>
          <div className="text-sm">
            {value[0]} Year - {value[1]} Years
          </div>
        </div>
        <RangeSlider
          min={1}
          minRange={1}
          max={60}
          size="xs"
          color="brightSun.4"
          value={value}
          onChange={setValue}
          onChangeEnd={(e) => handleTalentNameChange("exp", e)}
        />
      </div>
    </div>
  );
};

export default SearchBar;

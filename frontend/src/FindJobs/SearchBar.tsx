import { useState } from "react";
import { dropDown } from "../Data/data";
import MultiInput from "./MultiInput";
import { RangeSlider } from "@mantine/core";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex gap-3 pt-5 px-3 py-5">
      {dropDown.map((item, index) => (
        <div key={index} className="w-1/5">
          <MultiInput {...item} />
        </div>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
        <div className="flex justify-between">
          <div>Salary</div>
          <div className="text-sm">
            {value[0]} LPA - {value[1]} LPA
          </div>
        </div>
        <RangeSlider
          min={1}
          max={100}
          size="xs"
          color="brightSun.4"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;

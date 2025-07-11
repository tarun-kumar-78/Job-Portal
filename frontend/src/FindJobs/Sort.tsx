import { useState } from "react";
import { Combobox, useCombobox } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { updateSort } from "../Slices/SortSlice";

const Sort = (props: any) => {
  let opt = [
    "Relevance",
    "Most Recent",
    props.job ? "Salary (Low to High)" : "Experience (Low to High)",
    props.job ? "Salary (High to Low)" : "Experience (High to Low)",
  ];
  {
    !props.job ? (opt = opt.filter((opt: any) => opt != "Most Recent")) : opt;
  }

  const [selectedItem, setSelectedItem] = useState<string | null>("Relevance");
  const dispatch = useDispatch();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option
      className="text-xs font-['poppins']"
      value={item}
      key={item}
    >
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(updateSort(val));
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div
            className="border border-bright-sun-400 flex items-center px-2 py-1 rounded-xl gap-2 cursor-pointer text-sm"
            onClick={() => combobox.toggleDropdown()}
          >
            {selectedItem}{" "}
            <IconAdjustments className="text-bright-sun-400 h-5 w-5" />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
};

export default Sort;

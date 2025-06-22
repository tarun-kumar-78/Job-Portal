import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 px-2 py-1 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img src={props.icon} className="w-10" alt="Meta" />
          </div>
          <div className="">
            <div className="text-lg text-mine-shaft-300 font-semibold">
              {props.name}
            </div>
            <div>{props.employees} Employees</div>
          </div>
        </div>
        <div className="flex items-center">
          <ActionIcon color="brightSun.4" variant="subtle">
            <IconExternalLink />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;

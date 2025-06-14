import { ActionIcon } from "@mantine/core";
import Meta from "../assets/Company/Meta.png";
import { IconTrash } from "@tabler/icons-react";
import { formatDate } from "../Services/Utitlity";
const CertiCard = (props: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={Meta}
              className="w-10 bg-mine-shaft-700 p-1 rounded-md"
              alt="Meta"
            />
          </div>
          <div className="">
            <div className="font-semibold text-lg">{props.certi.title}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.certi.issuer}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-mine-shaft-300 flex flex-col items-end">
            <div>{formatDate(props.certi.issueDate)}</div>
            <div>{props.certi.certificationId}</div>
          </div>
          {props.edit && (
            <ActionIcon variant="subtle" size="lg" color="red.8">
              <IconTrash className="w-4/5 h-4/5" stroke={2.5} />
            </ActionIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertiCard;

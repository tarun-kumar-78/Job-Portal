import { formatDate } from "../Services/Utitlity";

// import Meta from "../assets/Company/Meta.png";
const CertiCard = (props: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={`/Company/${props.issuer}.png`}
              className="w-10 bg-mine-shaft-700 p-1 rounded-md"
              alt="Meta"
            />
          </div>
          <div className="">
            <div className="font-semibold text-lg">{props.title}</div>
            <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 flex flex-col items-end">
          <div>{formatDate(props.issueDate)}</div>
          <div>{props.certificationId}</div>
        </div>
      </div>
    </div>
  );
};

export default CertiCard;

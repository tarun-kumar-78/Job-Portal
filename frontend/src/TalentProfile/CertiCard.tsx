// import Meta from "../assets/Company/Meta.png";
const CertiCard = (props: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={"/public/Company/${props.issuer}"}
              className="w-10 bg-mine-shaft-700 p-1 rounded-md"
              alt="Meta"
            />
          </div>
          <div className="">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">Meta</div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 flex flex-col items-end">
          <div>{props.issueDate}</div>
          <div>{props.certificateId}</div>
        </div>
      </div>
    </div>
  );
};

export default CertiCard;

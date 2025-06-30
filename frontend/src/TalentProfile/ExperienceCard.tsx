const ExperienceCard = (props: any) => {
  console.log(props);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={`/Company/${props.company}.png`}
              className="w-10 bg-mine-shaft-700 p-1 rounded-md"
              alt={props.company}
            />
          </div>
          <div className="">
            <div className="font-semibold text-lg">{props.title}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &bull; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          {props.startDate} - {props.endDate}
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>
    </div>
  );
};

export default ExperienceCard;

import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = (props: any) => {
  return (
    <div className="">
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col gap-5">
        {props.talent?.map((talent: any, index: number) => (
          <TalentCard {...talent} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommendTalent;

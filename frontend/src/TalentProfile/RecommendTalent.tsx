import { talent } from "../Data/data";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = () => {
  return (
    <div className="">
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col gap-5">
        {talent.map(
          (talent, index) => index < 3 && <TalentCard {...talent} key={index} />
        )}
      </div>
    </div>
  );
};

export default RecommendTalent;

import { talent } from "../Data/data";
import TalentCard from "../FindTalent/TalentCard";

const CompanyEmployee = () => {
  return (
    <div className="flex gap-3 flex-wrap py-3">
      {talent.map(
        (talent, index) => index < 4 && <TalentCard key={index} {...talent} />
      )}
    </div>
  );
};

export default CompanyEmployee;

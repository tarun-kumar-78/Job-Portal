import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/Searchbar";
import Talents from "../FindTalent/Talents";
import TalentCard from "../FindTalent/TalentCard";
import { talent } from "../Data/data";

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Talents />
      <div className="mt-8 flex gap-5 flex-wrap px-40">
        {talent.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};
export default FindTalentPage;

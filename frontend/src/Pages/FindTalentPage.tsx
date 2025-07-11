import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/Searchbar";
import Talents from "../FindTalent/Talents";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";
import { getProfiles } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../Slices/FilterSlice";
const FindTalentPage = () => {
  const [talent, setTalent] = useState([]);
  const filter = useSelector((state: any) => state.filter);
  const [filtered, setFilteredTalent] = useState<any>();
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.sort);

  useEffect(() => {
    dispatch(resetFilter());
    getProfiles()
      .then((res) => {
        setTalent(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (sort == "Most Recent") {
      setTalent(
        [...talent]?.sort(
          (a: any, b: any) =>
            new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
        )
      );
    }
    if (sort == "Experience (Low to High)") {
      setTalent([...talent]?.sort((a: any, b: any) => a.exp - b.exp));
    }
    if (sort == "Experience (High to Low)") {
      setTalent([...talent]?.sort((a: any, b: any) => b.exp - a.exp));
    }
  }, [sort]);

  useEffect(() => {
    let filterTalent = talent;

    if (filter.name) {
      filterTalent = filterTalent.filter((talent: any) =>
        talent.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }
    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterTalent = filterTalent.filter((talent: any) =>
        filter["Job Title"]?.some((title: any) =>
          talent.jobTitle.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
    if (filter.Location && filter.Location.length > 0) {
      filterTalent = filterTalent.filter((talent: any) =>
        filter.Location?.some((title: any) =>
          talent.location.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
    if (filter.Skills && filter.Skills.length > 0) {
      filterTalent = filterTalent.filter((talent: any) =>
        filter.Skills?.some((skill: any) =>
          talent.skills?.some((talentSkill: any) =>
            talentSkill.toLowerCase().includes(skill.toLowerCase())
          )
        )
      );
    }
    if (filter.exp && filter.exp.length > 0) {
      filterTalent = filterTalent.filter(
        (talent: any) =>
          filter.exp[0] <= talent.exp && talent.exp <= filter.exp[1]
      );
    }
    console.log(filterTalent);
    setFilteredTalent(filterTalent);
  }, [filter, talent]);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Talents />
      <div className="mt-8 flex gap-5 flex-wrap px-40">
        {filtered?.length ? (
          filtered.map((talent: any, index: any) => (
            <TalentCard key={index} {...talent} />
          ))
        ) : (
          <div className="font-semibold text-2xl flex justify-center w-full">
            No data found
          </div>
        )}
      </div>
    </div>
  );
};
export default FindTalentPage;

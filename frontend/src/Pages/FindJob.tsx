import { Divider } from "@mantine/core";
import Job from "../FindJobs/Job";
import SearchBar from "../FindJobs/SearchBar";
import JobCard from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/PostJobService";
import { useDispatch, useSelector } from "react-redux";
import { resetSort } from "../Slices/SortSlice";

const FindJob = () => {
  const [data, setData] = useState([]);
  const filter = useSelector((state: any) => state.filter);
  const [filterTalent, setFilteredTalent] = useState([]);
  const sort = useSelector((state: any) => state.sort);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(resetSort());
    getAllJobs()
      .then((res) => {
        // console.log(res);
        setData(res.filter((job: any) => job.status == "ACTIVE"));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (sort == "Most Recent") {
      setData(
        [...data]?.sort(
          (a: any, b: any) =>
            new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
        )
      );
    }
    if (sort == "Salary (Low to High)") {
      setData(
        [...data]?.sort((a: any, b: any) => a.packageOffered - b.packageOffered)
      );
    }
    if (sort == "Salary (High to Low)") {
      setData(
        [...data]?.sort((a: any, b: any) => b.packageOffered - a.packageOffered)
      );
    }
  }, [sort]);

  useEffect(() => {
    let filterTalent = data;
    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterTalent = filterTalent.filter((talent: any) =>
        filter["Job Title"]?.some((title: any) =>
          talent.title.toLowerCase().includes(title.toLowerCase())
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
    if (filter["Experience"] && filter["Experience"].length > 0) {
      filterTalent = filterTalent.filter((job: any) =>
        filter.Experience?.some((exp: any) =>
          job.experience.toLowerCase().includes(exp.toLowerCase())
        )
      );
    }
    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filterTalent = filterTalent.filter((job: any) =>
        filter["Job Type"].some((type: any) =>
          job.jobType.toLowerCase().includes(type.toLowerCase())
        )
      );
    }
    if (filter["sal"] && filter["sal"].length > 0) {
      filterTalent = filterTalent.filter(
        (job: any) =>
          filter.sal[0] <= job.packageOffered &&
          filter.sal[1] >= job.packageOffered
      );
    }

    setFilteredTalent(filterTalent);
  }, [filter, data, sort]);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mx="md" />
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Job />
      <Divider size="xs" mx="md" />
      <div className="mt-10 flex gap-5 flex-wrap px-20">
        {filterTalent.map((job: any, index: number) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default FindJob;

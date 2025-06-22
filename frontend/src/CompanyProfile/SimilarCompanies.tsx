import { companies } from "../Data/data";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
  return (
    <div className="w-1/4 px-5">
      <div className="text-xl font-semibold mb-5">Similar Companies</div>
      <div className="flex flex-col gap-5">
        {companies.map((company: any, index: any) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanies;

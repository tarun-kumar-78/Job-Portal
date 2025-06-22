import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" />
      <Link to="/jobs" className="my-4 inline-block mx-4">
        <Button
          color="brightSun.4"
          variant="light"
          leftSection={<IconArrowLeft />}
          size="sm"
        >
          Back
        </Button>
      </Link>
      <div className="flex justify-between">
        <Company />
        <SimilarCompanies />
      </div>
    </div>
  );
};

export default CompanyPage;

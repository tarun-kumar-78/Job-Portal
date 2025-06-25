import { companyData } from "../Data/data";

const About = (props: any) => {
  const company: { [key: string]: any } = companyData;
  return (
    <div className="flex flex-col gap-5 py-2">
      {Object.keys(company).map(
        (key: any, index: any) =>
          key != "name" && (
            <div key={index}>
              <div className="font-semibold text-xl text-mine-shaft-200">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
              {key != "website" && (
                <div className="text-mine-shaft-400 text-sm text-justify">
                  {key != "specialties"
                    ? company[key]
                    : company[key].map((value: any, index: any) => (
                        <span className="mr-2" key={index}>
                          &bull; {value}
                        </span>
                      ))}
                </div>
              )}
              {key == "website" && (
                <a
                  href={company[key]}
                  target="_blank"
                  className="text-bright-sun-400 text-sm"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default About;

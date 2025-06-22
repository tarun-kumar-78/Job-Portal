import { IconBookmark } from "@tabler/icons-react";
// import Meta from "../assets/Company/Meta.png";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/data";
import DOMPurify from "dompurify";

const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(desc);
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="w-2/3 p-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={`/Company/Adobe.png`}
              className="h-14 bg-mine-shaft-700 p-3 rounded-xl"
              alt="Meta"
            />
          </div>
          <div className="">
            <div className="text-2xl text-mine-shaft-300 font-semibold">
              Product Engineer
            </div>
            <div className="text-lg text-mine-shaft-400">
              Meta &bull; 3 days ago &bull; 20 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="brightSun.4" variant="light" size="sm">
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>
          {props.edit ? (
            <Button color="red.5" variant="light">
              Delete
            </Button>
          ) : (
            <IconBookmark className="w-5 h-5 text-bright-sun-400" />
          )}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item: any, index: any) => (
          <div key={index} className="flex flex-col gap-1 items-center">
            <ActionIcon
              variant="light"
              className="!h-12 !w-12"
              color="brightSun.4"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <ActionIcon
              key={index}
              variant="light"
              className="!h-fit !w-fit font-medium !text-sm"
              color="brightSun.4"
              p="xs"
              radius="xl"
              aria-label="Settings"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      {/* Direcly add the raw html into page.Due to that there may be chance of XSS attack in future so we have to use this carefully and for that we use dompurify library that purify thr html before sending */}
      <div
        className="[&_h4]:my-5 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={`/public/Company/Meta.png`}
                  className="h-14 bg-mine-shaft-700 p-3 rounded-xl"
                  alt="Meta"
                />
              </div>
              <div>
                <div className="text-2xl text-mine-shaft-300 font-semibold">
                  Meta
                </div>
                <div className="text-sm text-mine-shaft-400">10K+ Employee</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Link to="/company">
                <Button color="brightSun.4" variant="light" size="sm">
                  Company Page
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-mine-shaft-300 mt-2 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium laboriosam dolore nam id voluptas repudiandae laborum
            consectetur et natus, distinctio, itaque voluptatem corporis
            aspernatur voluptatum nihil molestiae rem maxime dolorem odio
            consequuntur autem, nemo enim ut quisquam! Possimus, soluta nulla.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;

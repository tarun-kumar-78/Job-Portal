import { Button } from "@mantine/core";
import Google from "../assets/Company/google.png";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../Services/Utitlity";
const ExperienceCard = (props: any) => {
  const [edit, setEdit] = useState(false);
  // console.log(edit);
  return (
    <>
      {!edit ? (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={Google}
                  className="w-10 bg-mine-shaft-700 p-1 rounded-md"
                  alt="Meta"
                />
              </div>
              <div className="">
                <div className="font-semibold text-lg">{props.exp.title}</div>
                <div className="text-sm text-mine-shaft-300">
                  {props.exp.company} &bull; {props.exp.location}
                </div>
              </div>
            </div>
            <div className="text-sm text-mine-shaft-300">
              {formatDate(props.exp.startDate)} -{" "}
              {formatDate(props.exp.endDate)}
            </div>
          </div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            {props.exp.description}
          </div>
          {props.edit && (
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setEdit(true)}
                color="brightSun.4"
              >
                Edit
              </Button>
              <Button color="red.8" variant="light">
                Delete
              </Button>
            </div>
          )}
        </div>
      ) : (
        <ExpInput setEdit={setEdit} />
      )}
    </>
  );
};

export default ExperienceCard;

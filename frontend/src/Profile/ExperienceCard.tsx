import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../Services/Utitlity";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
const ExperienceCard = (props: any) => {
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  // Method to delete Experience
  const handleDelete = () => {
    let exp = [...profile.experiences];
    exp.splice(props.index, 1);
    let updatedProfile = { ...profile, experiences: exp };
    dispatch(setProfile(updatedProfile));
    updateProfile(updatedProfile)
      .then((res) => {
        console.log(res);
        successNotification("Deleted", "Experience deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Failed", "Failed to delete");
      });
  };

  return (
    <>
      {!edit ? (
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={`/Company/${props.company}.png`}
                  className="w-10 bg-mine-shaft-700 p-1 rounded-md"
                  alt="Meta"
                />
              </div>
              <div className="">
                <div className="font-semibold text-lg">{props.title}</div>
                <div className="text-sm text-mine-shaft-300">
                  {props.company} &bull; {props.location}
                </div>
              </div>
            </div>
            <div className="text-sm text-mine-shaft-300">
              {formatDate(props.startDate)} -{" "}
              {!props.working ? formatDate(props.endDate) : "Present"}
            </div>
          </div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            {props.description}
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
              <Button color="red.8" variant="light" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
      ) : (
        <ExpInput {...props} setEdit={setEdit} />
      )}
    </>
  );
};

export default ExperienceCard;

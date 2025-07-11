import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { formatDate } from "../Services/Utitlity";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
const CertiCard = (props: any) => {
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const handleDelete = () => {
    let certi = [...profile.certifications];
    certi.splice(props.index, 1);
    dispatch(setProfile(certi));
    let updatedProfile = { ...profile, certifications: certi };
    updateProfile(updatedProfile)
      .then((res) => {
        console.log(res);
        successNotification("Success", "Certificate deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Failed", "Failed to delete");
      });
  };

  // console.log(props);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={`/Company/${props.issuer}.png`}
              className="w-10 bg-mine-shaft-700 p-1 rounded-md"
              alt={props.issuer}
            />
          </div>
          <div className="">
            <div className="font-semibold text-lg">{props.title}</div>
            <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-mine-shaft-300 flex flex-col items-end">
            <div>{formatDate(props.issueDate)}</div>
            <div>{props.certificationId}</div>
          </div>
          {props.edit && (
            <ActionIcon
              variant="subtle"
              size="lg"
              color="red.8"
              onClick={handleDelete}
            >
              <IconTrash className="w-4/5 h-4/5" stroke={2.5} />
            </ActionIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertiCard;

import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { useEffect, useRef, useState } from "react";
import avater from "./../assets/avatar2.jpg";
import { changeJobStatus } from "../Services/PostJobService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
import { formatInterviewDate, showPdfFromBase64 } from "../Services/Utitlity";
import { getProfile } from "../Services/ProfileService";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [app, { open: openApp, close: closeApp }] = useDisclosure(false);
  const [profile, setProfile] = useState<any>();
  const ref = useRef<HTMLInputElement>(null);
  const [interviewDate, setInterviewDate] = useState<any>(new Date());
  const [interviewTime, setInterviewTime] = useState<any>(null);
  const { id } = useParams();

  const sheduleInterview = (status: string) => {
    let interview: any = {
      id: Number(id),
      applicantId: profile.id,
      applicationStatus: status,
    };
    if (status == "INTERVIEWING") {
      const [hour, min] = interviewTime?.split(":").map(Number);
      const date = new Date(interviewDate);
      date?.setHours(hour, min);
      interview = { ...interview, interviewTime: date };
    }
    changeJobStatus(interview)
      .then((res) => {
        console.log(res);
        if (status == "INTERVIEWING") {
          successNotification(
            "Interview Sheduled",
            "Interview Sheduled Successfully"
          );
        } else if (status == "OFFERED") {
          successNotification("Offered", "Job offer has sent Successfully");
        } else {
          successNotification("Rejected", "Rejected Successfully");
        }

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Error", err.response.data.errorMessage);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.applicantId) {
      getProfile(props.applicantId)
        .then((res) => {
          setProfile(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.applicantId]);

  return (
    <div className="w-96 p-4 flex flex-col gap-4 justify-between rounded-xl bg-mine-shaft-900 cursor-pointer hover:shadow-[0_0_5px_1px] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <Avatar
              src={
                profile
                  ? profile?.picture
                    ? `data:image/jpeg;base64,${profile.picture}`
                    : avater
                  : props.picture
                  ? `data:image/jpeg;base64,${props.picture}`
                  : avater
              }
              size="lg"
              className=" bg-mine-shaft-700 p-1 rounded-full"
              alt="Meta"
            />
          </div>
          <div className="">
            <div className="text-lg text-mine-shaft-300 font-semibold">
              {props.name}
            </div>
            <div className="text-xs text-mine-shaft-300">
              {profile ? profile.jobTitle : props?.jobTitle} &bull;{" "}
              {profile ? profile.location : props?.location}
            </div>
          </div>
        </div>
        <div>
          <IconHeart className="w-5 h-5 text-mine-shaft-300" />
        </div>
      </div>
      <div className="flex gap-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-md [&>div]:w-fit [&>div]:py-1 [&>div]:px-2 [&>div]:text-bright-sun-400 [&>div]:text-xs">
        {profile
          ? profile?.skills?.map((skill: any, index: number) => (
              <div key={index}>{skill}</div>
            ))
          : props.skills?.map((skill: any, index: number) => (
              <div key={index}>{skill}</div>
            ))}
      </div>
      <div>
        <Text lineClamp={2} className="!text-xs text-justify">
          {profile ? profile?.about : props.about}
        </Text>
      </div>
      <Divider size="xs" color="mineShaft.7" />
      {props?.invited ? (
        <div className="flex gap-2 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview:{" "}
          {formatInterviewDate(props?.interviewTime)}
        </div>
      ) : (
        <div className="flex justify-between text-xs">
          <div className="text-sm font-semibold">
            Exp{" "}
            {profile
              ? profile.exp
                ? profile.exp
                : 1
              : props.exp
              ? props.exp
              : 1}{" "}
            Year{props.exp > 1 ? "s" : ""}
          </div>
          <div className="flex gap-1 text-mine-shaft-500 items-center">
            <IconMapPin className="w-5 h-5" />
            {profile ? profile.location : props.location}
          </div>
        </div>
      )}

      <Divider size="xs" color="mineShaft.7" />

      {!props?.invited && (
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
          <Link to={`/talent-profile/${profile ? profile.id : props.id}`}>
            <Button color="brightSun.4" fullWidth variant="variant">
              Profile
            </Button>
          </Link>
          <div>
            {props?.shedule ? (
              <Button
                color="brightSun.4"
                fullWidth
                variant="outline"
                onClick={open}
                rightSection={<IconCalendarMonth className="w-5" />}
              >
                Schedule
              </Button>
            ) : (
              <Button color="brightSun.4" fullWidth variant="outline">
                Message
              </Button>
            )}
          </div>
        </div>
      )}

      <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
        {props?.invited && (
          <>
            <div>
              <Button
                color="brightSun.4"
                fullWidth
                variant="outline"
                onClick={() => sheduleInterview("OFFERED")}
              >
                Accept
              </Button>
            </div>
            <div>
              <Button
                color="brightSun.4"
                fullWidth
                variant="light"
                onClick={() => sheduleInterview("REJECTED")}
              >
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      {(props?.invited || props?.shedule) && (
        <Button
          color="brightSun.4"
          fullWidth
          variant="filled"
          autoContrast
          onClick={openApp}
        >
          View Application
        </Button>
      )}
      <Modal
        opened={app}
        onClose={closeApp}
        title="View Profile"
        className="font-['poppins']"
      >
        <div className="flex flex-col gap-4 [&_*]:font-['poppins']">
          <div>
            Email: &emsp;
            <a
              className="text-bright-sun-400 hover:underline cursor-pointer text-center"
              href={`mailto: ${props?.email}`}
            >
              {props?.email}
            </a>
          </div>
          {props?.website && (
            <div>
              Website: &emsp;
              <a
                className="text-bright-sun-400 hover:underline cursor-pointer text-center"
                href={`${props?.website}`}
                target="_blank"
              >
                {props?.website}
              </a>
            </div>
          )}
          <div>
            Phone No: &emsp;
            <a
              className="text-bright-sun-400 hover:underline cursor-pointer text-center"
              href="#"
            >
              {props?.phone}
            </a>
          </div>

          <div>
            Resume: &emsp;
            <span
              className="text-bright-sun-400 hover:underline cursor-pointer text-center"
              onClick={() => showPdfFromBase64(props?.resume)}
            >
              {props?.name}
            </span>
          </div>
          <div>
            Cover Letter: &emsp;<div>{props?.coverLetter}</div>
            <a
              className="text-bright-sun-400 hover:underline cursor-pointer text-center"
              href={`${props.website}`}
              target="_blank"
            >
              {props?.website}
            </a>
          </div>
        </div>
      </Modal>
      <div>
        <Modal opened={opened} onClose={close} title="Shedule Interview">
          <div className="flex flex-col gap-4">
            <DatePickerInput
              label="Date"
              placeholder="Pick date"
              value={interviewDate}
              onChange={setInterviewDate}
              minDate={new Date()}
            />
            <TimeInput
              label="Time"
              ref={ref}
              value={interviewTime}
              onChange={(e) => setInterviewTime(e.target.value)}
              onClick={() => ref.current?.showPicker()}
            />
            <Button
              color="brightSun.4"
              fullWidth
              variant="outline"
              onClick={() => sheduleInterview("INTERVIEWING")}
            >
              Schedule
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default TalentCard;

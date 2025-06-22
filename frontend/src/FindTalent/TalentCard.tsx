import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import avatar2 from "../assets/avatar2.jpg";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { useRef } from "react";
const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="w-96 p-4 flex flex-col gap-4 justify-between rounded-xl bg-mine-shaft-900 cursor-pointer hover:shadow-[0_0_5px_1px] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <Avatar
              src={avatar2}
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
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <div>
          <IconHeart className="w-5 h-5 text-mine-shaft-300" />
        </div>
      </div>
      <div className="flex gap-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-md [&>div]:w-fit [&>div]:py-1 [&>div]:px-2 [&>div]:text-bright-sun-400 [&>div]:text-xs">
        <div>{props.topSkills[0]}</div>
        <div>{props.topSkills[1]}</div>
        <div>{props.topSkills[2]}</div>
      </div>
      <div>
        <Text lineClamp={2} className="!text-xs text-justify">
          {props.about}
        </Text>
      </div>
      <Divider size="xs" color="mineShaft.7" />
      {props.invited ? (
        <div className="flex gap-2 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview: August 23, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between text-xs">
          <div className="text-sm font-semibold">
            &#8377;{props.expectedCtc}
          </div>
          <div className="flex gap-1 text-mine-shaft-500 items-center">
            <IconMapPin className="w-5 h-5" />
            {props.location}
          </div>
        </div>
      )}

      <Divider size="xs" color="mineShaft.7" />

      {!props.invited && (
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
          <Link to={`/talent-profile/${props.id}`}>
            <Button color="brightSun.4" fullWidth variant="variant">
              Profile
            </Button>
          </Link>
          <div>
            {props.shedule ? (
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
        {props.invited && (
          <>
            <div>
              <Link to={`/talent-profile/${props.id}`}>
                <Button color="brightSun.4" fullWidth variant="outline">
                  Accept
                </Button>
              </Link>
            </div>
            <div>
              <Button color="brightSun.4" fullWidth variant="light">
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      <div>
        <Modal opened={opened} onClose={close} title="Shedule Interview">
          <div className="flex flex-col gap-4">
            <DatePickerInput
              label="Date"
              placeholder="Pick date"
              minDate={new Date()}
            />
            <TimeInput
              label="Time"
              ref={ref}
              onClick={() => ref.current?.showPicker()}
            />
            <Button color="brightSun.4" fullWidth variant="outline">
              Schedule
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default TalentCard;

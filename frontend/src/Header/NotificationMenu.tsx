import { Indicator, Menu, Notification, rem } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllNotifications } from "../Services/NotificationService";

const NotificationMenu = () => {
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const [noti, setNoti] = useState<any>([]);
  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    getAllNotifications(user.id)
      .then((res) => {
        setNoti(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <div>
      <Menu width={400} onChange={setOpened} opened={opened}>
        <Menu.Target>
          <div className="bg-mine-shaft-900 flex gap-2 p-1.5 rounded-full">
            <Indicator size={7} color="brightSun.4" offset={3} processing>
              <IconBell stroke={1.5} />
            </Indicator>
          </div>
        </Menu.Target>

        <Menu.Dropdown
          onChange={() => setChecked(false)}
          className="font-['poppins']"
        >
          <div className="flex flex-col py-2">
            {noti?.map((noti: any, index: number) => {
              return (
                <Menu.Item key={index}>
                  <Notification
                    icon={
                      <IconCheck style={{ width: rem(20), height: rem(20) }} />
                    }
                    color="teal"
                    title={noti.action}
                  >
                    {noti.message}
                  </Notification>
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default NotificationMenu;

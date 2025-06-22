import { Menu, Text, Avatar, Switch } from "@mantine/core";
import avatar1 from "../assets/avatar2.jpg";
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Slices/UserSlice";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const profile = useSelector((state: any) => state.profile);

  // Method to handle logout
  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };

  // Fetch user data from store
  const user = useSelector((state: any) => state.user);
  console.log(user);

  return (
    <Menu shadow="md" width={200} onChange={setOpened} opened={opened}>
      <Menu.Target>
        <div className="flex items-center gap-2 cursor-pointer">
          <div>{user.name}</div>
          <Avatar
            src={
              profile.picture
                ? `data:image/jpeg;base64,${profile.picture}`
                : `${avatar1}`
            }
            className="bg-white"
            alt="it's me"
            name="T"
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown
        onChange={() => setChecked(false)}
        className="font-['poppins']"
      >
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              <Switch
                onChange={() => setOpened(true)}
                size="md"
                color="dark.4"
                onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
                offLabel={<IconMoonStars size={16} stroke={2.5} color="cyan" />}
              />
            </Text>
          }
        >
          DarkMode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          onClick={handleLogout}
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;

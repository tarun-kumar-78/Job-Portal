import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const successNotification = (title: string, message: string) => {
  notifications.show({
    title: title,
    message: message,
    withCloseButton: true,
    icon: <IconCheck className="w-[90%] h-[90%]" />,
    color: "green",
    withBorder: true,
    className: "!border-green-500 !font-['poppins']",
  });
};

const errorNotification = (title: string, message: string) => {
  notifications.show({
    title: title,
    message: message,
    withCloseButton: true,
    icon: <IconX className="w-[90%] h-[90%]" />,
    color: "red",
    withBorder: true,
    className: "!border-red-500 !font-['poppins']",
  });
};

export { successNotification, errorNotification };

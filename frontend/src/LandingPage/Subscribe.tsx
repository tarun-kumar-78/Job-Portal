import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="mt-20 pb-5 flex items-center justify-around bg-mine-shaft-900 mx-20 p-2 rounded-xl">
      <div className="text-4xl font-bold text-center w-2/5 text-mine-shaft-100 [&>span]:text-bright-sun-400">
        Never wants to miss Any <span>Jobs News</span>
      </div>
      <div className="flex items-center bg-mine-shaft-700 p-2 rounded-md">
        <TextInput
          className="[&_input]:text-mine-shaft-100"
          variant="unstyled"
          label=""
          placeholder="Your@mail.com"
          size="lg"
        />
        <Button
          size="lg"
          variant="filled"
          color="brightSun.3"
          className="!rounded-lg"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;

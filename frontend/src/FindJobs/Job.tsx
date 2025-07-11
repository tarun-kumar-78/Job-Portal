import Sort from "./Sort";

const Job = () => {
  return (
    <div className="flex justify-between py-5 px-4">
      <div>Recommended Jobs</div>
      <div>
        <Sort job={"job"} />
      </div>
    </div>
  );
};

export default Job;

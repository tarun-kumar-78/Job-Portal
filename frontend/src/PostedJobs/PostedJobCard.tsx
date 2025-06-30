import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../Services/Utitlity";

const PostedJobCard = (props: any) => {
  const { id } = useParams();
  return (
    <Link
      to={`/posted-jobs/${props.id}`}
      className={` rounded-xl p-2 border-l-2 border-bright-sun-400 ${
        props.id == id
          ? "bg-bright-sun-400 text-black border-l-2 border-bright-sun-400"
          : "bg-mine-shaft-900"
      }`}
    >
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="text-xs">{props.location}</div>
      <div className="text-xs ">{timeAgo(props.postTime)}</div>
    </Link>
  );
};

export default PostedJobCard;

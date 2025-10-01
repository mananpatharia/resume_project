import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video._id}`} className="block bg-gray-800 rounded overflow-hidden shadow-md hover:shadow-xl transition">
      <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
      <div className="p-2">
        <h3 className="font-semibold text-white">{video.title}</h3>
        <p className="text-gray-400 text-sm">{video.views} views</p>
      </div>
    </Link>
  );
};

export default VideoCard;

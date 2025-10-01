import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  return (
    <Link to={`/channel/${channel._id}`} className="block bg-gray-800 rounded p-2 hover:bg-gray-700 transition">
      <h3 className="text-white font-semibold">{channel.name}</h3>
      <p className="text-gray-400 text-sm">{channel.subscribersCount} subscribers</p>
    </Link>
  );
};

export default ChannelCard;

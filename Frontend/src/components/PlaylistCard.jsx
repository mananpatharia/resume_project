import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  return (
    <Link to={`/playlist/${playlist._id}`} className="block bg-gray-800 rounded p-2 hover:bg-gray-700 transition">
      <h3 className="text-white font-semibold">{playlist.name}</h3>
      <p className="text-gray-400 text-sm">{playlist.videos.length} videos</p>
    </Link>
  );
};

export default PlaylistCard;

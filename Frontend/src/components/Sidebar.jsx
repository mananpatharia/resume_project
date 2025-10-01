import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 p-4 h-screen">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Link to="/" className="hover:text-red-500">Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-red-500">Dashboard</Link>
        </li>
        <li>
          <Link to="/playlist" className="hover:text-red-500">Playlists</Link>
        </li>
        <li>
          <Link to="/channel" className="hover:text-red-500">Channels</Link>
        </li>
        <li>
          <Link to="/healthcheck" className="hover:text-red-500">Healthcheck</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

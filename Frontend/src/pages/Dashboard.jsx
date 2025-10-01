import { useEffect, useState } from "react";
import { getChannelStats } from "../api/dashboard";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getChannelStats();
        setStats(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard Stats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Videos</h2>
          <p className="text-2xl">{stats.totalVideos}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Views</h2>
          <p className="text-2xl">{stats.totalViews}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Subscribers</h2>
          <p className="text-2xl">{stats.totalSubscribers}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

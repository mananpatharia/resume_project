import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/user";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Channel = () => {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await getUserById(channelId);
        setChannel(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchChannel();
  }, [channelId]);

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">{channel.name}</h1>
      <p className="text-gray-400">{channel.subscribersCount} subscribers</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {channel.videos?.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Channel;

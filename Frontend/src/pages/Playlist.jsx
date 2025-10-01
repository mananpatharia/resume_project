import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPlaylists } from "../api/playlist";
import PlaylistCard from "../components/PlaylistCard";
import Loader from "../components/Loader";

const Playlist = () => {
  const { userId } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await getUserPlaylists(userId);
        setPlaylists(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaylists();
  }, [userId]);

  if (loading) return <Loader />;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist._id} playlist={playlist} />
      ))}
    </div>
  );
};

export default Playlist;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/user";
import Loader from "../components/Loader";

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(userId);
        setUser(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  if (loading) return <Loader />;

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-400">{user.email}</p>
      <p className="mt-2">{user.bio}</p>
    </div>
  );
};

export default Profile;

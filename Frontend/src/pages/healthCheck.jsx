import { useEffect, useState } from "react";
import { checkHealth } from "../api/healthcheck";
import Loader from "../components/Loader";

const Healthcheck = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await checkHealth();
        setStatus(res.message || "OK");
      } catch (err) {
        console.error(err);
        setStatus("Server Down");
      } finally {
        setLoading(false);
      }
    };
    fetchHealth();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold">Healthcheck Status</h1>
      <p className={`mt-2 ${status === "OK" ? "text-green-500" : "text-red-500"}`}>{status}</p>
    </div>
  );
};

export default Healthcheck;

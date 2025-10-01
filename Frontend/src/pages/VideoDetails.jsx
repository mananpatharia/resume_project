import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoById } from "../api/video";
import { getVideoComments, addComment } from "../api/comment";
import VideoPlayer from "../components/VideoPlayer";
import CommentSection from "../components/CommentSection";
import Loader from "../components/Loader";

const VideoDetail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await getVideoById(videoId);
        setVideo(videoRes.data);
        const commentRes = await getVideoComments(videoId);
        setComments(commentRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [videoId]);

  const handleAddComment = async () => {
    if (!newComment) return;
    await addComment(videoId, newComment);
    setNewComment("");
    const commentRes = await getVideoComments(videoId);
    setComments(commentRes.data);
  };

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <VideoPlayer src={video.videoFile} />
      <h1 className="text-xl font-bold mt-2 text-white">{video.title}</h1>
      <p className="text-gray-300">{video.description}</p>

      <CommentSection
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default VideoDetail;

const VideoPlayer = ({ src }) => {
  return (
    <video src={src} controls className="w-full h-96 bg-black rounded" />
  );
};

export default VideoPlayer;

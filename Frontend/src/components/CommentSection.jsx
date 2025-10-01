const CommentSection = ({ comments, onAddComment, newComment, setNewComment }) => {
  return (
    <div className="mt-4">
      <h2 className="font-semibold text-lg text-white">Comments</h2>
      <div className="mt-2 flex flex-col gap-2">
        {comments.map((c) => (
          <div key={c._id} className="bg-gray-700 p-2 rounded text-white">
            <p>{c.content}</p>
            <p className="text-gray-400 text-xs">{new Date(c.createdAt).toLocaleString()}</p>
          </div>
        ))}
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            className="px-2 py-1 rounded text-black flex-1"
          />
          <button onClick={onAddComment} className="bg-red-500 px-3 py-1 rounded">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

import { useState } from "react";
import Button from "../../components/Button";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    console.log("New post:", content);
    setContent("");
  };

  return (
    <div className="p-4 border rounded shadow-sm my-2">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <Button text="Post" onClick={handlePost} className="mt-2" />
    </div>
  );
};

export default CreatePost;

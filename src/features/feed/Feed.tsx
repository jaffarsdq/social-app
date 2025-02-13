import Post from "./Post";

const dummyPosts = [
  { author: "Alice", content: "Hello, world!" },
  { author: "Bob", content: "React is awesome!" },
];

const Feed = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      {dummyPosts.map((post, index) => (
        <Post key={index} author={post.author} content={post.content} />
      ))}
    </div>
  );
};

export default Feed;

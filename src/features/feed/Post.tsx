import Avatar from "../../components/Avatar";

interface PostProps {
  author: string;
  content: string;
  avatar?: string;
}

const Post: React.FC<PostProps> = ({ author, content, avatar }) => {
  return (
    <div className="p-4 border rounded shadow-sm my-2">
      <div className="flex items-center space-x-2">
        <Avatar src={avatar} />
        <h3 className="font-bold">{author}</h3>
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default Post;

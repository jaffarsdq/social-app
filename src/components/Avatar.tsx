interface AvatarProps {
    src?: string;
    alt?: string;
  }
  
  const Avatar: React.FC<AvatarProps> = ({ src, alt = "User avatar" }) => {
    return (
      <img 
        src={src || "/default-avatar.png"} 
        alt={alt} 
        className="w-10 h-10 rounded-full object-cover" 
      />
    );
  };
  
  export default Avatar;
  
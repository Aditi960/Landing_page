interface AvatarProps {
  initials: string;
}

const Avatar = ({ initials }: AvatarProps) => {
  return (
    <div className="relative animate-scale-in">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110" />
      
      {/* Avatar container */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 
                      border-2 border-primary/30 flex items-center justify-center shadow-gold">
        <span className="text-3xl sm:text-4xl font-bold text-gradient-gold font-serif">
          {initials}
        </span>
      </div>
      
      {/* Status indicator */}
      <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 rounded-full 
                      border-4 border-background animate-pulse" />
    </div>
  );
};

export default Avatar;

import { Heart, MessageCircle, Send, Bookmark, Music, MoreHorizontal, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const reels = [
  {
    id: 1,
    username: "sarah_design",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    video: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800",
    caption: "Morning vibes in the mountains ⛰️✨ #nature #travel",
    song: "Original Audio - sarah_design",
    likes: 45200,
    comments: 892,
    shares: 234,
  },
  {
    id: 2,
    username: "mike_photo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    video: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=800",
    caption: "City nights 🌃 The urban jungle never sleeps",
    song: "Blinding Lights - The Weeknd",
    likes: 89400,
    comments: 1205,
    shares: 567,
  },
  {
    id: 3,
    username: "emma_travel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    video: "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=800",
    caption: "Paradise found 🏝️ This place is unreal!",
    song: "Watermelon Sugar - Harry Styles",
    likes: 156000,
    comments: 3421,
    shares: 890,
  },
];

export const Reels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [likedReels, setLikedReels] = useState<number[]>([]);
  const [savedReels, setSavedReels] = useState<number[]>([]);

  const handleLike = (reelId: number) => {
    if (likedReels.includes(reelId)) {
      setLikedReels(likedReels.filter((id) => id !== reelId));
    } else {
      setLikedReels([...likedReels, reelId]);
    }
  };

  const handleSave = (reelId: number) => {
    if (savedReels.includes(reelId)) {
      setSavedReels(savedReels.filter((id) => id !== reelId));
    } else {
      setSavedReels([...savedReels, reelId]);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const reel = reels[currentReel];

  return (
    <div className="h-screen flex items-center justify-center bg-background p-4">
      <div className="relative h-[85vh] aspect-[9/16] max-w-md glass-card overflow-hidden rounded-2xl animate-scale-in">
        {/* Video/Image */}
        <div
          className="absolute inset-0 bg-muted cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <img
            src={reel.video}
            alt=""
            className="w-full h-full object-cover"
          />
          
          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/30">
              <Play className="w-20 h-20 fill-foreground" />
            </div>
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Top Controls */}
        <div className="absolute top-4 right-4 flex gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="glass-button p-2 rounded-full"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          <button className="glass-button p-2 rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
          <button
            onClick={() => handleLike(reel.id)}
            className="flex flex-col items-center gap-1"
          >
            <div className={cn(
              "p-3 rounded-full transition-all duration-300",
              likedReels.includes(reel.id) ? "bg-primary/20" : "glass-button"
            )}>
              <Heart
                className={cn(
                  "w-7 h-7 transition-all duration-300",
                  likedReels.includes(reel.id) && "fill-primary text-primary scale-110"
                )}
              />
            </div>
            <span className="text-sm font-semibold">
              {formatNumber(reel.likes + (likedReels.includes(reel.id) ? 1 : 0))}
            </span>
          </button>

          <button className="flex flex-col items-center gap-1">
            <div className="glass-button p-3 rounded-full">
              <MessageCircle className="w-7 h-7" />
            </div>
            <span className="text-sm font-semibold">
              {formatNumber(reel.comments)}
            </span>
          </button>

          <button className="flex flex-col items-center gap-1">
            <div className="glass-button p-3 rounded-full">
              <Send className="w-7 h-7" />
            </div>
            <span className="text-sm font-semibold">
              {formatNumber(reel.shares)}
            </span>
          </button>

          <button
            onClick={() => handleSave(reel.id)}
            className="flex flex-col items-center gap-1"
          >
            <div className={cn(
              "p-3 rounded-full transition-all duration-300",
              savedReels.includes(reel.id) ? "bg-foreground/20" : "glass-button"
            )}>
              <Bookmark
                className={cn(
                  "w-7 h-7 transition-all duration-300",
                  savedReels.includes(reel.id) && "fill-foreground"
                )}
              />
            </div>
          </button>

          {/* Audio */}
          <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-foreground animate-[spin_3s_linear_infinite]">
            <img
              src={reel.avatar}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-20">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={reel.avatar}
              alt={reel.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">{reel.username}</span>
            <button className="px-3 py-1 border border-foreground rounded-lg text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
              Follow
            </button>
          </div>
          <p className="text-sm mb-2 line-clamp-2">{reel.caption}</p>
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4" />
            <p className="text-sm text-muted-foreground truncate">{reel.song}</p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {reels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReel(index)}
              className={cn(
                "w-1 h-8 rounded-full transition-all duration-300",
                currentReel === index ? "bg-foreground" : "bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

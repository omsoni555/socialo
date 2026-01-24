import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PostProps {
  id: number;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked?: boolean;
  isSaved?: boolean;
}

export const Post = ({
  id,
  username,
  avatar,
  image,
  caption,
  likes,
  comments,
  timeAgo,
  isLiked: initialLiked = false,
  isSaved: initialSaved = false,
}: PostProps) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [isSaved, setIsSaved] = useState(initialSaved);
  const [likeCount, setLikeCount] = useState(likes);
  const [showHeart, setShowHeart] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleDoubleClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  return (
    <article className="glass-card overflow-hidden animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="story-ring">
            <img
              src={avatar}
              alt={username}
              className="w-10 h-10 rounded-full object-cover border-2 border-background"
            />
          </div>
          <div>
            <h3 className="font-semibold hover:text-primary transition-colors cursor-pointer">
              {username}
            </h3>
            <p className="text-xs text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
        <button className="post-action">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Image */}
      <div
        className="relative aspect-square bg-muted cursor-pointer"
        onDoubleClick={handleDoubleClick}
      >
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
        />
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart
              className="w-24 h-24 text-primary fill-primary animate-heart"
            />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <button
              onClick={handleLike}
              className="post-action"
            >
              <Heart
                className={cn(
                  "w-6 h-6 transition-all duration-300",
                  isLiked && "fill-primary text-primary scale-110"
                )}
              />
            </button>
            <button className="post-action">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="post-action">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="post-action"
          >
            <Bookmark
              className={cn(
                "w-6 h-6 transition-all duration-300",
                isSaved && "fill-foreground"
              )}
            />
          </button>
        </div>

        {/* Likes */}
        <p className="font-semibold mb-2">
          {likeCount.toLocaleString()} likes
        </p>

        {/* Caption */}
        <p className="text-sm mb-2">
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>

        {/* Comments Link */}
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-3">
          View all {comments} comments
        </button>

        {/* Add Comment */}
        <div className="flex items-center gap-3 pt-3 border-t border-border">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {comment && (
            <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Post
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

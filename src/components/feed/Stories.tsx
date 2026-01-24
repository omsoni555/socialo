import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const stories = [
  { id: 1, username: "Your Story", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150", isOwn: true, hasNew: false },
  { id: 2, username: "sarah_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", isOwn: false, hasNew: true },
  { id: 3, username: "mike_photo", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", isOwn: false, hasNew: true },
  { id: 4, username: "emma_travel", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150", isOwn: false, hasNew: true },
  { id: 5, username: "alex_music", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150", isOwn: false, hasNew: true },
  { id: 6, username: "lisa_art", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150", isOwn: false, hasNew: false },
  { id: 7, username: "john_tech", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", isOwn: false, hasNew: true },
  { id: 8, username: "nina_food", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", isOwn: false, hasNew: true },
];

export const Stories = () => {
  const [viewedStories, setViewedStories] = useState<number[]>([]);

  const handleStoryClick = (id: number) => {
    if (!viewedStories.includes(id)) {
      setViewedStories([...viewedStories, id]);
    }
  };

  return (
    <div className="glass-card p-4 mb-6 animate-slide-up">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {stories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => handleStoryClick(story.id)}
            className="flex flex-col items-center gap-2 min-w-[80px] group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={cn(
                "relative transition-transform duration-300 group-hover:scale-110",
                story.hasNew && !viewedStories.includes(story.id) ? "story-ring" : "p-[3px] rounded-full bg-muted"
              )}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-background p-[2px]">
                <img
                  src={story.avatar}
                  alt={story.username}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {story.isOwn && (
                <div className="absolute bottom-0 right-0 w-6 h-6 gradient-primary rounded-full flex items-center justify-center border-2 border-background">
                  <Plus className="w-4 h-4" />
                </div>
              )}
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-full text-center">
              {story.username}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

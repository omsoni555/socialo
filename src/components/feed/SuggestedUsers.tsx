import { useState } from "react";
import { cn } from "@/lib/utils";

const suggestedUsers = [
  {
    id: 1,
    username: "creative_studio",
    fullName: "Creative Studio",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
    mutualFollowers: 12,
  },
  {
    id: 2,
    username: "photography_daily",
    fullName: "Photography Daily",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150",
    mutualFollowers: 8,
  },
  {
    id: 3,
    username: "travel_diaries",
    fullName: "Travel Diaries",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    mutualFollowers: 15,
  },
  {
    id: 4,
    username: "art_collective",
    fullName: "Art Collective",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150",
    mutualFollowers: 6,
  },
  {
    id: 5,
    username: "music_vibes",
    fullName: "Music Vibes",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150",
    mutualFollowers: 20,
  },
];

export const SuggestedUsers = () => {
  const [following, setFollowing] = useState<number[]>([]);

  const handleFollow = (id: number) => {
    if (following.includes(id)) {
      setFollowing(following.filter((f) => f !== id));
    } else {
      setFollowing([...following, id]);
    }
  };

  return (
    <div className="glass-card p-4 animate-slide-in-right">
      {/* Current User */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="story-ring">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
            alt="Your profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-background"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">johndoe</h3>
          <p className="text-sm text-muted-foreground">John Doe</p>
        </div>
        <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-muted-foreground">
          Suggested for you
        </h4>
        <button className="text-xs font-semibold hover:text-muted-foreground transition-colors">
          See All
        </button>
      </div>

      {/* Suggested Users List */}
      <div className="space-y-3">
        {suggestedUsers.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-3 group animate-slide-in-right"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex-1 min-w-0">
              <h5 className="font-semibold text-sm truncate group-hover:text-primary transition-colors cursor-pointer">
                {user.username}
              </h5>
              <p className="text-xs text-muted-foreground truncate">
                Followed by {user.mutualFollowers} friends
              </p>
            </div>
            <button
              onClick={() => handleFollow(user.id)}
              className={cn(
                "text-xs font-semibold transition-all duration-300",
                following.includes(user.id)
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary hover:text-primary/80"
              )}
            >
              {following.includes(user.id) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © 2024 Socialo • About • Help • Press • API • Jobs • Privacy • Terms
        </p>
      </div>
    </div>
  );
};

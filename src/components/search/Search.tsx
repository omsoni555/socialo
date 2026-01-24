import { Search as SearchIcon, X, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const recentSearches = [
  { id: 1, username: "sarah_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", type: "user" },
  { id: 2, username: "photography", avatar: null, type: "hashtag" },
  { id: 3, username: "mike_photo", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", type: "user" },
  { id: 4, username: "travel", avatar: null, type: "hashtag" },
];

const trendingSearches = [
  { id: 1, tag: "#photography", posts: "2.5M" },
  { id: 2, tag: "#travel", posts: "1.8M" },
  { id: 3, tag: "#fashion", posts: "1.2M" },
  { id: 4, tag: "#food", posts: "980K" },
  { id: 5, tag: "#art", posts: "756K" },
];

const suggestedUsers = [
  { id: 1, username: "creative_studio", fullName: "Creative Studio", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150", followers: "125K" },
  { id: 2, username: "photography_daily", fullName: "Photography Daily", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150", followers: "89K" },
  { id: 3, username: "travel_diaries", fullName: "Travel Diaries", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150", followers: "234K" },
];

export const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4 animate-slide-up">
      {/* Search Bar */}
      <div className={cn(
        "relative mb-6 transition-all duration-300",
        isFocused && "scale-105"
      )}>
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search users, hashtags, or places..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-secondary rounded-2xl py-4 pl-12 pr-12 text-base outline-none focus:ring-2 ring-primary transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Recent Searches */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Recent</h2>
          <button className="text-sm text-primary hover:text-primary/80 transition-colors">
            Clear all
          </button>
        </div>
        <div className="space-y-2">
          {recentSearches.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 glass-card hover:bg-secondary/50 transition-colors cursor-pointer animate-slide-in-right"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.type === "user" ? (
                <img
                  src={item.avatar!}
                  alt={item.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xl">#</span>
                </div>
              )}
              <div className="flex-1">
                <p className="font-medium">
                  {item.type === "hashtag" ? `#${item.username}` : item.username}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.type === "user" ? "Profile" : "Hashtag"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <button className="p-1 hover:bg-secondary rounded-full transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="mb-8">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Trending
        </h2>
        <div className="flex flex-wrap gap-2">
          {trendingSearches.map((item, index) => (
            <button
              key={item.id}
              className="glass-card px-4 py-2 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-medium">{item.tag}</span>
              <span className="text-sm text-muted-foreground ml-2">
                {item.posts} posts
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Users */}
      <div>
        <h2 className="font-semibold mb-4">Suggested for you</h2>
        <div className="space-y-2">
          {suggestedUsers.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center gap-3 p-3 glass-card hover:bg-secondary/50 transition-colors cursor-pointer animate-slide-in-right"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={user.avatar}
                alt={user.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">{user.username}</p>
                <p className="text-sm text-muted-foreground">
                  {user.fullName} • {user.followers} followers
                </p>
              </div>
              <button className="gradient-primary px-4 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

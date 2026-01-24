import { Settings, Grid3X3, Film, Bookmark, UserCheck, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "posts", icon: Grid3X3, label: "Posts" },
  { id: "reels", icon: Film, label: "Reels" },
  { id: "saved", icon: Bookmark, label: "Saved" },
];

const posts = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400",
  "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=400",
  "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=400",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?w=400",
];

const highlights = [
  { id: 1, name: "Travel", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150" },
  { id: 2, name: "Music", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150" },
  { id: 3, name: "Food", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150" },
  { id: 4, name: "Friends", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=150" },
  { id: 5, name: "Sports", image: "https://images.unsplash.com/photo-1461896836934- voices?w=150" },
];

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-slide-up">
      {/* Profile Header */}
      <div className="flex items-start gap-8 mb-8">
        {/* Avatar */}
        <div className="story-ring p-1">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300"
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-background"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-2xl font-semibold">johndoe</h1>
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={cn(
                "px-6 py-1.5 rounded-lg font-semibold transition-all duration-300",
                isFollowing
                  ? "bg-secondary hover:bg-secondary/80"
                  : "gradient-primary hover:opacity-90"
              )}
            >
              {isFollowing ? (
                <span className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Following
                </span>
              ) : (
                "Follow"
              )}
            </button>
            <button className="px-6 py-1.5 bg-secondary rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
              Message
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mb-4">
            <div className="text-center">
              <span className="font-bold text-lg">248</span>
              <span className="text-muted-foreground ml-1">posts</span>
            </div>
            <button className="text-center hover:opacity-80 transition-opacity">
              <span className="font-bold text-lg">12.5K</span>
              <span className="text-muted-foreground ml-1">followers</span>
            </button>
            <button className="text-center hover:opacity-80 transition-opacity">
              <span className="font-bold text-lg">892</span>
              <span className="text-muted-foreground ml-1">following</span>
            </button>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-muted-foreground">Digital Creator</p>
            <p className="mt-2">
              🎨 Creating beautiful digital experiences
              <br />
              📍 San Francisco, CA
              <br />
              🔗 johndoe.design
            </p>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="flex gap-6 mb-8 overflow-x-auto scrollbar-hide pb-2">
        {highlights.map((highlight, index) => (
          <button
            key={highlight.id}
            className="flex flex-col items-center gap-2 min-w-[80px] group animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-muted overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:border-primary">
              <img
                src={highlight.image}
                alt={highlight.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              {highlight.name}
            </span>
          </button>
        ))}
        <button className="flex flex-col items-center gap-2 min-w-[80px] group">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-muted flex items-center justify-center transition-all duration-300 group-hover:border-primary">
            <span className="text-2xl text-muted-foreground group-hover:text-primary transition-colors">
              +
            </span>
          </div>
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            New
          </span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-t border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-all duration-300 relative",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {posts.map((post, index) => (
          <button
            key={index}
            className="aspect-square overflow-hidden group relative animate-scale-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img
              src={post}
              alt=""
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
              <div className="flex items-center gap-1 font-semibold">
                <span>❤️</span>
                <span>1.2K</span>
              </div>
              <div className="flex items-center gap-1 font-semibold">
                <span>💬</span>
                <span>48</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

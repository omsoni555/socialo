import { Stories } from "./Stories";
import { Post } from "./Post";
import { SuggestedUsers } from "./SuggestedUsers";

const posts = [
  {
    id: 1,
    username: "sarah_design",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800",
    caption: "Exploring the beauty of nature 🌿✨ Nothing beats a peaceful morning in the mountains.",
    likes: 1234,
    comments: 89,
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    username: "mike_photo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=800",
    caption: "City lights and late nights 🌃 There's something magical about urban photography.",
    likes: 2567,
    comments: 156,
    timeAgo: "5 hours ago",
    isLiked: true,
  },
  {
    id: 3,
    username: "emma_travel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    image: "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=800",
    caption: "Found paradise 🏝️ Sometimes you just need to disconnect and enjoy the moment.",
    likes: 4521,
    comments: 234,
    timeAgo: "8 hours ago",
    isSaved: true,
  },
  {
    id: 4,
    username: "alex_music",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    caption: "Live music hits different 🎸🎶 Last night's concert was absolutely incredible!",
    likes: 3890,
    comments: 178,
    timeAgo: "12 hours ago",
  },
];

export const Feed = () => {
  return (
    <div className="flex gap-8 max-w-6xl mx-auto px-4 py-6">
      {/* Main Feed */}
      <div className="flex-1 max-w-xl mx-auto lg:mx-0">
        <Stories />
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Post {...post} />
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block w-80">
        <div className="sticky top-6">
          <SuggestedUsers />
        </div>
      </aside>
    </div>
  );
};

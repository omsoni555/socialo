import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: number;
  type: "like" | "comment" | "follow" | "mention";
  user: {
    username: string;
    avatar: string;
  };
  content?: string;
  postImage?: string;
  time: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "like",
    user: { username: "sarah_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    postImage: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=100",
    time: "2m",
    isRead: false,
  },
  {
    id: 2,
    type: "follow",
    user: { username: "mike_photo", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    time: "15m",
    isRead: false,
  },
  {
    id: 3,
    type: "comment",
    user: { username: "emma_travel", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    content: "This is amazing! 🔥",
    postImage: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=100",
    time: "1h",
    isRead: false,
  },
  {
    id: 4,
    type: "mention",
    user: { username: "alex_music", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
    content: "mentioned you in a comment",
    time: "2h",
    isRead: true,
  },
  {
    id: 5,
    type: "like",
    user: { username: "lisa_art", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" },
    postImage: "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=100",
    time: "3h",
    isRead: true,
  },
  {
    id: 6,
    type: "follow",
    user: { username: "john_tech", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
    time: "5h",
    isRead: true,
  },
  {
    id: 7,
    type: "comment",
    user: { username: "nina_food", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" },
    content: "Love this shot! Where was this taken?",
    postImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100",
    time: "8h",
    isRead: true,
  },
];

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "like":
      return <Heart className="w-4 h-4 text-primary fill-primary" />;
    case "comment":
      return <MessageCircle className="w-4 h-4 text-info" />;
    case "follow":
      return <UserPlus className="w-4 h-4 text-success" />;
    case "mention":
      return <AtSign className="w-4 h-4 text-accent" />;
  }
};

const getNotificationText = (notification: Notification) => {
  switch (notification.type) {
    case "like":
      return "liked your post";
    case "comment":
      return `commented: "${notification.content}"`;
    case "follow":
      return "started following you";
    case "mention":
      return notification.content;
  }
};

export const Notifications = () => {
  const todayNotifications = notifications.filter((n) => !n.isRead);
  const earlierNotifications = notifications.filter((n) => n.isRead);

  return (
    <div className="max-w-2xl mx-auto p-4 animate-slide-up">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>

      {/* Today */}
      {todayNotifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-muted-foreground mb-4">New</h2>
          <div className="space-y-2">
            {todayNotifications.map((notification, index) => (
              <div
                key={notification.id}
                className="glass-card p-4 flex items-center gap-4 hover:bg-secondary/30 transition-colors cursor-pointer animate-slide-in-right"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={notification.user.avatar}
                    alt={notification.user.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-card">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-semibold hover:text-primary transition-colors cursor-pointer">
                      {notification.user.username}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {getNotificationText(notification)}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.time}
                  </p>
                </div>

                {/* Post Image or Follow Button */}
                {notification.postImage ? (
                  <img
                    src={notification.postImage}
                    alt=""
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                ) : notification.type === "follow" ? (
                  <button className="gradient-primary px-4 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Earlier */}
      {earlierNotifications.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-4">Earlier</h2>
          <div className="space-y-2">
            {earlierNotifications.map((notification, index) => (
              <div
                key={notification.id}
                className="glass-card p-4 flex items-center gap-4 hover:bg-secondary/30 transition-colors cursor-pointer opacity-70 hover:opacity-100 animate-slide-in-right"
                style={{ animationDelay: `${(todayNotifications.length + index) * 50}ms` }}
              >
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={notification.user.avatar}
                    alt={notification.user.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-card">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-semibold hover:text-primary transition-colors cursor-pointer">
                      {notification.user.username}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {getNotificationText(notification)}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.time}
                  </p>
                </div>

                {/* Post Image or Follow Button */}
                {notification.postImage ? (
                  <img
                    src={notification.postImage}
                    alt=""
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                ) : notification.type === "follow" ? (
                  <button className="bg-secondary px-4 py-1.5 rounded-lg text-sm font-medium">
                    Following
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

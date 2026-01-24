import { Search, Edit } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Chat {
  id: number;
  username: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  isOnline: boolean;
}

const chats: Chat[] = [
  {
    id: 1,
    username: "sarah_design",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    lastMessage: "That sounds amazing! Let's definitely...",
    time: "2m",
    unread: 2,
    isOnline: true,
  },
  {
    id: 2,
    username: "mike_photo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    lastMessage: "Check out this new camera I got!",
    time: "15m",
    unread: 0,
    isOnline: true,
  },
  {
    id: 3,
    username: "emma_travel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    lastMessage: "The trip was incredible 🌴",
    time: "1h",
    unread: 1,
    isOnline: false,
  },
  {
    id: 4,
    username: "alex_music",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    lastMessage: "New track dropping next week!",
    time: "3h",
    unread: 0,
    isOnline: false,
  },
  {
    id: 5,
    username: "lisa_art",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    lastMessage: "Love your latest post 💕",
    time: "5h",
    unread: 0,
    isOnline: true,
  },
];

interface ChatListProps {
  selectedChat: number | null;
  onSelectChat: (id: number) => void;
}

export const ChatList = ({ selectedChat, onSelectChat }: ChatListProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Messages</h2>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Edit className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search messages"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 ring-primary transition-all"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {filteredChats.map((chat, index) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={cn(
              "w-full flex items-center gap-3 p-4 transition-all duration-300 hover:bg-secondary/50 animate-slide-in-right",
              selectedChat === chat.id && "bg-secondary"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={chat.avatar}
                alt={chat.username}
                className="w-14 h-14 rounded-full object-cover"
              />
              {chat.isOnline && (
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-background" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between mb-1">
                <h3 className={cn(
                  "font-semibold truncate",
                  chat.unread > 0 && "text-foreground"
                )}>
                  {chat.username}
                </h3>
                <span className={cn(
                  "text-xs",
                  chat.unread > 0 ? "text-primary" : "text-muted-foreground"
                )}>
                  {chat.time}
                </span>
              </div>
              <p className={cn(
                "text-sm truncate",
                chat.unread > 0
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}>
                {chat.lastMessage}
              </p>
            </div>

            {/* Unread Badge */}
            {chat.unread > 0 && (
              <span className="gradient-primary text-xs font-semibold px-2 py-1 rounded-full">
                {chat.unread}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

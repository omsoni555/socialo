import { Phone, Video, Info, Image, Smile, Heart, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isSent: boolean;
  time: string;
  isLiked?: boolean;
}

const messages: Message[] = [
  { id: 1, text: "Hey! How are you doing?", isSent: false, time: "10:30 AM" },
  { id: 2, text: "I'm great! Just finished working on that project", isSent: true, time: "10:32 AM" },
  { id: 3, text: "That sounds amazing! Can you share some details?", isSent: false, time: "10:33 AM" },
  { id: 4, text: "Sure! It's a new social media app with modern design", isSent: true, time: "10:35 AM" },
  { id: 5, text: "I'll send you some screenshots later today", isSent: true, time: "10:35 AM" },
  { id: 6, text: "That sounds amazing! Let's definitely collaborate on this 🚀", isSent: false, time: "10:40 AM", isLiked: true },
];

interface ChatWindowProps {
  chatId: number | null;
}

export const ChatWindow = ({ chatId }: ChatWindowProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  if (!chatId) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
        <div className="w-24 h-24 rounded-full border-2 border-muted-foreground flex items-center justify-center mb-4">
          <Send className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-medium mb-2">Your Messages</h3>
        <p className="text-sm mb-4">Send private photos and messages to a friend</p>
        <button className="gradient-primary px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </div>
    );
  }

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: chatMessages.length + 1,
      text: newMessage,
      isSent: true,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages([...chatMessages, message]);
    setNewMessage("");
  };

  const handleLike = (messageId: number) => {
    setChatMessages(
      chatMessages.map((msg) =>
        msg.id === messageId ? { ...msg, isLiked: !msg.isLiked } : msg
      )
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              alt="sarah_design"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background" />
          </div>
          <div>
            <h3 className="font-semibold">sarah_design</h3>
            <p className="text-xs text-success">Active now</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-4">
        {chatMessages.map((message, index) => (
          <div
            key={message.id}
            className={cn(
              "flex animate-slide-up",
              message.isSent ? "justify-end" : "justify-start"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={cn(
                "group relative max-w-[70%]",
                message.isSent ? "order-2" : "order-1"
              )}
            >
              <div
                className={cn(
                  "px-4 py-2 rounded-2xl transition-all duration-300",
                  message.isSent
                    ? "gradient-primary rounded-br-md"
                    : "bg-secondary rounded-bl-md"
                )}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <div
                className={cn(
                  "flex items-center gap-2 mt-1 text-xs text-muted-foreground",
                  message.isSent ? "justify-end" : "justify-start"
                )}
              >
                <span>{message.time}</span>
                {message.isLiked && (
                  <Heart className="w-3 h-3 fill-primary text-primary" />
                )}
              </div>

              {/* Quick Actions */}
              <button
                onClick={() => handleLike(message.id)}
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-secondary",
                  message.isSent ? "-left-8" : "-right-8"
                )}
              >
                <Heart
                  className={cn(
                    "w-4 h-4 transition-colors",
                    message.isLiked && "fill-primary text-primary"
                  )}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 bg-secondary rounded-full px-4 py-2">
          <button className="hover:text-primary transition-colors">
            <Smile className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button className="hover:text-primary transition-colors">
            <Image className="w-6 h-6" />
          </button>
          {newMessage ? (
            <button
              onClick={handleSend}
              className="gradient-primary p-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          ) : (
            <button className="hover:text-primary transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

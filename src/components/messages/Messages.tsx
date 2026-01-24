import { useState } from "react";
import { ChatList } from "./ChatList";
import { ChatWindow } from "./ChatWindow";

export const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div className="h-[calc(100vh-2rem)] m-4 glass-card overflow-hidden flex animate-scale-in">
      {/* Chat List */}
      <div className="w-96 border-r border-border">
        <ChatList selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      </div>

      {/* Chat Window */}
      <div className="flex-1">
        <ChatWindow chatId={selectedChat} />
      </div>
    </div>
  );
};

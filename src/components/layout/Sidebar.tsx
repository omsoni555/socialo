import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu, Settings, Bookmark } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onCreatePost: () => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "search", icon: Search, label: "Search" },
  { id: "explore", icon: Compass, label: "Explore" },
  { id: "reels", icon: Film, label: "Reels" },
  { id: "messages", icon: MessageCircle, label: "Messages" },
  { id: "notifications", icon: Heart, label: "Notifications" },
  { id: "saved", icon: Bookmark, label: "Saved" },
  { id: "profile", icon: User, label: "Profile" },
];

export const Sidebar = ({ activeTab, onTabChange, onCreatePost }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-border flex flex-col transition-all duration-300 z-50",
        isExpanded ? "w-64" : "w-20"
      )}
    >
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
          <span className="text-xl font-bold">S</span>
        </div>
        {isExpanded && (
          <h1 className="text-2xl font-bold gradient-text animate-slide-in-right">
            Socialo
          </h1>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "nav-item w-full group",
              activeTab === item.id && "nav-item-active"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <item.icon
              className={cn(
                "w-6 h-6 transition-transform duration-300 group-hover:scale-110",
                activeTab === item.id && "text-primary"
              )}
            />
            {isExpanded && (
              <span className={cn(
                "font-medium transition-colors",
                activeTab === item.id && "text-foreground"
              )}>
                {item.label}
              </span>
            )}
            {item.id === "messages" && (
              <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                3
              </span>
            )}
            {item.id === "notifications" && (
              <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                5
              </span>
            )}
          </button>
        ))}

        {/* Create Post Button */}
        <button
          onClick={onCreatePost}
          className="nav-item w-full group mt-4 gradient-primary hover:opacity-90"
        >
          <PlusSquare className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          {isExpanded && <span className="font-semibold">Create</span>}
        </button>
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-border space-y-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="nav-item w-full"
        >
          <Menu className="w-6 h-6" />
          {isExpanded && <span className="font-medium">Collapse</span>}
        </button>
        <button className="nav-item w-full">
          <Settings className="w-6 h-6" />
          {isExpanded && <span className="font-medium">Settings</span>}
        </button>
      </div>
    </aside>
  );
};

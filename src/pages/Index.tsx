import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Feed } from "@/components/feed/Feed";
import { Messages } from "@/components/messages/Messages";
import { Profile } from "@/components/profile/Profile";
import { Explore } from "@/components/explore/Explore";
import { Reels } from "@/components/reels/Reels";
import { Notifications } from "@/components/notifications/Notifications";
import { SearchComponent } from "@/components/search/Search";
import { Saved } from "@/components/saved/Saved";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Feed />;
      case "search":
        return <SearchComponent />;
      case "explore":
        return <Explore />;
      case "reels":
        return <Reels />;
      case "messages":
        return <Messages />;
      case "notifications":
        return <Notifications />;
      case "saved":
        return <Saved />;
      case "profile":
        return <Profile />;
      default:
        return <Feed />;
    }
  };

  return (
    <MainLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </MainLayout>
  );
};

export default Index;

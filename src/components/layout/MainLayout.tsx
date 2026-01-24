import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { CreatePostModal } from "../modals/CreatePostModal";

interface MainLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const MainLayout = ({ children, activeTab, onTabChange }: MainLayoutProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        activeTab={activeTab}
        onTabChange={onTabChange}
        onCreatePost={() => setShowCreateModal(true)}
      />
      <main className="ml-64 min-h-screen transition-all duration-300">
        {children}
      </main>
      <CreatePostModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

import { X, Image, Film, MapPin, Users, Smile, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "post" | "reel" | "story";

export const CreatePostModal = ({ isOpen, onClose }: CreatePostModalProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("post");
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const tabs = [
    { id: "post" as TabType, label: "Post", icon: Image },
    { id: "reel" as TabType, label: "Reel", icon: Film },
    { id: "story" as TabType, label: "Story", icon: Image },
  ];

  const sampleImages = [
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400",
    "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=400",
    "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=400",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card w-full max-w-3xl max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-semibold text-lg">Create new {activeTab}</h2>
          <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
            Share
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 font-medium transition-all duration-300 relative",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex h-[500px]">
          {/* Image Selection Area */}
          <div className="flex-1 border-r border-border p-4">
            {selectedImage ? (
              <div className="relative h-full">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <button className="glass-button p-2 rounded-full">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="glass-button p-2 rounded-full">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center animate-float">
                  {activeTab === "reel" ? (
                    <Film className="w-12 h-12 text-primary" />
                  ) : (
                    <Image className="w-12 h-12 text-primary" />
                  )}
                </div>
                <p className="text-xl font-medium">
                  Drag photos and videos here
                </p>
                <button className="gradient-primary px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Select from computer
                </button>

                {/* Quick Select Gallery */}
                <div className="mt-6 w-full">
                  <p className="text-sm text-muted-foreground mb-3 text-center">
                    Or choose from recent
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {sampleImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity hover:ring-2 ring-primary"
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Caption & Settings */}
          <div className="w-80 p-4 flex flex-col">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold">johndoe</span>
            </div>

            {/* Caption */}
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption..."
              className="flex-1 bg-transparent resize-none outline-none text-sm placeholder:text-muted-foreground mb-4"
              maxLength={2200}
            />

            {/* Character Count */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <button className="hover:text-foreground transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <span>{caption.length}/2,200</span>
            </div>

            {/* Options */}
            <div className="border-t border-border pt-4 space-y-3">
              <button className="flex items-center justify-between w-full py-2 text-sm hover:text-primary transition-colors">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Add location
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between w-full py-2 text-sm hover:text-primary transition-colors">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Tag people
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

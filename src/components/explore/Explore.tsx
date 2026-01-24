import { Search } from "lucide-react";
import { useState } from "react";

const exploreImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600", size: "large" },
  { id: 2, src: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=400", size: "small" },
  { id: 3, src: "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=400", size: "small" },
  { id: 4, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", size: "small" },
  { id: 5, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", size: "small" },
  { id: 6, src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600", size: "large" },
  { id: 7, src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", size: "small" },
  { id: 8, src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", size: "small" },
  { id: 9, src: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=400", size: "small" },
  { id: 10, src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400", size: "small" },
  { id: 11, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600", size: "large" },
  { id: 12, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400", size: "small" },
];

const categories = [
  "For You",
  "Trending",
  "Music",
  "Art",
  "Travel",
  "Food",
  "Fashion",
  "Sports",
  "Tech",
];

export const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("For You");

  return (
    <div className="p-4 animate-slide-up">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:ring-2 ring-primary transition-all"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === category
                ? "gradient-primary"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
        {exploreImages.map((image, index) => (
          <button
            key={image.id}
            className="break-inside-avoid group relative overflow-hidden rounded-lg animate-scale-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img
              src={image.src}
              alt=""
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                image.size === "large" ? "aspect-[3/4]" : "aspect-square"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium">user_{image.id}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

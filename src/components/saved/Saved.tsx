import { Bookmark, Plus, Grid3X3, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const collections = [
  {
    id: 1,
    name: "All Posts",
    count: 42,
    images: [
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200",
      "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=200",
      "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=200",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200",
    ],
    isPrivate: false,
  },
  {
    id: 2,
    name: "Travel Inspiration",
    count: 18,
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200",
      "https://images.unsplash.com/photo-1682686581580-d99b0e6c3b6c?w=200",
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200",
    ],
    isPrivate: false,
  },
  {
    id: 3,
    name: "Design Ideas",
    count: 12,
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200",
    ],
    isPrivate: true,
  },
  {
    id: 4,
    name: "Food & Recipes",
    count: 8,
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200",
    ],
    isPrivate: false,
  },
];

export const Saved = () => {
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null);

  if (selectedCollection) {
    const collection = collections.find((c) => c.id === selectedCollection);
    return (
      <div className="max-w-4xl mx-auto p-4 animate-slide-up">
        <button
          onClick={() => setSelectedCollection(null)}
          className="text-primary hover:text-primary/80 transition-colors mb-4"
        >
          ← Back to collections
        </button>
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          {collection?.name}
          {collection?.isPrivate && <Lock className="w-5 h-5 text-muted-foreground" />}
        </h1>
        <div className="grid grid-cols-3 gap-1">
          {collection?.images.map((img, index) => (
            <button
              key={index}
              className="aspect-square overflow-hidden group relative animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Bookmark className="w-8 h-8 fill-foreground" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Saved</h1>
        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Plus className="w-5 h-5" />
          New Collection
        </button>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {collections.map((collection, index) => (
          <button
            key={collection.id}
            onClick={() => setSelectedCollection(collection.id)}
            className="glass-card overflow-hidden group animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Preview Grid */}
            <div className="aspect-square grid grid-cols-2 gap-0.5 p-0.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "bg-muted overflow-hidden",
                    collection.images[i] ? "" : "bg-secondary"
                  )}
                >
                  {collection.images[i] && (
                    <img
                      src={collection.images[i]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="font-semibold flex items-center gap-2">
                {collection.name}
                {collection.isPrivate && <Lock className="w-4 h-4 text-muted-foreground" />}
              </h3>
              <p className="text-sm text-muted-foreground">
                {collection.count} posts
              </p>
            </div>
          </button>
        ))}

        {/* Add New Collection */}
        <button className="glass-card aspect-square flex flex-col items-center justify-center gap-3 hover:bg-secondary/50 transition-colors group animate-scale-in">
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center group-hover:border-primary transition-colors">
            <Plus className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            New Collection
          </span>
        </button>
      </div>
    </div>
  );
};

"use client";

import { useState, useEffect } from "react";
import { animeImages } from "@/lib/anime-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ImageCard } from "@/components/image-card";
import { Button } from "@/components/ui/button";
import { Shuffle, Sparkles } from "lucide-react";

const ITEMS_PER_PAGE = 27;

export default function RandomPage() {
  const [randomImages, setRandomImages] = useState<typeof animeImages>([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateRandomImages = () => {
    setIsLoading(true);
    const shuffled = [...animeImages]
      .sort(() => Math.random() - 0.5)
      .slice(0, ITEMS_PER_PAGE);
    setRandomImages(shuffled);
    setIsLoading(false);
  };

  useEffect(() => {
    generateRandomImages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 right-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Random Discovery
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-foreground">
                Discover Something New
              </h1>

              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let fate guide you through stunning artwork. Refresh to discover
                a new random collection.
              </p>

              <div className="mt-8">
                <Button
                  size="lg"
                  onClick={generateRandomImages}
                  disabled={isLoading}
                  className="px-8"
                >
                  <Shuffle className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                  {isLoading ? "Shuffling..." : "Reshuffle"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-pulse">
                  <Shuffle className="h-12 w-12 text-primary" />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {randomImages.map((image) => (
                  <ImageCard key={image.id} image={image} returnUrl="/random" />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

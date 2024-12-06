"use client";

import { useState } from "react";
import { Wallpaper } from "@/types/wallpaper";
import Header from "@/components/header";
import WallpaperList from "@/components/wallpaper/wallpaperlist";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Input from "@/components/input";

export default function Home() {
  // 用于存储新生成的壁纸
  const [newWallpaper, setNewWallpaper] = useState<Wallpaper | undefined>();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // 处理新生成的壁纸
  const handleGenerate = (wallpaper: Wallpaper) => {
    setNewWallpaper(wallpaper);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="w-screen h-screen">
      <Header />
      <Hero />
      <Input onGenerate={handleGenerate} />
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2">
          wallpaper generated successfully!
        </div>
      )}
      <WallpaperList newWallpaper={newWallpaper} />
      <Footer />
    </div>
  );
}

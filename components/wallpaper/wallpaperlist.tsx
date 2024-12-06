'use client'
import { useState, useEffect } from "react";
import { Wallpaper } from "@/types/wallpaper";

// 壁纸展示组件
export default function WallpaperList({ newWallpaper }: { 
  // 添加新的 prop 来接收新生成的壁纸
  newWallpaper?: Wallpaper 
}) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[] | null>(null);

  // 获取壁纸数据的异步函数
  const fetchWallpaper = async function() {  
    // 调用后端 API 获取壁纸数据
    const result = await fetch("/api/get-wallpapers");
    // 解析 JSON 响应并解构出 data
    const { data } = await result.json();

    // 如果数据存在，更新状态
    if (data) {
      setWallpapers(data);
    }
  };
 
  // 监听 newWallpaper 的变化
  useEffect(() => {
    if (newWallpaper && wallpapers) {
      // 将新壁纸添加到列表开头
      setWallpapers([newWallpaper, ...wallpapers]);
    }
  }, [newWallpaper]);

  // 初始加载数据
  useEffect(() => {
    fetchWallpaper();
  }, []); // 空依赖数组表示只在组件挂载时执行一次

    return (
        <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {wallpapers?.map((wallpaper, index) => (
            <div 
              key={wallpaper.id || index} 
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="relative">
                <img
                  src={wallpaper.img_url}
                  alt={wallpaper.img_description || 'wallpaper'}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              
              <div className="p-4">
                <p className="text-gray-800 text-lg mb-2">
                  {wallpaper.img_description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                    {wallpaper.img_size}
                  </div>
                  
                  {wallpaper.user_avatar && (
                    <div className="flex flex-col items-center">
                      <img
                        src={wallpaper.user_avatar}
                        alt="user avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-600 mt-1">
                        {wallpaper.user_nickname}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}
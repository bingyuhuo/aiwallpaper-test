//前后端数据整合

'use client'

// 导入必要的类型和 React hooks
import { Wallpaper } from "@/types/wallpaper";
import { useState, useEffect } from "react";

// 壁纸展示组件
export default function() {
  // 定义壁纸数据状态，类型为 Wallpaper 数组或 null
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
 
  // 在组件首次渲染时获取壁纸数据
  useEffect(() => {
    fetchWallpaper();
  }, []); // 空依赖数组表示只在组件挂载时执行一次

  return(
    // 页面主容器，设置最大宽度和居中
    <section className="max-w-lg mx-auto">
        {/* 壁纸网格容器，使用 flex 布局 */}
        <div className="flex items-center">
            {/* 当壁纸数据存在时，遍历显示每个壁纸 */}
            {wallpapers&&wallpapers.map((v: Wallpaper, idx: number) => (
                    // 单个壁纸卡片容器
                    <div key={v.img_description} className="mx-2">
                        {/* 壁纸描述标题 */}
                        <h2>{v.img_description}</h2> 
                        {/* 壁纸图片 */}
                        <img src={v.img_url} alt={v.img_description} />
                        {/* 壁纸尺寸信息 */}
                        <p>{v.img_size}</p>
                    </div>
            ))}
        </div>
    </section>
  );
}

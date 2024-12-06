"use client";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Wallpaper } from "@/types/wallpaper"

export default function SearchInput({ onGenerate }: { 
  onGenerate: (wallpaper: Wallpaper) => void 
}): React.ReactElement {
    const [description, setDescription] = useState("");
    const [loading,setLoading] = useState(false);

    const generateWallpaper = async function() {  
        setLoading(true)
        try {
            const result = await fetch("/api/gen-wallpaper", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ description })
            });
            const response = await result.json();
            
            // 检查是否是未登录错误
            if (response.code === -2) {
                alert(response.message);
                return;
            }

            // 成功生成壁纸的情况
            if (response) {
                console.log("new wallpaper:", response);
                onGenerate(response);
                setDescription("");
            }
        } catch (error) {
            alert("生成壁纸时发生错误");
        } finally {
            setLoading(false);
        }
    };

    const handlesubmit = async function() {
        console.log("current description:", description);
        if (!description) {
            alert("Please enter a wallpaperdescription");
            return;
        }
        await generateWallpaper();
    };

    return (
        <div className="flex justify-center gap-4 max-w-xl mx-auto w-1/2">
        <Input 
            type="text" 
            placeholder="Enter the wallpaper you want to generate" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
        />
        <Button onClick={handlesubmit} disabled={loading}>{loading ? "Generating..." : "Generate"}</Button>
        </div>
    )
}

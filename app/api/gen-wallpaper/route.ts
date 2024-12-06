import { auth, currentUser } from '@clerk/nextjs/server';

import { getOpenAIclient } from "@/service/openai";
import { downloadAndUploadImage } from "@/lib/s3";
import { Wallpaper } from "@/types/wallpaper";
import { insertWallpaper } from "@/models/wallpaper";   
import { ImageGenerateParams } from "openai/resources/index.mjs";
import { User } from "@/types/user";
import { insertUser } from "@/models/users";


export async function POST(_req: Request) {
        const { description } = await _req.json();

        const user = await currentUser();
        if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
            return Response.json({
                success: false,
                code: -2,
                message: "Please log in first to restore generated wallpapers",
            });
        }

        const user_email = user.emailAddresses[0].emailAddress;
        const nickname = user.firstName;
        const avatarUrl = user.imageUrl;
        const userInfo: User = {
            email: user_email,
            nickname: nickname || "",
            avatar_url: avatarUrl,
        };

        //await insertUser(userInfo);
        //return Response.json({
        //    user: userInfo
        //});
        
        const prompt = `Create a desktop wallpaper with: ${description}`;
        
        const client = await getOpenAIclient();
        
        const img_size = "1792x1024";
        const llm_name = "dall-e-3";
        const llm_params: ImageGenerateParams = {
            prompt: prompt,
            model: llm_name,
            quality: "hd",
            response_format: "url",
            n: 1,
            size: img_size,
        }
        const result = await client.images.generate(llm_params);

        console.log("generate wallpaper result: ", result);

        const raw_img_url = result.data[0].url; // openai dall-e img url
        if (!raw_img_url) {
            return Response.json({
            code: -1,
            message: "generate wallpaper failed",
            });
        }

        const img_name = encodeURIComponent(description);
        const s3_img = await downloadAndUploadImage(
            raw_img_url,
            process.env.AWS_BUCKET || "aiwallpaper-testdemo",
            `wallpapers/${img_name}.png`
        );

        const img_url = s3_img.Location;

        const created_at = new Date().toISOString();
        const wallpaper: Wallpaper = {
            user_email: user_email,
            img_description: description,
            img_size: img_size,
            img_url: img_url,
            llm_name: llm_name,
            llm_params: JSON.stringify(llm_params),
            created_at: created_at,
        };
        await insertWallpaper(wallpaper);

        return Response.json(wallpaper);
}
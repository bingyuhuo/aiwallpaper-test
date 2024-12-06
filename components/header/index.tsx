import Link from 'next/link'
import Image from 'next/image'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

export default function Header() {
    return (
        <header className="h-18">
            {/* header容器 */}
            <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between pt-8">
                {/* 左侧Logo部分 */}
                <div className="flex items-center">
                    <Image 
                        src="/logo.png" 
                        alt="AI Wallpaper" 
                        width={32} 
                        height={32}
                        className="rounded-full w-10 h-10 mr-2"
                    />
                    <span className="text-xl font-semibold mr-14">AI Wallpaper</span>

                    {/* 中间导航链接 */}
                    <nav className="hidden md:flex items-center">
                    <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                        Pricing
                    </Link>    
                    </nav>
                </div>
                          

                {/* 右侧按钮组 */}
                <div className="flex items-center space-x-4">
                    {/* 登录按钮部分更新 */}
                    <SignedOut>
                        <SignInButton>
                            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>
            </div>
        </header>
    )
}
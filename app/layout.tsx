// 根佈局文件 - 定義全域網站結構和預設樣式
// 功能：設置元資料、導航欄、顏色選擇器和全域背景顏色

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ColorPicker from "@/components/ColorPicker";

// 匯入 Geist 無襯線字體
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO 元資料：網站標題和描述用於搜尋引擎和瀏覽器顯示
export const metadata: Metadata = {
  title: "Chieh Kao - Electrical Hardware Engineer",
  description: "Portfolio of Chieh Kao, an experienced Electrical Hardware Engineer specializing in PCBA design, sensor integration, and high-reliability systems.",
  icons: {
    // 網站圖標配置 - 使用畢業照頭像 JPG
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

// 根佈局組件 - 所有頁面的容器，應用全域樣式和組件
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        頁面主體容器
        - 預設背景色：橙色 (#e6890f)
        - 預設文字色：黑色 (#000000)
        - 這些顏色會被使用者通過顏色選擇器動態更改
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#e6890f", color: "#000000" }}
      >
        {/* 固定在頂部的導航欄 */}
        <Navbar />
        {/* 浮動在右下角的顏色選擇器 */}
        <ColorPicker />
        {/* 頁面內容在此渲染 */}
        {children}
      </body>
    </html>
  );
}

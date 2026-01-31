// 導航欄組件 - 固定在頁面頂部的導航菜單
// 功能：
// 1. 顯示網站名稱和導航連結
// 2. 支援平滑捲動到各個頁面部分
// 3. 根據背景顏色自動調整導航欄顏色以確保對比度

"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { getContrastColor } from "@/utils/colorContrast";

export default function Navbar() {
  // 導航欄背景顏色狀態（透明）
  const [navBgColor, setNavBgColor] = useState("transparent");
  // 導航欄文字顏色狀態（會根據背景自動調整為黑或白）
  const [navTextColor, setNavTextColor] = useState("#000000");

  // 頁面掛載時和背景顏色改變時更新導航欄顏色
  useEffect(() => {
    // 根據背景顏色計算文字顏色
    const updateNavColors = () => {
      // 取得全域背景顏色，預設為橙色
      const bgColor = document.documentElement.style.backgroundColor || "#e6890f";
      
      // 使用工具函數計算對比度文字顏色
      const textColor = getContrastColor(bgColor);
      
      setNavTextColor(textColor);
    };

    // 組件掛載時立即更新顏色
    updateNavColors();
    
    // 每200毫秒檢查一次背景顏色變化（使用者通過顏色選擇器改變顏色時）
    const observer = setInterval(updateNavColors, 200);
    // 清理計時器
    return () => clearInterval(observer);
  }, []);

  // 處理導航連結點擊 - 實現平滑捲動到頁面各部分
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    // 如果是內部錨連結（以#開頭），執行平滑捲動
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        // 平滑捲動到目標元素
        elem.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    // 固定在頂部的導航欄，z-index確保其在其他內容上方
    <nav className="sticky top-0 z-50 border-b transition-colors" style={{ borderColor: navBgColor }}>
      {/* 導航欄容器：最大寬度5xl，水平居中，兩端對齊 */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 transition-colors" style={{ backgroundColor: navBgColor, color: navTextColor }}>
        {/* 網站名稱/logo */}
        <Link 
          href="/" 
          onClick={(e) => handleScroll(e, "/")}
          className="text-lg sm:text-xl font-bold tracking-tight transition-colors"
          style={{ color: navTextColor }}
        >
          Chieh Kao
        </Link>
        
        {/* 導航連結容器 */}
        <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm font-medium" style={{ color: navTextColor }}>
          {/* 關於頁面連結 */}
          <Link 
            href="#about" 
            onClick={(e) => handleScroll(e, "#about")}
            className="opacity-75 hover:opacity-100 transition-opacity"
          >
            About
          </Link>
          {/* 工作經驗連結 */}
          <Link 
            href="#experience" 
            onClick={(e) => handleScroll(e, "#experience")}
            className="opacity-75 hover:opacity-100 transition-opacity"
          >
            Experience
          </Link>
          {/* 專案展示連結 */}
          <Link 
            href="#projects" 
            onClick={(e) => handleScroll(e, "#projects")}
            className="opacity-75 hover:opacity-100 transition-opacity"
          >
            Projects
          </Link>
          {/* 履歷連結 */}
          <Link 
            href="#resume" 
            onClick={(e) => handleScroll(e, "#resume")}
            className="opacity-75 hover:opacity-100 transition-opacity"
          >
            Resume
          </Link>
          {/* 聯繫方式連結 */}
          <Link 
            href="#contact" 
            onClick={(e) => handleScroll(e, "#contact")}
            className="opacity-75 hover:opacity-100 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

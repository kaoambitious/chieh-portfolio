// 聯繫按鈕組件 - 顯示電子郵件和 LinkedIn 聯繫方式
// 功能：根據背景顏色動態調整按鈕樣式以確保可見性

"use client";

import { useEffect, useState } from "react";
import { getButtonColor, getContrastColor } from "@/utils/colorContrast";

export default function ContactButtons() {
  // 按鈕背景顏色狀態
  const [buttonBgColor, setButtonBgColor] = useState("#ffffff");
  // 按鈕文字顏色狀態
  const [buttonTextColor, setButtonTextColor] = useState("#000000");
  // 按鈕邊框顏色狀態
  const [buttonBorderColor, setButtonBorderColor] = useState("#ffffff");

  // 根據頁面背景顏色動態更新按鈕顏色
  useEffect(() => {
    // 監聽頁面背景顏色變化並相應調整按鈕樣式
    const updateButtonColors = () => {
      // 獲取頁面當前背景顏色
      const bgColor = document.documentElement.style.backgroundColor || "#e6890f";
      
      // 使用工具函數計算按鈕顏色
      const buttonBg = getButtonColor(bgColor);
      const buttonText = getContrastColor(buttonBg);
      
      setButtonBgColor(buttonBg);
      setButtonTextColor(buttonText);
      setButtonBorderColor(buttonBg);
    };

    // 初始化顏色
    updateButtonColors();
    // 每200毫秒檢查一次背景顏色變化
    const observer = setInterval(updateButtonColors, 200);
    // 清理計時器
    return () => clearInterval(observer);
  }, []);

  return (
    // 按鈕容器
    <div className="mt-8 flex gap-4 flex-wrap">
      {/* 電子郵件聯繫按鈕 - 實心白底按鈕 */}
      <a
        className="rounded-xl px-6 py-3 hover:opacity-80 transition font-medium"
        href="mailto:your-email@example.com"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        ✉️ Email Me
      </a>
      {/* LinkedIn 聯繫按鈕 - 實心白底按鈕 */}
      <a
        className="rounded-xl px-6 py-3 hover:opacity-80 transition font-medium"
        href="https://www.linkedin.com/in/chiehkaojames"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        🔗 LinkedIn
      </a>
    </div>
  );
}

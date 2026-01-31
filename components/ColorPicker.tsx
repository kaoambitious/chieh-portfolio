// 顏色選擇器組件 - 允許使用者自訂網站背景顏色
// 功能：
// 1. 提供顏色輸入框和預設顏色快速鍵
// 2. 根據背景顏色智能計算文字顏色（白或黑）以確保對比度
// 3. 將顏色選擇保存到 localStorage 持久化

"use client";

import { useState, useEffect } from "react";
import { getContrastColor } from "@/utils/colorContrast";

export default function ColorPicker() {
  // 當前背景顏色狀態
  const [bgColor, setBgColor] = useState("#e6890f");
  // 顏色選擇器下拉菜單是否打開
  const [isOpen, setIsOpen] = useState(false);
  // 面板文字顏色狀態 - 根據背景動態更新
  const [panelTextColor, setPanelTextColor] = useState("#000000");
  // 面板背景色狀態
  const [panelBgColor, setPanelBgColor] = useState("#ffffff");

  // 組件掛載時從 localStorage 加載已保存的顏色
  useEffect(() => {
    // 取得已保存的背景顏色
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
      setBgColor(savedColor);
      applyColor(savedColor);
    }    
    // ColorPicker 面板始終保持亮色 - 便於閱讀
    setPanelTextColor("#000000");
    setPanelBgColor("#ffffff");
  }, []);

  // 套用顏色到頁面：更新背景色和文字色
  const applyColor = (color: string) => {
    // 套用到 HTML 根元素
    document.documentElement.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
    
    // 根據背景色計算相應的文字顏色以確保可讀性
    const textColor = getContrastColor(color);
    document.documentElement.style.color = textColor;
    document.body.style.color = textColor;
  };

  // 根據背景顏色亮度計算最佳文字顏色（白或黑）
  // 使用 WCAG 標準亮度公式
  const handleApplyColor = (color: string) => {
    applyColor(color);
  };

  // 處理使用者選擇新顏色
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 獲取使用者輸入的顏色值
    const color = e.target.value;
    setBgColor(color);
    // 套用新顏色到頁面
    applyColor(color);
    // 保存到 localStorage 以便下次存取時恢復
    localStorage.setItem("bgColor", color);
  };

  // 預設顏色清單 - 提供快速選擇
  const presetColors = [
    { name: "White", hex: "#ffffff" },
    { name: "Orange", hex: "#e6890f" },
  ];

  return (
    // 顏色選擇器容器 - 固定在右下角，z-index 確保顯示在前
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* 打開/關閉顏色選擇器的按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-300 hover:border-gray-500 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
        title="Click to select background color"
      >
        {/* 調色板圖標表示顏色選擇功能 */}
        <span className="text-lg sm:text-xl">🎨</span>
      </button>

      {/* 顏色選擇器下拉面板 - 點擊按鈕後顯示 */}
      {isOpen && (
        <div className="absolute bottom-16 sm:bottom-20 right-0 p-3 sm:p-4 rounded-lg shadow-xl border w-48 sm:w-56" style={{ backgroundColor: panelBgColor, borderColor: panelTextColor + "40" }}>
          {/* 自訂顏色輸入區域 */}
          <div className="mb-3">
            <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: panelTextColor }}>
              Pick a Color
            </label>
            {/* 顏色輸入框 - 允許使用者選擇任意顏色 */}
            <input
              type="color"
              value={bgColor}
              onChange={handleColorChange}
              className="w-full h-8 sm:h-10 rounded cursor-pointer"
            />
          </div>

          {/* 預設顏色快捷按鈕區域 */}
          <div className="mb-2">
            <p className="text-xs font-medium mb-2" style={{ color: panelTextColor }}>
              Quick Colors
            </p>
            {/* 預設顏色網格 */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {presetColors.map((color) => (
                // 每個預設顏色按鈕
                <button
                  key={color.hex}
                  onClick={() => {
                    setBgColor(color.hex);
                    applyColor(color.hex);
                    // 同時保存到 localStorage
                    localStorage.setItem("bgColor", color.hex);
                  }}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded border-2 transition-all"
                  style={{ backgroundColor: color.hex, borderColor: panelTextColor + "60" }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* 關閉按鈕 */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 sm:mt-3 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm rounded hover:opacity-80 transition font-medium"
            style={{ backgroundColor: panelTextColor === "#ffffff" ? "#333333" : "#e5e5e5", color: panelTextColor }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

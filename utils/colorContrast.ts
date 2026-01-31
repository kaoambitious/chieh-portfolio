// 顏色對比度工具函數 - 根據背景顏色自動計算最佳文字顏色
// 使用 WCAG 標準亮度公式確保無障礙訪問

/**
 * 根據背景色亮度計算最佳對比文字顏色
 * @param hexColor - 十六進制顏色代碼（如 #ffffff）
 * @returns 返回 #ffffff（白色）或 #000000（黑色）
 * 
 * 邏輯：
 * - 黑色背景 (#000000) → 白色文字 (#ffffff)
 * - 白色背景 (#ffffff) → 黑色文字 (#000000)
 */
export const getContrastColor = (hexColor: string): string => {
  // 將十六進制顏色轉換為 RGB
  const hex = hexColor.replace("#", "");
  
  // 檢查顏色格式是否有效
  if (hex.length !== 6) {
    // 預設返回黑色文字
    return "#000000";
  }

  try {
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // 計算 WCAG 相對亮度（0-1 之間）
    // 公式：(0.299 * R + 0.587 * G + 0.114 * B) / 255
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // 亮度閾值：0.4
    // - 亮度 < 0.4（深色背景）→ 返回白色文字
    // - 亮度 >= 0.4（淺色背景）→ 返回黑色文字
    return luminance < 0.4 ? "#ffffff" : "#000000";
  } catch (e) {
    // 如果解析出錯，預設返回黑色文字
    return "#000000";
  }
};

/**
 * 根據背景色計算最佳對比按鈕顏色
 * 按鈕背景應該與頁面背景形成高對比度
 * @param hexColor - 十六進制顏色代碼
 * @returns 返回按鈕背景色：#000000（黑色）或 #ffffff（白色）
 */
export const getButtonColor = (hexColor: string): string => {
  const hex = hexColor.replace("#", "");

  if (hex.length !== 6) {
    return "#ffffff";
  }

  try {
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // 淺色背景 (luminance > 0.5) → 使用深色按鈕
    // 深色背景 (luminance <= 0.5) → 使用淺色按鈕
    return luminance > 0.5 ? "#000000" : "#ffffff";
  } catch (e) {
    return "#ffffff";
  }
};

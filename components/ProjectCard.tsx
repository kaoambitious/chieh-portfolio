// 專案卡片組件 - 展示單個專案的資訊和圖片輪播
// 功能：
// 1. 顯示專案的標題、描述和多張圖片
// 2. 實現圖片輪播功能（左右按鈕和指示點）
// 3. 提供專案連結（GitHub, 演示等）

"use client";

import type { Project } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project }: { project: Project }) {
  // 當前顯示的圖片索引
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // 專案的所有圖片陣列（過濾掉未定義的圖片）
  const images = [project.image, project.image2].filter((img): img is string => !!img);

  // 顯示下一張圖片
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  // 顯示上一張圖片
  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    // 專案卡片容器：回應式佈局，桌面端橫排顯示
    <article className="flex flex-col lg:flex-row rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden min-h-[300px] sm:min-h-[400px]">
      {/* 左側：圖片展示區域（60%寬度）- 包含輪播功能 */}
      <div className="relative w-full lg:w-3/5 h-48 sm:h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-100 group">
        {/* 專案圖片 */}
        <Image
          src={images[currentImageIndex]}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
        
        {/* 輪播控制按鈕（僅當有多張圖片時顯示） */}
        {images.length > 1 && (
          <>
            {/* 左箭頭按鈕 - 顯示上一張圖片 */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            {/* 右箭頭按鈕 - 顯示下一張圖片 */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* 輪播指示點 - 顯示當前在第幾張圖片 */}
            {/* 輪播指示點 - 顯示當前在第幾張圖片 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, idx) => (
                // 每個指示點可點擊來跳轉到對應的圖片
                <button
                  key={idx}
                  onClick={(e) => { e.preventDefault(); setCurrentImageIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 右側：專案資訊區域（40%寬度） */}
      <div className="flex flex-col w-full lg:w-2/5 p-4 sm:p-6 lg:p-8 justify-center">
        {/* 專案標題 */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
        
        {/* 專案描述/目標影響 */}
        <p className="text-sm sm:text-base font-medium text-gray-600 mb-4 sm:mb-6 italic border-l-4 border-black pl-3 sm:pl-4">
          {project.subtitle}
        </p>
        
        {/* 專案的主要貢獻/功能點清單 */}
        <div className="space-y-3 sm:space-y-4">
            {/* 部分标题 */}
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">Key Contributions</h4>
            {/* 贡献项目列表 */}
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 leading-relaxed">
            {project.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
            ))}
            </ul>
        </div>
        
        {/* 項目連結（GitHub、演示等） - 隱藏 */}
        {project.links && (
          <div className="hidden mt-8 flex gap-4 pt-6 border-t border-gray-100">
            {/* 在线演示链接（如果存在） */}
            {project.links.demo && (
              // 在线演示按钮
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Live Demo
              </a>
            )}
            {project.links.github && (
              // GitHub 仓库链接按钮
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                View on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

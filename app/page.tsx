// 主頁組件 - 投資組合網站的首頁
// 包含以下部分：關於我、工作經驗、專案展示、履歷、聯繫方式
// 客戶端組件 - 支援 Resume 下載功能

"use client";

import ProjectCard from "@/components/ProjectCard";
import ContactButtons from "@/components/ContactButtons";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContrastColor } from "@/utils/colorContrast";

export default function Home() {
  // 文字顏色狀態 - 根據背景動態更新
  const [textColor, setTextColor] = useState("#000000");
  // 標題顏色狀態
  const [headingColor, setHeadingColor] = useState("#000000");
  // 次要文字顏色狀態
  const [secondaryTextColor, setSecondaryTextColor] = useState("#666666");

  // 監聽背景顏色變化並更新文字顏色
  useEffect(() => {
    const updateTextColors = () => {
      const bgColor = document.documentElement.style.backgroundColor || "#e6890f";
      
      // 計算主文字顏色
      const mainTextColor = getContrastColor(bgColor);
      setTextColor(mainTextColor);
      setHeadingColor(mainTextColor);
      
      // 次要文字顏色（稍微淡化，但仍保持對比度）
      // 如果主文字是白色，次要文字使用較淡的白色
      // 如果主文字是黑色，次要文字使用較淡的黑色
      if (mainTextColor === "#ffffff") {
        setSecondaryTextColor("#cccccc");
      } else {
        setSecondaryTextColor("#666666");
      }
    };

    updateTextColors();
    const observer = setInterval(updateTextColors, 200);
    return () => clearInterval(observer);
  }, []);

  // 處理 Resume PDF 下載
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume_Chieh_Kao.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // 主容器：最大宽度5xl，水平居中
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* ============ 关于部分 ============ */}
      <section id="about" className="min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20">
        {/* 容器：桌面端横排显示，移动端纵向显示 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* 左侧：个人头像 */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
            {/* 圆形头像框架 */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-100 shadow-xl overflow-hidden">
              {/* 头像图片 */}
              <Image
                src="/images/profile.jpeg"
                alt="Chieh Kao"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 右側：個人簡介文字 */}
          <div className="max-w-2xl">
            {/* 名字標題 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6" style={{ color: headingColor }}>Chieh Kao</h1>
            
            {/* 第一段介紹 */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify" style={{ color: textColor }}>
              Electrical Hardware Engineer with 5+ years of experience designing and owning mixed-signal PCBA for high-reliability systems, including sensor integration and sensing system architecture, from schematic capture and PCB layout through bring-up, validation, and EVT/DVT/PVT production.
            </p>
            {/* 第二段介紹 */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-3 sm:mt-4 text-justify" style={{ color: textColor }}>
              Strong background in high-speed digital interfaces, sensor component selection and system-level validation, SI/PI optimization, EMI/EMC compliance, and cross-functional collaboration to deliver production-scalable, high-reliability hardware systems from concept through manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 工作经验部分 ============ */}
      <section id="experience" className="py-12 sm:py-16 md:py-20 border-t" style={{ borderColor: secondaryTextColor + "40" }}>
        {/* 部分标题 */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 md:mb-10" style={{ color: headingColor }}>Work Experience</h2>
        {/* 经验列表容器 */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* 遍历所有工作经验 */}
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-10">
              {/* 左侧：时间段 */}
              <div className="md:w-1/4">
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: secondaryTextColor }}>{exp.period}</span>
              </div>
              {/* 右侧：工作详细信息 */}
              <div className="md:w-3/4">
                {/* 职位标题 */}
                <h3 className="text-xl font-bold mb-2" style={{ color: headingColor }}>{exp.role}</h3>
                {/* 公司名称 */}
                <h4 className="text-lg font-medium mb-4" style={{ color: secondaryTextColor }}>{exp.company}</h4>
                {/* 工作成就清單 */}
                <ul className="list-disc pl-5 space-y-2 leading-relaxed text-justify" style={{ color: textColor }}>
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-justify">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 项目展示部分 ============ */}
      <section id="projects" className="py-20 border-t" style={{ borderColor: secondaryTextColor + "40" }}>
        {/* 部分标题 */}
        <h2 className="text-3xl font-bold mb-10" style={{ color: headingColor }}>Featured Projects</h2>
        {/* 项目网格容器 */}
        <div className="grid gap-12 grid-cols-1">
          {/* 遍历所有项目 */}
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* ============ 简历部分 ============ */}
      <section id="resume" className="py-20 border-t" style={{ borderColor: secondaryTextColor + "40" }}>
        <h2 className="text-3xl font-bold mb-6" style={{ color: headingColor }}>Resume</h2>
        <div className="p-8 rounded-2xl border max-w-2xl" style={{ backgroundColor: textColor === "#ffffff" ? "#1a1a1a" : "#f3f4f6", borderColor: secondaryTextColor + "40" }}>
          <p className="text-lg mb-6 text-justify" style={{ color: textColor }}>
            View my detailed professional experience, education, and technical skills.
          </p>
          <button
            onClick={handleDownloadResume}
            className="inline-block rounded-xl px-8 py-4 font-medium hover:opacity-80 transition cursor-pointer" 
            style={{ backgroundColor: textColor === "#ffffff" ? "#333333" : "#000000", color: "#ffffff" }}
          >
            Download Resume (PDF)
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t min-h-[50vh]" style={{ borderColor: secondaryTextColor + "40" }}>
        <h2 className="text-3xl font-bold mb-6" style={{ color: headingColor }}>Contact</h2>
        <p className="text-lg mb-8 max-w-2xl text-justify" style={{ color: textColor }}>
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        <ContactButtons />
      </section>
    </main>
  );
}

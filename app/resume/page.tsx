// 客户端组件 - 支持 PDF 下载功能
"use client";

export default function ResumePage() {
  // 处理 PDF 下载
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume_Chieh_Kao.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Resume</h1>

      {/* PDF Viewer */}
      <div className="w-full h-screen border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="/resume.pdf#toolbar=0"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Resume"
        />
      </div>

      {/* Download Link */}
      <div className="mt-6">
        <button
          onClick={handleDownload}
          className="rounded-xl bg-black px-5 py-3 text-white inline-block hover:bg-gray-800 transition cursor-pointer"
        >
          📥 Download Resume (PDF)
        </button>
      </div>
    </main>
  );
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Resume</h1>

      <p className="mt-4 text-gray-700">
        Download my resume here:
      </p>

      <div className="mt-6">
        <a
          className="rounded-xl bg-black px-5 py-3 text-white inline-block"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume (PDF)
        </a>
      </div>
    </main>
  );
}

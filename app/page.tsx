import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Chieh Kao</h1>

      <p className="mt-4 text-lg text-gray-700">
        Systems-focused engineer building reliable, deployable robotics and embedded software projects.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a className="rounded-xl bg-black px-5 py-3 text-white" href="/projects">
          View Projects
        </a>

        <a className="rounded-xl border px-5 py-3" href="/resume">
          Resume
        </a>

        <a
          className="rounded-xl border px-5 py-3"
          href="https://www.linkedin.com/in/chiehkaojames"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a className="rounded-xl border px-5 py-3" href="mailto:jamesfox037@gmail.com">
          Email
        </a>
      </div>
    </main>
  );
}

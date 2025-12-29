import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-gray-300 transition-colors">
          Chieh Kao
        </Link>
        
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-300 transition-colors">
            Projects
          </Link>
          <Link href="/resume" className="hover:text-gray-300 transition-colors">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

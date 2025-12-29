import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>

      <p className="mt-4 text-gray-700">
        Selected projects focusing on robotics systems and software implementation.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </main>
  );
}

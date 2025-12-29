import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
      
      <p className="mt-2 text-sm font-medium text-gray-600">
        {project.subtitle}
      </p>
      
      <ul className="mt-4 flex-grow list-disc pl-5 text-sm text-gray-700 space-y-1">
        {project.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      
      {project.links && (
        <div className="mt-6 flex gap-4 pt-4 border-t border-gray-100">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"

export default function Home() {
  return (
    <main className="p-8">
      {/* <h1 className="text-2xl font-bold mb-8">Home</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </main>
  )
}
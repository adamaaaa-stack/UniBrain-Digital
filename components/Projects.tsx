import { projects } from "@/lib/projects";

export default function Projects() {
  const hasProjects = projects && projects.length > 0;

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">Selected Work</p>
            <h3 className="font-heading text-3xl">Projects</h3>
          </div>
          <span className="text-white/60 text-sm">Recent and upcoming builds</span>
        </div>
        {hasProjects ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="glass-card rounded-3xl p-6 hover:-translate-y-1 transition-transform">
                <div className="flex items-start justify-between">
                  <h4 className="font-heading text-xl">{project.title}</h4>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">2025</span>
                </div>
                <p className="mt-3 text-white/70">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 glass-card rounded-3xl p-6 text-white/80">
            Portfolio updates are in progress—ask for a walkthrough of current work.
          </div>
        )}
      </div>
    </section>
  );
}

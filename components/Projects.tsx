"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const hasProjects = projects && projects.length > 0;
  const selected = open !== null ? projects[open] : null;

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
            {projects.map((project, idx) => (
              <button
                key={project.title}
                onClick={() => setOpen(idx)}
                className="glass-card rounded-3xl p-6 text-left hover:-translate-y-1 transition-transform w-full"
              >
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
                <div className="mt-5 text-sm text-[#76e4c3] underline">View details</div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-8 glass-card rounded-3xl p-6 text-white/80">
            Portfolio updates are in progress—ask for a walkthrough of current work.
          </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="relative w-full max-w-3xl rounded-3xl glass-card p-8">
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80"
            >
              Close
            </button>
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#76e4c3]">Case Study</p>
                  <h4 className="font-heading text-2xl">{selected.title}</h4>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Concept</span>
              </div>
              <p className="text-white/75">{selected.longDesc}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              {selected.highlights && selected.highlights.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-white/60">Highlights</p>
                  <div className="grid gap-2 md:grid-cols-2">
                    {selected.highlights.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#76e4c3]/20 to-[#5bb2ff]/10 p-4 text-sm text-white/80">
                This is a concept preview shown in-line—no separate site to load. Want a live walkthrough? Let’s hop on
                a quick call and I’ll demo interactions.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

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
          <div className="relative w-full max-w-5xl rounded-3xl glass-card p-0 overflow-hidden">
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80"
            >
              Close
            </button>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/0" />
              <div className="space-y-0">
                <div className="bg-gradient-to-br from-[#0a1225] via-[#0b162f] to-[#0a0e1e] px-8 py-6">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#76e4c3] to-[#5bb2ff]" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#76e4c3]">PrimeSite Digital</p>
                        <h4 className="font-heading text-lg text-white">{selected.title}</h4>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((tag) => (
                        <span key={tag} className="pill bg-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-6 space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="font-heading text-3xl">{selected.title}</h2>
                        <p className="text-white/75 mt-2 max-w-2xl">{selected.longDesc}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="pill">Concept</span>
                        <span className="pill">2025</span>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 md:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                        <p className="text-xs text-white/60 uppercase tracking-[0.2em]">CTA</p>
                        <p className="mt-2 font-semibold">Book now / Buy now</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                        <p className="text-xs text-white/60 uppercase tracking-[0.2em]">Primary motion</p>
                        <p className="mt-2 font-semibold">Hero reveal + subtle parallax</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                        <p className="text-xs text-white/60 uppercase tracking-[0.2em]">Goal</p>
                        <p className="mt-2 font-semibold">Conversion-first with premium feel</p>
                      </div>
                    </div>
                  </div>

                  {selected.highlights && selected.highlights.length > 0 && (
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
                      <h5 className="font-heading text-lg">Highlights</h5>
                      <div className="grid gap-3 md:grid-cols-2">
                        {selected.highlights.map((item) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#76e4c3]/20 via-[#5bb2ff]/15 to-transparent p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-heading text-lg text-white">Call-to-action</h5>
                      <div className="flex gap-2">
                        <span className="pill">Primary</span>
                        <span className="pill">Secondary</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="btn btn-primary">Start now</button>
                      <button className="btn btn-secondary">View services</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

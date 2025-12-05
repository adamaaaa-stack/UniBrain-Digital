import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#76e4c3]">
            PrimeSite Digital
          </span>
          <div className="space-y-4">
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Premium web & AI experiences crafted for founders who move fast.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We design and build cinematic, high-performing sites, AI tools, and automations that keep your product
              ahead. Every pixel purposeful, every flow performance-ready.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="btn btn-primary">
              Start a project
            </Link>
            <Link href="#projects" className="btn btn-secondary">
              View work
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {["Next.js", "TypeScript", "Tailwind", "Node", "OpenAI", "Postgres"].map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl glass-card p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0" />
            <div className="relative space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/60">Active Build</p>
                  <h3 className="font-heading text-2xl">Launch-grade storytelling</h3>
                  <p className="text-white/70 mt-2">
                    Landing systems with live CMS, A/B ready sections, and motion-first components.
                  </p>
                </div>
                <span className="text-[#76e4c3] text-sm">● Live</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                {[
                  ["Stack", "Next.js, Edge, CMS"],
                  ["Timeline", "4-6 weeks"],
                  ["Focus", "Conversion, Motion"],
                  ["Result", "Ship faster, look better"],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/50">{title}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

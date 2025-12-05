export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">About</p>
          <h3 className="font-heading text-3xl">We build products that feel inevitable</h3>
          <p className="text-white/75 leading-relaxed">
            PrimeSite Digital is a small, sharp studio blending product strategy, design, and full-stack engineering.
            We craft experiences that are both premium and fast, from cinematic marketing sites to AI-driven internal
            tools.
          </p>
          <p className="text-white/75 leading-relaxed">
            Our approach: discovery → rapid prototyping → polished build → instrumentation. Expect thoughtful motion,
            scalable codebases, and a partner who communicates clearly.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Product thinking", "System design", "Performance", "Motion", "Reliability", "AI flows"].map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <h4 className="font-heading text-xl">Stack</h4>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
            {[
              "Next.js / React",
              "TypeScript",
              "Node / API Routes",
              "Postgres / Prisma",
              "Redis / Queues",
              "OpenAI / Vercel AI",
              "Tailwind / Motion",
              "Vercel / Docker",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

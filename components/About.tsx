export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-5xl px-6 space-y-6 animate-fade-up">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">About</p>
          <h3 className="font-heading text-3xl">We build products that feel inevitable</h3>
          <p className="text-white/75 leading-relaxed">
            UniBrain Digital is a small, sharp studio blending product strategy, design, and full-stack engineering.
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
      </div>
    </section>
  );
}

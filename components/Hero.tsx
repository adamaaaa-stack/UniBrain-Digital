import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6">
        <div className="flex-1 space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#76e4c3] animate-glow">
            UniBrain Digital
          </span>
          <div className="space-y-4">
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Product websites with embedded AI chatbots—front to back.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              I build conversion-focused product sites and embed on-brand AI chatbots directly inside them for faster
              support and lead capture. Full-stack builds with polished frontends and reliable backends.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="btn btn-primary">
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

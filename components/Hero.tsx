import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6">
        <div className="flex-1 space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#76e4c3] animate-glow">
            Study AI
          </span>
          <div className="space-y-4">
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Study smarter with your AI copilot.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Study AI turns notes into summaries, flashcards, and quizzes, and keeps an embedded chatbot on every page
              to answer follow-up questions instantly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="btn btn-primary">
              Start studying
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

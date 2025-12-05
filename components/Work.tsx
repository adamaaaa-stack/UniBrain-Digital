import Link from "next/link";

const WORK = [
  {
    title: "Study AI — Web",
    desc: "Desktop flow showing summaries, flashcards, quizzes, and the on-page tutor.",
    href: "#",
  },
  {
    title: "Study AI — Mobile",
    desc: "Mobile-first experience with quick drills and chat follow-ups.",
    href: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">Selected Work</p>
            <h3 className="font-heading text-3xl">Study AI demos</h3>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {WORK.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="glass-card block rounded-3xl p-5 transition-transform hover:-translate-y-1 animate-fade-up"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-heading text-xl">{item.title}</h4>
                <span className="pill">Live</span>
              </div>
              <p className="mt-2 text-white/70">{item.desc}</p>
              <div className="mt-4 text-sm text-[#76e4c3]">View</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

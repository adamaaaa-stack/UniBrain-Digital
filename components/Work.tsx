import Link from "next/link";

const WORK = [
  {
    title: "Worthlyy",
    desc: "Product storytelling site with strong conversion focus, motion, and crisp section rhythm.",
    href: "https://worthlyy.com/",
  },
  {
    title: "UniBrain Portfolio",
    desc: "Live UniBrain Digital build showcasing embedded AI chatbot positioning.",
    href: "https://unibrain-jnxt-git-main-adamaaaa-stacks-projects.vercel.app/",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">Selected Work</p>
            <h3 className="font-heading text-3xl">Live sites</h3>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {WORK.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="glass-card block rounded-3xl p-5 transition-transform hover:-translate-y-1 animate-fade-up"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-heading text-xl">{item.title}</h4>
                <span className="pill">Live</span>
              </div>
              <p className="mt-2 text-white/70">{item.desc}</p>
              <div className="mt-4 text-sm text-[#76e4c3]">Visit site →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

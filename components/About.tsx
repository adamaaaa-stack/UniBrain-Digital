export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-5xl px-6 space-y-6 animate-fade-up">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">About</p>
          <h3 className="font-heading text-3xl">Built for students who move fast</h3>
          <p className="text-white/75 leading-relaxed">
            Study AI keeps your learning loop tight: drop in notes, get concise summaries, spin up flashcards, and let
            the embedded chatbot quiz you in context. It's a single workspace that removes busywork and keeps you in the
            flow.
          </p>
          <p className="text-white/75 leading-relaxed">
            Summaries stay true to source, quizzes adapt to weak spots, and the chatbot cites your material so answers
            remain trustworthy.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Summaries", "Flashcards", "Adaptive quizzes", "Cited answers", "On-page chatbot"].map((item) => (
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

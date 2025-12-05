export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-5xl px-6 glass-card rounded-3xl p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">Contact</p>
            <h3 className="font-heading text-3xl mt-2">Let’s build with UniBrain</h3>
            <p className="mt-3 text-white/70">
              Tell me about your product, timeline, and goals. I typically respond within 24 hours with next steps and an initial approach.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <a href="mailto:unibraindigital@gmail.com" className="pill">
                unibraindigital@gmail.com
              </a>
              <a href="https://github.com/" className="pill">
                GitHub
              </a>
              <a href="https://instagram.com/" className="pill">
                Instagram
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            />
            <textarea
              name="message"
              placeholder="Project details, timelines, goals"
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            />
            <button type="submit" className="btn btn-primary w-full justify-center">
              Send message
            </button>
            <a
              href="mailto:unibraindigital@gmail.com"
              className="btn btn-secondary w-full justify-center text-center"
            >
              Email me directly
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

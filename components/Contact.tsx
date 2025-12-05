"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const to = "unibraindigital@gmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${name || "UniBrain visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-5xl px-6 glass-card rounded-3xl p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">Contact</p>
            <h3 className="font-heading text-3xl mt-2">Let’s build with UniBrain</h3>
            <p className="mt-3 text-white/70">
              Tell me about your product, timeline, and goals. I typically respond within 24 hours with next steps and an
              initial approach.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <a href={`mailto:${to}`} className="pill">
                {to}
              </a>
              <a href="https://github.com/" className="pill">
                GitHub
              </a>
              <a href="https://instagram.com/" className="pill">
                Instagram
              </a>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Project details, timelines, goals"
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-full justify-center">
              Send message
            </button>
            <a href={`mailto:${to}`} className="btn btn-secondary w-full justify-center text-center">
              Email me directly
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

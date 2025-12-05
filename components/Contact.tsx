"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const to = "unibraindigital@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data?.error || "Failed to send. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-5xl px-6 glass-card rounded-3xl p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">Contact</p>
            <h3 className="font-heading text-3xl mt-2">Let's build with UniBrain</h3>
            <p className="mt-3 text-white/70">
              Tell us about your product, timeline, and goals. We typically respond within 24 hours with next steps and an
              initial approach.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="pill">{to}</span>
              <a href="https://github.com/" className="pill">
                GitHub
              </a>
              <a href="https://instagram.com/unibrain_digital" className="pill">
                Instagram
              </a>
            </div>
          </div>
          <form className="space-y-4 animate-fade-up" onSubmit={handleSubmit}>
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
              required
            />
            <textarea
              name="message"
              placeholder="Project details, timelines, goals"
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-full justify-center disabled:opacity-60"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && <p className="text-sm text-emerald-300">Message sent. We'll reply shortly.</p>}
            {status === "error" && <p className="text-sm text-red-300">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

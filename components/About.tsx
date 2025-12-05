export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-5xl px-6 space-y-6 animate-fade-up">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">About</p>
          <h3 className="font-heading text-3xl">Websites that make the next step obvious</h3>
          <p className="text-white/75 leading-relaxed">
            UniBrain Digital is a Johannesburg-based web design team helping small businesses, solo service providers, NGOs,
            and creative studios look professional online. We blend UX writing, Tailwind-powered layouts, and light motion
            to keep every site clean, fast, and trustworthy on any device.
          </p>
          <p className="text-white/75 leading-relaxed">
            Our process is simple: research your offer, map the conversion path, build a component library, and launch with
            tracking plus AI-enabled chat flows. You get a site that is easy to update, easy to crawl, and easy for customers
            to fall in love with—whether they find you in Johannesburg, Sandton, Fourways, Randburg, Midrand, or anywhere
            else in South Africa.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Messaging clarity", "SEO-ready structure", "Mobile polish", "Lead capture", "AI chat flows"].map((item) => (
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

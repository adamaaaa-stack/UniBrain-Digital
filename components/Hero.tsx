import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6">
        <div className="flex-1 space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#76e4c3] animate-glow">
            UniBrain Digital · Johannesburg
          </span>
          <div className="space-y-5">
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              Modern Website Design for Small Businesses in Johannesburg
            </h1>
            <p className="text-white/70 leading-relaxed">
              UniBrain Digital is a small design-and-build team in Johannesburg, South Africa. We create fast, mobile-first
              websites for small businesses, side hustles, and community projects across the city. Every build is tuned for
              local search, lead capture, and on-page AI chat support so your customers get answers right away.
            </p>
            <h2 className="font-heading text-2xl">Affordable Websites from R300</h2>
            <p className="text-white/70 leading-relaxed">
              Starter one-pagers launch from just R300 and include hosting guidance, WhatsApp/contact integrations, and
              ongoing tweaks for the first month. Need something more advanced? We scale into full product marketing sites,
              landing page systems, and AI-assisted knowledge bases.
            </p>
            <h2 className="font-heading text-2xl">Professional, Mobile-Friendly Websites for South African Businesses</h2>
            <p className="text-white/70 leading-relaxed">
              We work with founders and service providers in Johannesburg, Sandton, Fourways, Randburg, Midrand, Soweto, and
              the rest of South Africa. A professional, responsive website helps you appear trustworthy, book more
              appointments, and stay visible in Google when potential customers search for help nearby.
            </p>
            <p className="text-white/70 leading-relaxed">
              Let us know what you offer, who you serve, and the outcomes you need—UniBrain Digital will design, write, and
              ship the right website to get you there faster.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="btn btn-primary">
              Request a proposal
            </Link>
            <Link href="#services" className="btn btn-secondary">
              See services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

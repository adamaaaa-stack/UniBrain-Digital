import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.25em] text-[#76e4c3]">Capabilities</p>
        <h3 className="font-heading text-3xl mt-2">Services</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass-card rounded-3xl p-5 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3">
                <span className="text-xl">{service.icon}</span>
                <h4 className="font-heading text-lg">{service.title}</h4>
              </div>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

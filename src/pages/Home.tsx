import { Suspense, lazy, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Badge from "../components/Badge";
import PropertyCard from "../components/PropertyCard";
import StatsCounter from "../components/StatsCounter";
import { properties } from "../data/properties";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const TestimonialCarousel = lazy(
  () => import("../components/TestimonialCarousel")
);

const services = [
  {
    title: "Leasing & Tenant Screening",
    description:
      "Strategic pricing, targeted marketing, and a thorough screening process to secure reliable residents."
  },
  {
    title: "Maintenance Coordination",
    description:
      "Vetted vendors, 24/7 issue intake, and transparent approvals to protect your asset."
  },
  {
    title: "Accounting & Reporting",
    description:
      "Monthly statements, year-end tax prep, and owner dashboards with real-time insights."
  },
  {
    title: "Routine Inspections",
    description:
      "Proactive inspections with photo documentation to keep every property performing."
  }
];

const stats = [
  { value: 98, suffix: "%", label: "Owner retention rate" },
  { value: 42, label: "Average days to lease" },
  { value: 420, suffix: "+", label: "Homes under care" },
  { value: 24, suffix: "/7", label: "Maintenance triage" }
];

const Home = () => {
  useEffect(() => {
    document.title = "Home | Lando Property Management";
  }, []);

  const featured = properties.filter((property) => property.featured).slice(0, 3);
  const heroImage =
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=1000&fit=crop";
  const reduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 600], reduced ? [0, 0] : [0, -80]);
  const blobY2 = useTransform(scrollY, [0, 600], reduced ? [0, 0] : [0, 60]);

  return (
    <div>
      <section className="relative overflow-hidden bg-white dark:bg-navy-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-hero-glow dark:opacity-30" />
        <motion.div
          style={{ y: blobY }}
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald/10 dark:bg-emerald/20 blur-3xl"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute right-0 top-32 h-80 w-80 rounded-full bg-gold/15 dark:bg-gold/20 blur-3xl"
        />
        <div className="container-pad mx-auto grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="emerald">Premium Property Care</Badge>
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0.1 : 0.4 }}
              className="text-4xl sm:text-5xl font-semibold text-navy-900 dark:text-white text-balance"
            >
              Elevated property management with calm, consistent performance.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0.1 : 0.45, delay: reduced ? 0 : 0.05 }}
              className="text-lg text-charcoal/70 dark:text-stone/70 max-w-xl"
            >
              Lando Property Management partners with owners and renters to deliver
              boutique service, trusted maintenance, and clear reporting across every home.
            </motion.p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/owners">Schedule a consultation</ButtonLink>
              <ButtonLink to="/properties" variant="secondary">
                Browse properties
              </ButtonLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 pt-4 text-sm text-charcoal/70 dark:text-stone/70">
              <div>
                <p className="font-semibold text-navy-900 dark:text-white">Local expertise</p>
                <p>Neighborhood-focused leasing strategy.</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 dark:text-white">Owner-first</p>
                <p>Hands-on reporting and proactive updates.</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 dark:text-white">Resident care</p>
                <p>Responsive support and smooth onboarding.</p>
              </div>
            </div>
          </div>
          <Card className="p-0 overflow-hidden shadow-xl border-stone/40 dark:border-navy-700">
            <div className="relative h-56">
              <img
                src={heroImage}
                alt="Luxury apartment interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                <Badge variant="gold">New Listing</Badge>
                <p className="text-xl font-semibold">Curated residences, updated weekly</p>
                <p className="text-sm text-white/80">Harbor District • 2-4 beds</p>
              </div>
            </div>
            <div className="p-6 bg-white dark:bg-navy-800">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-navy-900 dark:text-white">Featured Availability</p>
                <Badge variant="emerald">New This Month</Badge>
              </div>
              <div className="mt-5 space-y-3">
                {featured.slice(0, 2).map((property) => (
                  <div
                    key={property.id}
                    className="group flex items-center gap-4 rounded-xl border border-stone/40 dark:border-navy-700 bg-sand/50 dark:bg-navy-900/50 p-3 transition-all hover:border-emerald/40 hover:bg-emerald/5 cursor-pointer"
                  >
                    <img
                      src={property.image}
                      alt={property.name}
                      className="h-14 w-14 rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy-900 dark:text-white group-hover:text-emerald transition-colors truncate">
                        {property.name}
                      </p>
                      <p className="text-xs text-charcoal/60 dark:text-stone/60">
                        {property.beds} bd • {property.baths} ba • {property.neighborhood}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-emerald">
                      ${property.price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <ButtonLink to="/properties" size="sm" className="w-full justify-center">
                  View all listings
                </ButtonLink>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-pad bg-sand dark:bg-navy-900 transition-colors duration-300">
        <div className="container-pad mx-auto space-y-12">
          <SectionHeading
            eyebrow="Services"
            title="Full-service management designed for long-term performance"
            subtitle="A hands-on, transparent approach to leasing, maintenance, and resident care."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduced ? 0.1 : 0.35, delay: index * 0.05 }}
                className="group rounded-2xl border border-stone/60 dark:border-navy-700 bg-white dark:bg-navy-800 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-emerald/40 dark:hover:border-emerald/40"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald/10 dark:bg-emerald/20 flex items-center justify-center mb-4 group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                  <span className="text-emerald group-hover:text-white text-lg font-semibold transition-colors">{index + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-navy-900 dark:text-white group-hover:text-emerald transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 dark:text-stone/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="section-pad bg-white dark:bg-navy-800 transition-colors duration-300">
        <div className="container-pad mx-auto space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured"
              title="Refined residences across the city"
              subtitle="Every listing is curated, professionally marketed, and supported by our in-house leasing team."
            />
            <ButtonLink to="/properties" variant="secondary">
              View all properties
            </ButtonLink>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduced ? 0.1 : 0.35, delay: index * 0.05 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand dark:bg-navy-900 transition-colors duration-300">
        <div className="container-pad mx-auto grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Performance"
            title="Measured results, communicated clearly"
            subtitle="We stay ahead of leasing velocity, maintenance, and resident satisfaction so your property performs confidently."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduced ? 0.1 : 0.35, delay: index * 0.05 }}
              >
                <Card className="p-6">
                  <StatsCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-navy-800 transition-colors duration-300">
        <div className="container-pad mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Testimonials"
            title="Owners trust our calm, proactive style"
            subtitle="A boutique portfolio means every owner receives a hands-on experience."
          />
          <Suspense fallback={<div className="rounded-3xl border border-stone/60 dark:border-navy-700 bg-white dark:bg-navy-800 p-8">Loading testimonials...</div>}>
            <TestimonialCarousel />
          </Suspense>
        </div>
      </section>

      <section className="section-pad bg-sand dark:bg-navy-900 transition-colors duration-300">
        <div className="container-pad mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 px-8 py-14 text-white md:px-12 lg:py-16">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Ready to elevate your property?
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  Let us build a calm, high-performing rental strategy for you.
                </h2>
                <p className="text-base text-white/80 max-w-lg">
                  Schedule a private consultation and receive a tailored leasing and management plan.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink
                  to="/owners"
                  className="!bg-white !text-navy-900 hover:!bg-sand hover:!text-navy-900 shadow-lg hover:shadow-xl"
                >
                  Talk with our team
                </ButtonLink>
                <ButtonLink
                  to="/contact"
                  className="!bg-transparent border-2 border-white/30 !text-white hover:!bg-white/10 hover:border-white/50"
                >
                  Contact us
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

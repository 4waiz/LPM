import { useEffect } from "react";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Badge from "../components/Badge";

const values = [
  {
    title: "Thoughtful stewardship",
    description:
      "We treat every property as a long-term asset, aligning daily decisions to owner goals."
  },
  {
    title: "Transparent communication",
    description:
      "Owners and residents receive clear updates, timelines, and follow-through."
  },
  {
    title: "Elevated service",
    description:
      "Boutique attention ensures every detail is cared for with precision and calm."
  }
];

const team = [
  {
    name: "Awaiz Ahmed",
    role: "Founder & Managing Director",
    bio: "Visionary leader with expertise in property management and real estate strategy across the UAE.",
    image: "/Awaiz.jpg"
  },
  {
    name: "Jordan Vale",
    role: "Resident Experience Lead",
    bio: "Specializes in resident onboarding, renewals, and concierge support.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
  },
  {
    name: "Casey Moran",
    role: "Asset Operations Manager",
    bio: "Oversees inspections, maintenance coordination, and vendor partnerships.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
  }
];

const About = () => {
  useEffect(() => {
    document.title = "About | Lando Property Management";
  }, []);

  return (
    <div className="bg-white dark:bg-navy-900 transition-colors duration-300">
      <section className="section-pad">
        <div className="container-pad mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="About"
            title="Boutique property management rooted in trust"
            subtitle="Lando Property Management is a focused, hands-on team serving owners and residents across the metro area."
          />
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-6 text-white shadow-xl border border-navy-700">
            {/* Decorative elements */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />

            <div className="relative">
              <Badge variant="gold">Our Story</Badge>
              <p className="mt-4 text-sm text-white/90 leading-relaxed">
                Founded in 2010, Lando Property Management was built to deliver a more
                attentive and transparent ownership experience. We keep portfolios intentionally
                curated, allowing our team to operate with speed, care, and precision.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald">14+</p>
                  <p className="text-xs text-white/60">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald">420+</p>
                  <p className="text-xs text-white/60">Properties</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald">98%</p>
                  <p className="text-xs text-white/60">Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand dark:bg-navy-800 transition-colors duration-300">
        <div className="container-pad mx-auto space-y-10">
          <SectionHeading
            eyebrow="Values"
            title="The principles behind every decision"
            subtitle="We lead with clarity, accountability, and a hospitality mindset."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="p-6">
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 dark:text-stone/70">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-navy-900 transition-colors duration-300">
        <div className="container-pad mx-auto space-y-10">
          <SectionHeading
            eyebrow="Team"
            title="A dedicated team with deep market knowledge"
            subtitle="Experienced leaders and resident support specialists ready to serve."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-emerald/20 dark:ring-emerald/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-charcoal/70 dark:text-stone/70">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

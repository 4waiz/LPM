import { useEffect } from "react";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Accordion from "../components/Accordion";
import { ButtonLink } from "../components/Button";

const offerings = [
  {
    title: "Leasing & Marketing",
    description:
      "Professional photography, targeted campaigns, and strategic pricing tailored to neighborhood demand."
  },
  {
    title: "Tenant Experience",
    description:
      "Concierge-level onboarding, consistent communication, and renewal planning for stable occupancy."
  },
  {
    title: "Asset Oversight",
    description:
      "Routine inspections, preventative maintenance, and vendor management that protects your investment."
  },
  {
    title: "Owner Reporting",
    description:
      "Monthly statements, real-time maintenance tracking, and year-end summaries for tax season."
  }
];

const faqs = [
  {
    id: "pricing",
    title: "How is pricing structured?",
    content:
      "We tailor fees based on portfolio size and service scope. Most owners choose a flat monthly management fee plus a leasing placement fee."
  },
  {
    id: "communication",
    title: "How often do you communicate with owners?",
    content:
      "We provide monthly reporting plus proactive updates around leasing, maintenance, and renewal decisions."
  },
  {
    id: "repairs",
    title: "How do you handle maintenance approvals?",
    content:
      "We align approval limits with each owner. Routine items are handled immediately, and larger projects are reviewed in advance."
  }
];

const Owners = () => {
  useEffect(() => {
    document.title = "Owners | Lando Property Management";
  }, []);

  return (
    <div className="bg-white dark:bg-navy-900 transition-colors duration-300">
      <section className="section-pad">
        <div className="container-pad mx-auto space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <SectionHeading
              eyebrow="For Owners"
              title="Luxury-level management for serious property performance"
              subtitle="We protect your asset, elevate the resident experience, and communicate clearly at every stage."
            />
            <Card className="p-8 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-800 dark:to-navy-900 border-navy-700">
              <Badge variant="gold">Pricing Snapshot</Badge>
              <p className="mt-5 text-4xl font-bold text-white">8% - 10%</p>
              <p className="mt-2 text-sm text-white/80">
                Management fee range based on portfolio size and service tier.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  <span>Leasing placement: One month rent</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  <span>Renewals: $250 flat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  <span>Inspection cadence: Quarterly</span>
                </div>
              </div>
              <div className="mt-8">
                <ButtonLink to="/contact" className="w-full justify-center">
                  Request a custom proposal
                </ButtonLink>
              </div>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((offering) => (
              <Card key={offering.title} className="p-6">
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 dark:text-stone/70">
                  {offering.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand dark:bg-navy-800 transition-colors duration-300">
        <div className="container-pad mx-auto grid gap-10 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Process"
            title="Thoughtful onboarding, tailored reporting, calm ownership"
            subtitle="We integrate with your goals, design a property plan, and maintain high-touch communication."
          />
          <div className="space-y-4">
            <Card className="p-6">
              <p className="text-sm font-semibold text-navy-900 dark:text-white">1. Strategy & onboarding</p>
              <p className="mt-2 text-sm text-charcoal/70 dark:text-stone/70">
                We review assets, align on leasing goals, and build a customized property playbook.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold text-navy-900 dark:text-white">2. Leasing & stabilization</p>
              <p className="mt-2 text-sm text-charcoal/70 dark:text-stone/70">
                Targeted marketing, screening, and resident onboarding to secure long-term occupancy.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold text-navy-900 dark:text-white">3. Ongoing asset care</p>
              <p className="mt-2 text-sm text-charcoal/70 dark:text-stone/70">
                Proactive inspections, vendor management, and transparent reporting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-navy-900 transition-colors duration-300">
        <div className="container-pad mx-auto grid gap-10 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for owners"
            subtitle="Clear expectations and a partnership built on trust."
          />
          <Accordion items={faqs} />
        </div>
      </section>
    </div>
  );
};

export default Owners;

import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { Button, ButtonLink } from "../components/Button";
import PayRentModal from "../components/PayRentModal";

const resources = [
  {
    title: "Resident Portal",
    description:
      "View statements, set up autopay, and track maintenance updates in one place."
  },
  {
    title: "Lease Guidelines",
    description:
      "Understand policies around guests, pets, and community expectations."
  },
  {
    title: "Move-in Checklist",
    description:
      "Document your space, confirm utilities, and settle in smoothly."
  }
];

const policies = [
  "Maintenance requests answered within 24 hours",
  "Dedicated after-hours emergency line: 050-475-4950",
  "Clear renewal timelines and transparent rent notices",
  "Pet and parking addendums available upon request"
];

const Tenants = () => {
  const [showPayRent, setShowPayRent] = useState(false);

  useEffect(() => {
    document.title = "Tenants | Lando Property Management";
  }, []);

  return (
    <>
    <div className="bg-white dark:bg-navy-900 transition-colors duration-300">
      <section className="section-pad">
        <div className="container-pad mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="For Tenants"
            title="A calm, responsive rental experience"
            subtitle="We blend boutique service with clear policies so you can feel at home from day one."
          />
          <Card className="p-8 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 border-navy-700">
            <p className="text-lg font-semibold text-white">Resident Quick Actions</p>
            <p className="text-sm text-white/70 mt-1">Access your account services</p>
            <div className="mt-6 space-y-3">
              <Button
                type="button"
                onClick={() => setShowPayRent(true)}
                className="w-full justify-center !bg-emerald !text-white hover:!bg-emerald/90"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Pay Rent
              </Button>
              <ButtonLink to="/maintenance" className="w-full justify-center !bg-white/10 !text-white border border-white/20 hover:!bg-white/20">
                Submit Maintenance Request
              </ButtonLink>
              <ButtonLink to="/contact" className="w-full justify-center !bg-transparent !text-white border border-white/30 hover:!bg-white/10">
                Contact Resident Care
              </ButtonLink>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-pad bg-sand dark:bg-navy-800 transition-colors duration-300">
        <div className="container-pad mx-auto space-y-10">
          <SectionHeading
            eyebrow="Resources"
            title="Resident resources and support"
            subtitle="Helpful guidance, always within reach."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.title} className="p-6">
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 dark:text-stone/70">
                  {resource.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-navy-900 transition-colors duration-300">
        <div className="container-pad mx-auto grid gap-10 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Policies"
            title="Clear standards, consistent service"
            subtitle="We set expectations to keep your community secure, quiet, and well cared for."
          />
          <div className="space-y-4">
            {policies.map((policy) => (
              <Card key={policy} className="p-5">
                <p className="text-sm text-charcoal/70 dark:text-stone/70">{policy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
    <PayRentModal open={showPayRent} onClose={() => setShowPayRent(false)} />
    </>
  );
};

export default Tenants;

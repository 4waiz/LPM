import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import { Button } from "../components/Button";
import Stepper from "../components/Stepper";
import { useToast } from "../hooks/useToast";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const steps = [
  { title: "Contact", description: "Your info" },
  { title: "Property", description: "Location" },
  { title: "Issue", description: "Details" },
  { title: "Review", description: "Confirm" }
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  unit: string;
  issueType: string;
  urgency: string;
  description: string;
  entryPermission: string;
  preferredTime: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  unit: "",
  issueType: "",
  urgency: "",
  description: "",
  entryPermission: "",
  preferredTime: ""
};

const Maintenance = () => {
  useEffect(() => {
    document.title = "Maintenance Request | Lando Property Management";
  }, []);

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { notify } = useToast();
  const reduced = usePrefersReducedMotion();

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validateStep = (currentStep: number) => {
    const nextErrors: Record<string, string> = {};
    if (currentStep === 0) {
      if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
      if (!form.email.trim() || !form.email.includes("@")) {
        nextErrors.email = "Please enter a valid email.";
      }
      if (!form.phone.trim()) nextErrors.phone = "Please enter a contact number.";
    }
    if (currentStep === 1) {
      if (!form.address.trim()) nextErrors.address = "Property address is required.";
      if (!form.unit.trim()) nextErrors.unit = "Unit or suite is required.";
    }
    if (currentStep === 2) {
      if (!form.issueType) nextErrors.issueType = "Select an issue type.";
      if (!form.urgency) nextErrors.urgency = "Select urgency.";
      if (!form.description.trim()) nextErrors.description = "Describe the issue.";
      if (!form.entryPermission) {
        nextErrors.entryPermission = "Please confirm entry permission.";
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    if (!validateStep(2)) {
      setStep(2);
      return;
    }
    setSubmitted(true);
    notify("Maintenance request submitted. We'll be in touch shortly.");
    setForm(initialState);
    setErrors({});
    setStep(0);
  };

  const stepContent = useMemo(() => {
    switch (step) {
      case 0:
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Full name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              error={errors.name}
              placeholder="Awaiz Ahmed"
            />
            <Input
              label="Email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              error={errors.email}
              placeholder="awaiz@company.com"
            />
            <Input
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              error={errors.phone}
              placeholder="050-475-4950"
            />
          </div>
        );
      case 1:
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Property address"
              value={form.address}
              onChange={(event) => updateField("address", event.target.value)}
              error={errors.address}
              placeholder="150 Market Street"
            />
            <Input
              label="Unit / Suite"
              value={form.unit}
              onChange={(event) => updateField("unit", event.target.value)}
              error={errors.unit}
              placeholder="Unit 4B"
            />
            <Select
              label="Preferred access time"
              value={form.preferredTime}
              onChange={(event) => updateField("preferredTime", event.target.value)}
            >
              <option value="">Select a window</option>
              <option value="Morning">Morning (8-12)</option>
              <option value="Afternoon">Afternoon (12-4)</option>
              <option value="Evening">Evening (4-7)</option>
            </Select>
          </div>
        );
      case 2:
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Select
              label="Issue type"
              value={form.issueType}
              onChange={(event) => updateField("issueType", event.target.value)}
              error={errors.issueType}
            >
              <option value="">Select a category</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Appliance">Appliance</option>
              <option value="HVAC">HVAC</option>
              <option value="Other">Other</option>
            </Select>
            <Select
              label="Urgency"
              value={form.urgency}
              onChange={(event) => updateField("urgency", event.target.value)}
              error={errors.urgency}
            >
              <option value="">Select urgency</option>
              <option value="Routine">Routine (3-5 days)</option>
              <option value="Soon">Soon (1-2 days)</option>
              <option value="Urgent">Urgent (same day)</option>
            </Select>
            <div className="md:col-span-2">
              <TextArea
                label="Describe the issue"
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
                error={errors.description}
                placeholder="Share details about the issue and any troubleshooting steps."
                rows={4}
              />
            </div>
            <Select
              label="Entry permission"
              value={form.entryPermission}
              onChange={(event) => updateField("entryPermission", event.target.value)}
              error={errors.entryPermission}
            >
              <option value="">Select entry preference</option>
              <option value="Yes">Yes, you may enter with notice</option>
              <option value="No">No, please schedule with me</option>
            </Select>
          </div>
        );
      case 3:
      default:
        return (
          <div className="space-y-4 text-sm text-charcoal/80 dark:text-stone/80">
            <div className="rounded-2xl border border-stone/60 dark:border-navy-700 bg-sand dark:bg-navy-900 p-4">
              <p className="font-semibold text-navy-900 dark:text-white">Contact</p>
              <p>{form.name}</p>
              <p>{form.email}</p>
              <p>{form.phone}</p>
            </div>
            <div className="rounded-2xl border border-stone/60 dark:border-navy-700 bg-sand dark:bg-navy-900 p-4">
              <p className="font-semibold text-navy-900 dark:text-white">Property</p>
              <p>{form.address}</p>
              <p>{form.unit}</p>
              <p>{form.preferredTime || "No preferred time"}</p>
            </div>
            <div className="rounded-2xl border border-stone/60 dark:border-navy-700 bg-sand dark:bg-navy-900 p-4">
              <p className="font-semibold text-navy-900 dark:text-white">Issue</p>
              <p>{form.issueType}</p>
              <p>{form.urgency}</p>
              <p>{form.description}</p>
              <p>Entry permission: {form.entryPermission}</p>
            </div>
          </div>
        );
    }
  }, [errors, form, step]);

  return (
    <div className="bg-white dark:bg-navy-900 transition-colors duration-300">
      <section className="section-pad">
        <div className="container-pad mx-auto space-y-10">
          <SectionHeading
            eyebrow="Maintenance"
            title="Submit a maintenance request"
            subtitle="Our team responds quickly and coordinates repairs with vetted vendors."
          />

          <Card className="p-6">
            <Stepper steps={steps} currentStep={step} />
            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: reduced ? 0 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduced ? 0 : -20 }}
                  transition={{ duration: reduced ? 0.1 : 0.25 }}
                >
                  {stepContent}
                </motion.div>
              </AnimatePresence>
            </div>

            {Object.keys(errors).length > 0 && (
              <div
                role="alert"
                className="mt-6 rounded-2xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 px-4 py-3 text-sm text-rose-600 dark:text-rose-400"
              >
                Please address the highlighted fields to continue.
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={handleBack}
                disabled={step === 0}
              >
                Back
              </Button>
              {step < steps.length - 1 ? (
                <Button type="button" onClick={handleNext}>
                  Continue
                </Button>
              ) : (
                <Button type="button" onClick={handleSubmit}>
                  Submit request
                </Button>
              )}
            </div>
          </Card>

          {submitted && (
            <Card className="p-6 bg-section-wash dark:bg-navy-800">
              <p className="text-sm font-semibold text-navy-900 dark:text-white">
                Request received
              </p>
              <p className="mt-2 text-sm text-charcoal/70 dark:text-stone/70">
                Thank you. Our maintenance coordinator will follow up within one business day.
              </p>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default Maintenance;

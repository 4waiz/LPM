import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import { Button } from "../components/Button";
import { useToast } from "../hooks/useToast";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Lando Property Management";
  }, []);

  const { notify } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim() || !form.email.includes("@")) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!form.interest) nextErrors.interest = "Select a topic.";
    if (!form.message.trim()) nextErrors.message = "Tell us how we can help.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      notify("Thanks for reaching out. We'll respond within one business day.");
      setForm({ name: "", email: "", interest: "", message: "" });
    }
  };

  return (
    <div className="bg-white dark:bg-navy-900 transition-colors duration-300">
      <section className="section-pad">
        <div className="container-pad mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about your property goals"
              subtitle="Share your needs and our team will follow up within one business day."
            />

            {/* Why Contact Us */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sand/50 dark:bg-navy-800/50 border border-stone/30 dark:border-navy-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 dark:bg-emerald/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white text-sm">Quick Response</p>
                  <p className="text-xs text-charcoal/70 dark:text-stone/70 mt-1">We reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sand/50 dark:bg-navy-800/50 border border-stone/30 dark:border-navy-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 dark:bg-emerald/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white text-sm">Trusted Service</p>
                  <p className="text-xs text-charcoal/70 dark:text-stone/70 mt-1">420+ properties managed</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sand/50 dark:bg-navy-800/50 border border-stone/30 dark:border-navy-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 dark:bg-emerald/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white text-sm">Expert Team</p>
                  <p className="text-xs text-charcoal/70 dark:text-stone/70 mt-1">Local Abu Dhabi expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sand/50 dark:bg-navy-800/50 border border-stone/30 dark:border-navy-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 dark:bg-emerald/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white text-sm">Free Consultation</p>
                  <p className="text-xs text-charcoal/70 dark:text-stone/70 mt-1">No obligation to start</p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">Prefer to call?</p>
              <a href="tel:+971504754950" className="text-2xl font-bold hover:text-emerald transition-colors">
                050-475-4950
              </a>
              <p className="text-sm text-white/70 mt-2">Available Sun-Thu, 9AM-6PM GST</p>
            </div>
          </div>
          <Card className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                label="Full name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                error={errors.name}
              />
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                error={errors.email}
              />
              <Select
                label="I'm interested in"
                value={form.interest}
                onChange={(event) => updateField("interest", event.target.value)}
                error={errors.interest}
              >
                <option value="">Select an option</option>
                <option value="Owner Services">Owner Services</option>
                <option value="Leasing">Leasing / Properties</option>
                <option value="Tenant Support">Tenant Support</option>
              </Select>
              <TextArea
                label="Message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                error={errors.message}
                placeholder="Tell us about your property or request."
                rows={4}
              />
              <Button type="submit">Send message</Button>
            </form>
          </Card>
        </div>
      </section>

      <section className="section-pad bg-sand dark:bg-navy-800 transition-colors duration-300">
        <div className="container-pad mx-auto grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Card className="p-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop"
              alt="Abu Dhabi skyline"
              className="h-full w-full object-cover min-h-64"
              loading="lazy"
            />
          </Card>
          <Card className="p-6 space-y-5">
            <div>
              <p className="text-sm font-semibold text-navy-900 dark:text-white mb-3">Office Location</p>
              <div className="text-sm text-charcoal/70 dark:text-stone/70 space-y-2">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Al Reem Island, Abu Dhabi, UAE</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900 dark:text-white mb-3">Contact Info</p>
              <div className="text-sm text-charcoal/70 dark:text-stone/70 space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+971504754950" className="hover:text-emerald transition-colors">050-475-4950</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:awaiz42ad@gmail.com" className="hover:text-emerald transition-colors">awaiz42ad@gmail.com</a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900 dark:text-white mb-3">Business Hours</p>
              <div className="text-sm text-charcoal/70 dark:text-stone/70 space-y-1">
                <p>Sun - Thu: 9:00 AM - 6:00 PM</p>
                <p>Fri - Sat: Closed</p>
                <p className="text-emerald font-medium">24/7 Emergency Support</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-charcoal/50 dark:text-stone/50">
                Contact: Awaiz Ahmed
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;

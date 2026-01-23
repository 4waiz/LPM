import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import { Button } from "./Button";
import Badge from "./Badge";
import { useToast } from "../hooks/useToast";
import type { Property } from "../data/properties";

type ScheduleTourModalProps = {
  property?: Property | null;
  open: boolean;
  onClose: () => void;
};

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

const ScheduleTourModal = ({ property, open, onClose }: ScheduleTourModalProps) => {
  const { notify } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
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
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!form.date) nextErrors.date = "Please select a date.";
    if (!form.time) nextErrors.time = "Please select a time.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      notify(`Tour scheduled for ${form.date} at ${form.time}. We'll contact you shortly!`);
      setForm({ name: "", email: "", phone: "", date: "", time: "", message: "" });
      onClose();
    }
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Get maximum date (60 days from now)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <Modal open={open} onClose={onClose} title="Schedule a Tour" size="md">
      <div className="space-y-6">
        {/* Property info if provided */}
        {property && (
          <div className="flex items-center gap-4 rounded-2xl border border-stone/60 dark:border-navy-700 bg-sand/50 dark:bg-navy-900/50 p-4">
            <img
              src={property.image}
              alt={property.name}
              className="h-20 w-20 rounded-xl object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="emerald" className="text-xs">Selected Property</Badge>
              </div>
              <p className="font-semibold text-navy-900 dark:text-white truncate">
                {property.name}
              </p>
              <p className="text-sm text-charcoal/70 dark:text-stone/70">
                {property.beds} bd • {property.baths} ba • ${property.price.toLocaleString()}/mo
              </p>
            </div>
          </div>
        )}

        {/* Tour scheduling form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Full name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              error={errors.name}
              placeholder="John Doe"
            />
            <Input
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              error={errors.email}
              placeholder="john@example.com"
            />
          </div>

          <Input
            label="Phone number"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            error={errors.phone}
            placeholder="+971 50 XXX XXXX"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
                Preferred date
              </label>
              <input
                type="date"
                min={minDate}
                max={maxDateStr}
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
                className="w-full rounded-xl border border-stone/60 dark:border-navy-700 bg-white dark:bg-navy-900 px-4 py-2.5 text-sm text-navy-900 dark:text-white transition-all placeholder:text-charcoal/40 dark:placeholder:text-stone/40 focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
              />
              {errors.date && (
                <p className="mt-1.5 text-xs text-red-500">{errors.date}</p>
              )}
            </div>
            <Select
              label="Preferred time"
              value={form.time}
              onChange={(e) => updateField("time", e.target.value)}
              error={errors.time}
            >
              <option value="">Select a time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          </div>

          <TextArea
            label="Additional notes (optional)"
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Any specific questions or requirements?"
            rows={3}
          />

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Confirm Tour
            </Button>
          </div>
        </form>

        {/* Info note */}
        <div className="rounded-xl bg-emerald/10 dark:bg-emerald/20 px-4 py-3 text-sm text-emerald">
          <p className="font-medium">What happens next?</p>
          <p className="mt-1 text-emerald/80">
            Our team will confirm your tour within 24 hours and send you a calendar invite with all the details.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ScheduleTourModal;

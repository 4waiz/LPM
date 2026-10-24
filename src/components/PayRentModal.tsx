import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Select from "./Select";
import { Button } from "./Button";
import { useToast } from "../hooks/useToast";

type PayRentModalProps = {
  open: boolean;
  onClose: () => void;
};

const PayRentModal = ({ open, onClose }: PayRentModalProps) => {
  const { notify } = useToast();
  const [step, setStep] = useState<"details" | "payment" | "confirm">("details");
  // Demo only: card details are never collected, so the form only tracks
  // the unit, amount and chosen method.
  const [form, setForm] = useState({
    unit: "",
    amount: "",
    paymentMethod: ""
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

  const validateDetails = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.unit.trim()) nextErrors.unit = "Please enter your unit number.";
    if (!form.amount.trim()) nextErrors.amount = "Please enter the amount.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validatePayment = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.paymentMethod) nextErrors.paymentMethod = "Select a payment method.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (step === "details" && validateDetails()) {
      setStep("payment");
    } else if (step === "payment" && validatePayment()) {
      setStep("confirm");
    }
  };

  const handleBack = () => {
    if (step === "payment") setStep("details");
    if (step === "confirm") setStep("payment");
  };

  const handleSubmit = () => {
    notify("Demo complete. No payment was processed.", "info");
    setForm({
      unit: "",
      amount: "",
      paymentMethod: ""
    });
    setStep("details");
    onClose();
  };

  const handleClose = () => {
    setStep("details");
    setErrors({});
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title="Pay Rent (Demo)" size="md">
      <div className="space-y-6">
        <div
          role="note"
          className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
        >
          <p className="font-semibold">Demo only, no payment is processed.</p>
          <p className="mt-1">Do not enter real card details.</p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className={`h-2 w-16 rounded-full ${step === "details" ? "bg-emerald" : "bg-emerald/30"}`} />
          <div className={`h-2 w-16 rounded-full ${step === "payment" ? "bg-emerald" : "bg-emerald/30"}`} />
          <div className={`h-2 w-16 rounded-full ${step === "confirm" ? "bg-emerald" : "bg-emerald/30"}`} />
        </div>

        {step === "details" && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white">Payment Details</h3>
              <p className="text-sm text-charcoal/70 dark:text-stone/70">Enter your unit and payment amount</p>
            </div>

            <Input
              label="Unit / Apartment Number"
              value={form.unit}
              onChange={(e) => updateField("unit", e.target.value)}
              error={errors.unit}
              placeholder="e.g., Unit 4B"
            />
            <Input
              label="Amount (AED)"
              type="number"
              value={form.amount}
              onChange={(e) => updateField("amount", e.target.value)}
              error={errors.amount}
              placeholder="5000"
            />

            <div className="rounded-xl bg-sand/50 dark:bg-navy-900/50 p-4 text-sm">
              <p className="font-medium text-navy-900 dark:text-white">Current Balance Due</p>
              <p className="text-2xl font-bold text-emerald mt-1">AED 5,000.00</p>
              <p className="text-xs text-charcoal/60 dark:text-stone/60 mt-1">Due by January 31, 2026</p>
            </div>
          </div>
        )}

        {step === "payment" && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white">Payment Method</h3>
              <p className="text-sm text-charcoal/70 dark:text-stone/70">Choose how you'd like to pay</p>
            </div>

            <Select
              label="Payment Method"
              value={form.paymentMethod}
              onChange={(e) => updateField("paymentMethod", e.target.value)}
              error={errors.paymentMethod}
            >
              <option value="">Select method</option>
              <option value="card">Credit / Debit Card</option>
              <option value="bank">Bank Transfer</option>
            </Select>

            {form.paymentMethod === "card" && (
              // Card fields are intentionally disabled: this is a demo with no
              // payment processor, so real card details must never be typed here.
              <div className="space-y-4 pt-2">
                <Input
                  label="Card Number"
                  disabled
                  autoComplete="off"
                  className="cursor-not-allowed opacity-60"
                  placeholder="Disabled in this demo"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    disabled
                    autoComplete="off"
                    className="cursor-not-allowed opacity-60"
                    placeholder="Disabled"
                  />
                  <Input
                    label="CVV"
                    disabled
                    autoComplete="off"
                    className="cursor-not-allowed opacity-60"
                    placeholder="Disabled"
                  />
                </div>
                <Input
                  label="Cardholder Name"
                  disabled
                  autoComplete="off"
                  className="cursor-not-allowed opacity-60"
                  placeholder="Disabled in this demo"
                />
              </div>
            )}

            {form.paymentMethod === "bank" && (
              <div className="rounded-xl bg-sand/50 dark:bg-navy-900/50 p-4 text-sm space-y-2">
                <p className="font-medium text-navy-900 dark:text-white">Bank Transfer Details</p>
                <div className="text-charcoal/70 dark:text-stone/70 space-y-1">
                  <p><span className="font-medium">Bank:</span> Example Bank (demo)</p>
                  <p><span className="font-medium">Account:</span> Lando Property Management</p>
                  <p><span className="font-medium">IBAN:</span> AE00 0000 0000 0000 0000 000</p>
                  <p><span className="font-medium">Reference:</span> {form.unit || "Your Unit Number"}</p>
                </div>
                <p className="text-xs text-charcoal/60 dark:text-stone/60">
                  Example details for this demo. Do not transfer money.
                </p>
              </div>
            )}
          </div>
        )}

        {step === "confirm" && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white">Confirm Payment</h3>
              <p className="text-sm text-charcoal/70 dark:text-stone/70">Review your payment details</p>
            </div>

            <div className="rounded-xl border border-stone/60 dark:border-navy-700 p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-charcoal/70 dark:text-stone/70">Unit</span>
                <span className="font-medium text-navy-900 dark:text-white">{form.unit}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-charcoal/70 dark:text-stone/70">Amount</span>
                <span className="font-bold text-emerald">AED {Number(form.amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-charcoal/70 dark:text-stone/70">Payment Method</span>
                <span className="font-medium text-navy-900 dark:text-white">
                  {form.paymentMethod === "card" ? "Card (demo)" : "Bank Transfer"}
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-sand/50 dark:bg-navy-900/50 p-3 text-sm text-charcoal/70 dark:text-stone/70">
              <p className="font-medium text-navy-900 dark:text-white">Nothing will be charged</p>
              <p className="text-xs mt-1">This is a demo. Confirming only shows a message; no payment is sent anywhere.</p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
          {step !== "details" ? (
            <Button type="button" variant="secondary" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <Button type="button" variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          )}

          {step === "confirm" ? (
            <Button type="button" onClick={handleSubmit}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Confirm Payment
            </Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              Continue
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default PayRentModal;

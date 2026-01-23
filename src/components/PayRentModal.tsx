import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Select from "./Select";
import { Button } from "./Button";
import Badge from "./Badge";
import { useToast } from "../hooks/useToast";

type PayRentModalProps = {
  open: boolean;
  onClose: () => void;
};

const PayRentModal = ({ open, onClose }: PayRentModalProps) => {
  const { notify } = useToast();
  const [step, setStep] = useState<"details" | "payment" | "confirm">("details");
  const [form, setForm] = useState({
    unit: "",
    amount: "",
    paymentMethod: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: ""
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
    if (form.paymentMethod === "card") {
      if (!form.cardNumber.trim() || form.cardNumber.length < 16) {
        nextErrors.cardNumber = "Enter a valid card number.";
      }
      if (!form.expiry.trim()) nextErrors.expiry = "Enter expiry date.";
      if (!form.cvv.trim() || form.cvv.length < 3) nextErrors.cvv = "Enter CVV.";
      if (!form.name.trim()) nextErrors.name = "Enter cardholder name.";
    }
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
    notify(`Payment of AED ${form.amount} submitted successfully!`);
    setForm({
      unit: "",
      amount: "",
      paymentMethod: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      name: ""
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
    <Modal open={open} onClose={handleClose} title="Pay Rent" size="md">
      <div className="space-y-6">
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
              <div className="space-y-4 pt-2">
                <Input
                  label="Card Number"
                  value={form.cardNumber}
                  onChange={(e) => updateField("cardNumber", e.target.value.replace(/\D/g, "").slice(0, 16))}
                  error={errors.cardNumber}
                  placeholder="1234 5678 9012 3456"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    value={form.expiry}
                    onChange={(e) => updateField("expiry", e.target.value)}
                    error={errors.expiry}
                    placeholder="MM/YY"
                  />
                  <Input
                    label="CVV"
                    type="password"
                    value={form.cvv}
                    onChange={(e) => updateField("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                    error={errors.cvv}
                    placeholder="123"
                  />
                </div>
                <Input
                  label="Cardholder Name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  error={errors.name}
                  placeholder="Name on card"
                />
              </div>
            )}

            {form.paymentMethod === "bank" && (
              <div className="rounded-xl bg-sand/50 dark:bg-navy-900/50 p-4 text-sm space-y-2">
                <p className="font-medium text-navy-900 dark:text-white">Bank Transfer Details</p>
                <div className="text-charcoal/70 dark:text-stone/70 space-y-1">
                  <p><span className="font-medium">Bank:</span> Emirates NBD</p>
                  <p><span className="font-medium">Account:</span> Lando Property Management</p>
                  <p><span className="font-medium">IBAN:</span> AE12 3456 7890 1234 5678 901</p>
                  <p><span className="font-medium">Reference:</span> {form.unit || "Your Unit Number"}</p>
                </div>
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
                  {form.paymentMethod === "card" ? `Card ending ${form.cardNumber.slice(-4)}` : "Bank Transfer"}
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-emerald/10 dark:bg-emerald/20 p-3 text-sm text-emerald">
              <p className="font-medium">Secure Payment</p>
              <p className="text-emerald/80 text-xs mt-1">Your payment information is encrypted and secure.</p>
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

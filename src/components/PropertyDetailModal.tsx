import { useState } from "react";
import Modal from "./Modal";
import Badge from "./Badge";
import { Button } from "./Button";
import ScheduleTourModal from "./ScheduleTourModal";
import type { Property } from "../data/properties";

const statusVariant = (status: Property["status"]) => {
  if (status === "Available") return "emerald";
  if (status === "Coming Soon") return "gold";
  return "neutral";
};

type PropertyDetailModalProps = {
  property: Property | null;
  open: boolean;
  onClose: () => void;
};

const PropertyDetailModal = ({ property, open, onClose }: PropertyDetailModalProps) => {
  const [showTourModal, setShowTourModal] = useState(false);

  if (!property) return null;
  return (
    <>
      <Modal open={open && !showTourModal} onClose={onClose} title={property.name}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <img
            src={property.image}
            alt={property.name}
            className="h-64 w-full rounded-2xl object-cover"
          />
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={statusVariant(property.status)}>{property.status}</Badge>
              <Badge variant="neutral">{property.neighborhood}</Badge>
              <Badge variant="neutral">{property.sqft} sqft</Badge>
            </div>
            <p className="text-sm text-charcoal/70 dark:text-stone/70">{property.address}</p>
            <p className="text-base text-charcoal/80 dark:text-stone/80">{property.description}</p>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-xl border border-stone/60 dark:border-navy-700 px-3 py-2">
                <p className="font-semibold text-navy-900 dark:text-white">{property.beds}</p>
                <p className="text-xs text-charcoal/60 dark:text-stone/60">Beds</p>
              </div>
              <div className="rounded-xl border border-stone/60 dark:border-navy-700 px-3 py-2">
                <p className="font-semibold text-navy-900 dark:text-white">{property.baths}</p>
                <p className="text-xs text-charcoal/60 dark:text-stone/60">Baths</p>
              </div>
              <div className="rounded-xl border border-stone/60 dark:border-navy-700 px-3 py-2">
                <p className="font-semibold text-navy-900 dark:text-white">${property.price.toLocaleString()}</p>
                <p className="text-xs text-charcoal/60 dark:text-stone/60">Monthly</p>
              </div>
            </div>
            <div className="rounded-2xl bg-sand dark:bg-navy-900 px-4 py-3 text-sm text-charcoal/70 dark:text-stone/70">
              Availability: <span className="font-semibold text-navy-900 dark:text-white">{property.availability}</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="button" onClick={onClose} variant="secondary">
                Close
              </Button>
              <Button type="button" onClick={() => setShowTourModal(true)}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <ScheduleTourModal
        property={property}
        open={showTourModal}
        onClose={() => setShowTourModal(false)}
      />
    </>
  );
};

export default PropertyDetailModal;

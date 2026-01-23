import Badge from "./Badge";
import Card from "./Card";
import { Button, ButtonLink } from "./Button";
import type { Property } from "../data/properties";

const statusVariant = (status: Property["status"]) => {
  if (status === "Available") return "emerald";
  if (status === "Coming Soon") return "gold";
  return "neutral";
};

type PropertyCardProps = {
  property: Property;
  onSelect?: (property: Property) => void;
};

const PropertyCard = ({ property, onSelect }: PropertyCardProps) => (
  <Card className="group overflow-hidden" withHover>
    <div className="relative overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Status badge */}
      <div className="absolute left-4 top-4 z-10">
        <Badge variant={statusVariant(property.status)}>{property.status}</Badge>
      </div>

      {/* Hover info card */}
      <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 dark:bg-navy-800/95 backdrop-blur-sm p-3 text-xs text-charcoal/80 dark:text-stone/80 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-medium">{property.neighborhood}</span>
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-charcoal/60 dark:text-stone/60">
          <span>{property.availability}</span>
          <span>{property.beds} bd • {property.baths} ba</span>
        </div>
      </div>
    </div>
    <div className="p-5 space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-navy-900 dark:text-white group-hover:text-emerald transition-colors">
          {property.name}
        </h3>
        <p className="text-sm text-charcoal/70 dark:text-stone/70 mt-1">{property.address}</p>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-stone/30 dark:border-navy-700">
        <div>
          <p className="text-xl font-bold text-navy-900 dark:text-white">
            ${property.price.toLocaleString()}
          </p>
          <p className="text-xs text-charcoal/60 dark:text-stone/60">per month</p>
        </div>
        {onSelect ? (
          <Button
            type="button"
            size="sm"
            onClick={() => onSelect(property)}
          >
            View Details
          </Button>
        ) : (
          <ButtonLink to="/properties" size="sm">
            View Details
          </ButtonLink>
        )}
      </div>
    </div>
  </Card>
);

export default PropertyCard;

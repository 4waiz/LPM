import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Select from "../components/Select";
import PropertyCard from "../components/PropertyCard";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { properties, Property } from "../data/properties";

const PropertyDetailModal = lazy(
  () => import("../components/PropertyDetailModal")
);

const priceOptions = [
  { label: "Any", value: "any" },
  { label: "Under $2,500", value: "under-2500" },
  { label: "$2,500 - $3,500", value: "2500-3500" },
  { label: "$3,500 - $4,500", value: "3500-4500" },
  { label: "$4,500+", value: "4500-plus" }
];

const Properties = () => {
  useEffect(() => {
    document.title = "Properties | Lando Property Management";
  }, []);

  const [beds, setBeds] = useState("any");
  const [baths, setBaths] = useState("any");
  const [price, setPrice] = useState("any");
  const [selected, setSelected] = useState<Property | null>(null);

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const matchesBeds =
        beds === "any" || property.beds >= Number.parseInt(beds, 10);
      const matchesBaths =
        baths === "any" || property.baths >= Number.parseFloat(baths);
      let matchesPrice = true;
      if (price === "under-2500") matchesPrice = property.price < 2500;
      if (price === "2500-3500") matchesPrice = property.price >= 2500 && property.price <= 3500;
      if (price === "3500-4500") matchesPrice = property.price >= 3500 && property.price <= 4500;
      if (price === "4500-plus") matchesPrice = property.price >= 4500;
      return matchesBeds && matchesBaths && matchesPrice;
    });
  }, [beds, baths, price]);

  return (
    <div className="bg-white dark:bg-navy-900 transition-colors duration-300">
      <section className="section-pad">
        <div className="container-pad mx-auto space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Properties"
              title="Curated rentals with refined finishes"
              subtitle="Explore our available listings and request a private tour."
            />
            <Badge variant="emerald">{filtered.length} listings</Badge>
          </div>

          <Card className="p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Select
                label="Bedrooms"
                value={beds}
                onChange={(event) => setBeds(event.target.value)}
              >
                <option value="any">Any</option>
                <option value="1">1+ beds</option>
                <option value="2">2+ beds</option>
                <option value="3">3+ beds</option>
                <option value="4">4+ beds</option>
              </Select>
              <Select
                label="Bathrooms"
                value={baths}
                onChange={(event) => setBaths(event.target.value)}
              >
                <option value="any">Any</option>
                <option value="1">1+ baths</option>
                <option value="1.5">1.5+ baths</option>
                <option value="2">2+ baths</option>
                <option value="2.5">2.5+ baths</option>
              </Select>
              <Select
                label="Monthly Rent"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              >
                {priceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          </Card>

          <div className="grid gap-6 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={(prop) => setSelected(prop)}
              />
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <PropertyDetailModal
          property={selected}
          open={!!selected}
          onClose={() => setSelected(null)}
        />
      </Suspense>
    </div>
  );
};

export default Properties;

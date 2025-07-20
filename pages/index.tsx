import Pill from "@/components/Pill";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Pet Friendly",
  "Mountain View",
];

...

{/* Filter Section */}
<section className="my-6">
  <h2 className="text-xl font-semibold mb-3">Filters</h2>
  <div className="flex flex-wrap">
    {filters.map((filter) => (
      <Pill key={filter} label={filter} />
    ))}
  </div>
</section>

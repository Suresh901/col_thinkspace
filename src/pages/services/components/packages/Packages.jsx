import PackageCard from "./PackageCard";

const pricingPlans = [
  {
    name: "Basic",
    subtitle: "(For Starter)",
    price: "Rs. 25,000/month",
    bgColor: "bg-blue-600",
    features: [
      "Basic feature 1",
      "Basic feature 2",
      "Basic feature 3",
      "Basic feature 4",
      "Basic feature 5",
    ],
  },
  {
    name: "Premium",
    subtitle: "(For Professionals)",
    price: "Rs. 50,000/month",
    bgColor: "bg-green-600",
    features: [
      "Advanced feature 1",
      "Advanced feature 2",
      "Advanced feature 3",
      "Advanced feature 4",
      "Advanced feature 5",
    ],
  },
  {
    name: "Platinum",
    subtitle: "(For Enterprises)",
    price: "Rs. 100,000/month",
    bgColor: "bg-purple-600",
    features: [
      "Enterprise feature 1",
      "Enterprise feature 2",
      "Enterprise feature 3",
      "Enterprise feature 4",
      "Enterprise feature 5",
    ],
  },
];

const Packages = () => {
  return (
    <div className="sm:px-12 mb-20 flex flex-col gap-5">
      <h1 className="font-bold text-2xl text-center my-5">Our Packages</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {pricingPlans.map((data, index) => (
          <PackageCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Packages;

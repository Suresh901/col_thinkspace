import PackageCard from "./PackageCard";

const pricingPlans = [
  {
    name: "Basic",
    subtitle: "(For Starter)",
    price: "Rs. 25,000/month",
    bgColor: "",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpTlKDFPJQSEaopoJXgkN9piy8WWsmKH7eYNGrBJH6qTubVX53HCpzrQqYsYXssIrKxo&usqp=CAU",
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
    bgColor: "",
    backgroundImage:
      "https://images.unsplash.com/photo-1611325058420-0b771ea180c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxqRXBDcGhCWmcwMHx8ZW58MHx8fHx8",
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
    bgColor: "",
    backgroundImage:
      "https://images.unsplash.com/photo-1557683304-673a23048d34?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
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
    <div className="sm:px-12 py-5 flex flex-col gap-5 max-w-6xl mx-auto my-10">
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

const offers = [
  {
    id: 1,
    title: "Social Media Management",
    description:
      "We create, schedule, and manage posts across major social media platforms to enhance your online presence.",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_21106.jY-vNB8F.png",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Improve your website's search engine ranking with our tailored SEO strategies and keyword research.",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_21106.jY-vNB8F.png",
  },
  {
    id: 3,
    title: "Content Creation",
    description:
      "Engaging blog posts, articles, and marketing copies to drive customer engagement and lead generation.",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_21106.jY-vNB8F.png",
  },
  {
    id: 4,
    title: "Paid Ad Campaigns",
    description:
      "Run targeted ad campaigns on Google and social media to maximize ROI and increase conversions.",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_21106.jY-vNB8F.png",
  },
];

const Offer = () => {
  return (
    <div className="py-20 flex flex-col xl:flex-row gap-10">
      <div className="xl:w-1/2 flex flex-col gap-5">
        <h1 className="font-bold text-3xl"> What can we offer?</h1>
        <p className="text-xl leading-relaxed">
          Based on our discussion, we propose a cost-effective Basic Digital
          Marketing Package that ensures value delivery while staying aligned
          with your budget and business goals. Here's what the package includes:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {offers.map((item) => {
          return (
            <div className=" flex items-center justify-center gap-10 border bg-white p-5 rounded-xl">
              <div>
                <img src={item.image} alt="img" className="w-14 h-10" />
              </div>
              <div className=" ">
                <h1 className="font-bold">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;

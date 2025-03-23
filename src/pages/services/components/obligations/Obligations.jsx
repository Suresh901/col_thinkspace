const obilgations = [
  {
    id: 1,
    list: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 2,
    list: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 3,
    list: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 4,
    list: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 5,
    list: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 6,
    list: "Lorem ipsum dolor sit amet consectetur",
  },
];

const Obligations = () => {
  return (
    <div className="flex flex-col gap-5 pt-28 pb-10">
      <h1 className="font-bold text-xl md:text-3xl ">Obligations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {obilgations.map((item) => {
          return <li className="text-lg md:text-xl">{item.list}</li>;
        })}
      </div>
    </div>
  );
};

export default Obligations;

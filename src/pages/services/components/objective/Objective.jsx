const objectives = [
  {
    list: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    list: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    list: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    list: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    list: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    list: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    list: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
];

const Objective = ({ filteredService }) => {
  return (
    <div className="mb-20 py-20 flex flex-col lg:flex-row gap-10 ">
      <div className="flex items-center justify-center lg:w-1/2 ">
        <img
          src="https://img.freepik.com/premium-vector/goal-achievement-concept_136162-34.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5 lg:w-1/2 md:px-4 justify-center">
        <h1 className="font-bold text-3xl">
          Objectives of {filteredService[0].heading}
        </h1>
        <div className="flex flex-col gap-2">
          {objectives.map((item) => {
            return <li className="text-lg md:text-xl md:px-5">{item.list}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Objective;

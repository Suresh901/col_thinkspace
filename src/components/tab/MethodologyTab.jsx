import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../tab/tab";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tab/tab";
import { LuTelescope } from "react-icons/lu";
import { ScrollArea } from "../../scrollarea/ScrollArea";
import image1 from "../../assets/image/item1.png";

const tasks = [
  {
    heading: "Drives Insight with Clarity",
    values: "drives",
    image: image1,

    description:
      "We value clear communication, enabling informed decisions that positively impact business outcomes.",
    title: "Clarity drives insight",
    logo: <LuTelescope size={32} />,
  },
  {
    heading: "Strategy Shapes success",
    values: "strategy",
    image:
      "https://colthinkspace.com/_app/immutable/assets/eftakher-alam-i1VQZsU86ok-unsplash.ogUhCrZ1.jpg",
    description:
      "We design the framework, carefully select the optimal tools, and establish a clear, actionable roadmap to guide your project from concept to completion.",
    title: "Strategy Shaped toward success",
    logo: <LuTelescope size={32} />,
  },
  {
    heading: "Creativity meets purpose",
    values: "creative",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    description:
      "We value clear communication, enabling informed decisions that positively impact business outcomes.",
    title: "Clarity drives insight",
    logo: <LuTelescope size={32} />,
  },
  {
    heading: "Build, Refine, deliver",
    values: "build",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_11031.CXcjGWwX.png",
    description:
      "We value clear communication, enabling informed decisions that positively impact business outcomes.",
    title: "Clarity drives insight",
    logo: <LuTelescope size={32} />,
  },
];

export function MethodologyTab() {
  return (
    <Tabs
      defaultValue="drives"
      className=" flex flex-col w-full gap-5 mb-10 xl:px-12"
    >
      <div className="px-12">
        <ScrollArea>
          <TabsList className=" w-auto flex gap-5">
            {tasks.map((task, index) => (
              <TabsTrigger
                key={index}
                value={task.values}
                className="text-sm text-gray-500 data-[state=active]:text-black data-[state=active]:bg-white p-2"
              >
                <div className="w-auto text-md md:text-lg flex flex-col items-center justify-center gap-5 ">
                  {/* {task.logo} */}
                  <h1>{task.heading}</h1>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>
      </div>

      {/* contents */}
      <div className="flex items-center justify-center px-6">
        {tasks.map((task, index) => (
          <TabsContent
            key={index}
            value={task.values}
            className="lg:w-full lg:px-0"
          >
            <Card className="flex flex-col lg:flex-row justify-center items-center">
              <CardContent>
                <div className="">
                  <img
                    src={task.image}
                    alt={task.heading}
                    className="sm:max-w-[500px] object-cover"
                  />
                  {/* <div> hello</div> */}
                </div>
              </CardContent>
              <CardHeader>
                <div className="flex flex-col gap-5 md:px-12 lg:px-0">
                  <CardTitle className=" font-bold text-lg md:text-xl ">
                    {task.heading}
                  </CardTitle>
                  <CardDescription className="text-md md:text-xl ">
                    {task.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
{
  /* for large device */
}
{
  /* <div className="hidden lg:flex lg:flex-col px-12 text-2xl ">
        <TabsList className="lg:flex lg:flex-col  justify-between items-center gap-8 md:mt-10 text-2xl ">
          {tasks.map((task, index) => (
            <TabsTrigger
              key={index}
              value={task.values}
              className="text-xl text-gray-500 data-[state=active]:text-black w-full"
            >
              <div className="flex w-full gap-5">
                <div>{task.logo}</div>
                <div>{task.heading}</div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div> */
}

//  <Tabs
//    defaultValue="drives"
//    className=" flex flex-col lg:flex-row w-full gap-10 mb-10"
//  >
//    {/* for small devices */}
//    <div className="block lg:hidden px-12">
//      <ScrollArea>
//        <TabsList className="h-20 w-auto flex gap-5">
//          {tasks.map((task, index) => (
//            <TabsTrigger
//              key={index}
//              value={task.values}
//              className="text-xl text-gray-500 data-[state=active]:text-black"
//            >
//              <div className="w-auto text-md md:text-lg flex flex-col items-center justify-center gap-5">
//                {task.logo}
//                <h1>{task.heading}</h1>
//              </div>
//            </TabsTrigger>
//          ))}
//        </TabsList>
//      </ScrollArea>
//    </div>

//    {/* for large device */}
//    <div className="hidden lg:flex lg:flex-col px-12 text-2xl ">
//      <TabsList className="lg:flex lg:flex-col  justify-between items-center gap-8 md:mt-10 text-2xl ">
//        {tasks.map((task, index) => (
//          <TabsTrigger
//            key={index}
//            value={task.values}
//            className="text-xl text-gray-500 data-[state=active]:text-black w-full"
//          >
//            <div className="flex w-full gap-5">
//              <div>{task.logo}</div>
//              <div>{task.heading}</div>
//            </div>
//          </TabsTrigger>
//        ))}
//      </TabsList>
//    </div>

//    {/* contents */}
//    {tasks.map((task, index) => (
//      <TabsContent
//        key={index}
//        value={task.values}
//        className="lg:w-2/3 px-12 lg:px-0"
//      >
//        <Card>
//          <CardHeader>
//            <div className="flex flex-col gap-5">
//              <CardTitle className="text-2xl ">{task.heading}</CardTitle>
//              <CardDescription className="text-xl">
//                {task.description}
//              </CardDescription>
//            </div>
//          </CardHeader>
//          <CardContent>
//            <img
//              src={task.image}
//              alt={task.heading}
//              className="sm:max-w-[300px] w-auto object-cover"
//            />
//          </CardContent>
//        </Card>
//      </TabsContent>
//    ))}
//  </Tabs>;

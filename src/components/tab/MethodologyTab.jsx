import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../tab/tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tab/tab";
import {
  LuTelescope,
  LuBrain,
  LuPaintbrush,
  LuHammer,
  LuRocket,
} from "react-icons/lu";
import { ScrollArea, ScrollBar } from "../../scrollarea/ScrollArea";
import image1 from "../../assets/image/item1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const tasks = [
  {
    heading: "Drives Insight with Clarity",
    values: "drives",
    image: image1,
    description:
      "We value clear communication, enabling informed decisions that positively impact business outcomes.",
    title: "Clarity drives insight",
    logo: <LuTelescope size={32} />,
    benefits: [
      "Data-driven decision making",
      "Clear stakeholder communication",
      "Transparent reporting methodology",
    ],
  },
  {
    heading: "Strategy Shapes Success",
    values: "strategy",
    image:
      "https://colthinkspace.com/_app/immutable/assets/eftakher-alam-i1VQZsU86ok-unsplash.ogUhCrZ1.jpg",
    description:
      "We design the framework, carefully select the optimal tools, and establish a clear, actionable roadmap to guide your project from concept to completion.",
    title: "Strategy Shaped toward success",
    logo: <LuBrain size={32} />,
    benefits: [
      "Comprehensive planning approach",
      "Custom toolset selection",
      "Milestone-based project mapping",
    ],
  },
  {
    heading: "Creativity Meets Purpose",
    values: "creative",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    description:
      "We transform abstract concepts into purposeful design, balancing aesthetic appeal with functional excellence to create solutions that resonate and perform.",
    title: "Creativity with intention",
    logo: <LuPaintbrush size={32} />,
    benefits: [
      "Innovative design thinking",
      "Purpose-driven creativity",
      "Audience-focused solutions",
    ],
  },
  {
    heading: "Build, Refine, Deliver",
    values: "build",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_11031.CXcjGWwX.png",
    description:
      "We craft solutions with precision, refine through rigorous testing, and deliver products that exceed expectations, focusing on quality at every development stage.",
    title: "Iterative development process",
    logo: <LuHammer size={32} />,
    benefits: [
      "Agile development methodology",
      "Continuous improvement cycles",
      "Quality assurance at every stage",
    ],
  },
  {
    heading: "Scale and Grow",
    values: "builds",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_11031.CXcjGWwX.png",
    description:
      "We ensure your solution can evolve with your business needs, implementing scalable architecture and ongoing optimization strategies for sustainable growth.",
    title: "Sustainable growth foundation",
    logo: <LuRocket size={32} />,
    benefits: [
      "Scalable architecture design",
      "Performance optimization",
      "User-centered development",
    ],
  },
];

export function MethodologyTab() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Tabs defaultValue="drives" className="flex flex-col w-full gap-5 mb-10 ">
      <div className="px-6" data-aos="fade-right" data-aos-duration="2000">
        <ScrollArea className="overflow-x-auto">
          <TabsList className="flex gap-5 whitespace-nowrap">
            {tasks.map((task, index) => (
              <TabsTrigger
                key={index}
                value={task.values}
                className="text-sm text-gray-500 data-[state=active]:text-black data-[state=active]:bg-white p-3 drop-shadow-md data-[state=active]:underline"
              >
                <div className="w-auto text-md md:text-lg flex flex-col items-center justify-center gap-5">
                  <h1>{task.heading}</h1>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center px-6">
        {tasks.map((task, index) => (
          <TabsContent
            key={index}
            value={task.values}
            className="lg:w-full lg:px-0 "
          >
            <Card className="flex flex-col lg:flex-row justify-center">
              <CardContent className="w-full lg:w-1/2 2xl:w-1/3 flex items-center justify-center">
                <div
                  className="w-[99%]] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center rounded-3xl border"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img
                    src={task.image}
                    alt={task.heading}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </CardContent>

              <CardHeader className="w-full lg:w-1/2">
                <div
                  className="flex flex-col gap-5 md:px-12 lg:px-0"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{task.logo}</div>
                    <CardTitle className="font-bold text-lg md:text-xl">
                      {task.heading}
                    </CardTitle>
                  </div>

                  <p className="text-md font-medium text-gray-500 ">
                    {task.title}
                  </p>

                  <CardDescription className="text-md md:text-lg">
                    {task.description}
                  </CardDescription>

                  <div className="mt-2">
                    <h4 className="text-lg font-semibold mb-2">
                      Key Benefits:
                    </h4>
                    <ul className="grid gap-2">
                      {task.benefits?.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-md mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}

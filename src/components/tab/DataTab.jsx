import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab";
import { ScrollArea, ScrollBar } from "../../scrollarea/ScrollArea";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function DataTab({ datas }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Tabs defaultValue="drives" className="flex flex-col w-full gap-5 mb-10 ">
      <div
        className="px-6 max-w-7xl mx-auto"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <ScrollArea className="overflow-x-auto">
          <TabsList className="flex gap-5 whitespace-nowrap">
            {datas.map((data, index) => (
              <TabsTrigger
                key={index}
                value={data.values}
                className="text-sm text-gray-500 data-[state=active]:text-black data-[state=active]:bg-white p-3 drop-shadow-md data-[state=active]:underline"
              >
                <div className="w-auto text-md md:text-lg flex flex-col items-center justify-center gap-5">
                  <h1>{data.heading}</h1>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center px-6">
        {datas.map((data, index) => (
          <TabsContent
            key={index}
            value={data.values}
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
                    src={data.image}
                    alt={data.heading}
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
                    <div className="text-primary">{data.logo}</div>
                    <CardTitle className="font-bold text-lg md:text-xl">
                      {data.heading}
                    </CardTitle>
                  </div>

                  <p className="text-md font-medium text-gray-500 ">
                    {data.title}
                  </p>

                  <CardDescription className="text-md md:text-lg">
                    {data.description}
                  </CardDescription>

                  <div className="mt-2">
                    <h4 className="text-lg font-semibold mb-2">
                      Key Benefits:
                    </h4>
                    <ul className="grid gap-2">
                      {data.benefits?.map((benefit, idx) => (
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

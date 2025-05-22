import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion/Accordion";
const faqAccordion = [
  {
    question: "What services does ThinkSpace offer?",
    answer:
      "ThinkSpace specializes in web development, mobile app development, UI/UX design, cloud solutions, and IT consulting to help businesses scale efficiently.",
    value: "item-1",
  },
  {
    question: "How can ThinkSpace help my business grow?",
    answer:
      "We provide cutting-edge technology solutions tailored to your business needs, optimizing operations, enhancing customer engagement, and driving digital transformation.",
    value: "item-2",
  },
  {
    question: "Do you offer custom software development?",
    answer:
      "Yes, we build custom software solutions that align with your business objectives, ensuring seamless integration and scalability.",
    value: "item-3",
  },
  {
    question: "What technologies does ThinkSpace use?",
    answer:
      "Our team specializes in modern technologies including React, Node.js, Python, AWS, and AI/ML solutions to build robust digital products.",
    value: "item-4",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can contact us through our website or email us with your project details. Our team will analyze your requirements and provide a tailored quote.",
    value: "item-5",
  },
  {
    question: "Does ThinkSpace provide post-development support?",
    answer:
      "Absolutely! We offer ongoing maintenance, support, and updates to ensure your software remains secure and up to date.",
    value: "item-6",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the project scope and requirements. We typically provide a detailed timeline after analyzing your needs during the initial consultation.",
    value: "item-7",
  },
  {
    question: "Can ThinkSpace redesign my existing website or app?",
    answer:
      "Yes, we offer redesign services to modernize your digital platforms, enhance user experience, and align with your current branding and business goals.",
    value: "item-8",
  },
  {
    question: "Do you work with startups as well as established businesses?",
    answer:
      "Absolutely! We partner with startups, SMEs, and large enterprises, tailoring our solutions to meet the unique challenges and goals of each business.",
    value: "item-9",
  },
  {
    question: "Is ThinkSpace open to long-term collaborations?",
    answer:
      "Yes, we value long-term partnerships and often work as dedicated technology partners to support continuous growth and innovation for our clients.",
    value: "item-10",
  },
];
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const QuestionAccordion = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="text-sm sm:text-md md:text-lg"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <Accordion type="single" collapsible className="w-full">
        {faqAccordion.map((item, index) => (
          <AccordionItem value={item.value}>
            <AccordionTrigger className="break-words break-all text-left w-full">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default QuestionAccordion;

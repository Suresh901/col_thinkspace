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
];

const QuestionAccordion = () => {
  return (
    <div className="text-sm sm:text-md md:text-lg">
      <Accordion type="single" collapsible className="w-full">
        {faqAccordion.map((item, index) => (
          <AccordionItem value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default QuestionAccordion;

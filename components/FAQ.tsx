"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a full refund within 30 days of purchase if you're not satisfied. We aim to make sure every customer is happy with their experience.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide 24/7 customer support through email and live chat to assist you with any issues or questions.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Absolutely! You can try our service free for 14 days with no credit card required.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-[90%] md:w-[90%] mx-auto pb-20 md:pb-30 bg-gray-900">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          Frequently Asked Questions
        </p>
        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          Can’t find the answer you’re looking for? Reach out to our support team.
        </p>
      </div>

      {/* FAQ items */}
      <div className="w-[100%] sm:w-[100%] lg:w-[60%] mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            {/* Question button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 md:p-6 text-left text-base md:text-lg font-medium text-white hover:bg-gray-700 transition-colors"
            >
              {faq.question}
              <span className="text-xl md:text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 md:max-h-60 p-4 md:p-6" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;


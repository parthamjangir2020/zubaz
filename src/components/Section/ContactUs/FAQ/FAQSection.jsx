/* eslint-disable react/no-unescaped-entities */
"use client";

import Accordion from "~/components/Ui/Accordion";

const accordionItems = [
  {
    question: "Q: What makes your SaaS solution stand out from competitors?",
    answer:
      "Our SaaS platform distinguishes itself through a combination of user-friendly design, robust feature set, and a commitment to constant innovation. We prioritize customer feedback to ensure we stay ahead of the curve and meet evolving business needs.",
  },
  {
    question: "Q: How secure is the data stored on your platform?",
    answer:
      "Security is our top priority. We employ state-of-the-art encryption, regular security audits, and compliance with industry standards to safeguard your data. Our commitment is to provide a secure environment for your valuable information.",
  },
  {
    question: "Q: Can your SaaS solution integrate with other tools we use?",
    answer:
      "Absolutely. We understand the importance of seamless integration. Our SaaS solution is designed to work harmoniously with a variety of popular tools and platforms, ensuring a smooth workflow and reducing any disruptions to your current processes.",
  },
  {
    question: "Q: What kind of customer support can we expect?",
    answer:
      "Our customer support team is dedicated to your success. You can expect prompt responses, helpful resources, and, if needed, personalized assistance. We believe in building long-lasting relationships with our users, and exceptional support.",
  },
  {
    question:
      "Q: How does your pricing model work, and is there flexibility as our business grows?",
    answer:
      "We offer a range of flexible pricing plans to accommodate businesses of all sizes. Whether you're a startup or an enterprise, our pricing scales with your needs. You can choose from monthly or annual billing.",
  },
];

const FAQSection = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Find all the answers to your confusion</h2>
        </div>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default FAQSection;

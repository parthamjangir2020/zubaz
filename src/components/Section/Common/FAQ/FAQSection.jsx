/* eslint-disable react/no-unescaped-entities */
"use client";

import Accordion from "react-bootstrap/Accordion";

const FAQSection = () => {
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Find all the answers to your confusion</h2>
        </div>
        <div className="zubuz-accordion-wrap zubuz-accordion-wrap2">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Q: What makes your SaaS solution stand out from competitors?
              </Accordion.Header>
              <Accordion.Body>
                Our SaaS platform distinguishes itself through a combination of
                user-friendly design, robust feature set, and a commitment to
                constant innovation. We prioritize customer feedback to ensure
                we stay ahead of the curve and meet evolving business needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Q: How secure is the data stored on your platform?
              </Accordion.Header>
              <Accordion.Body>
                Security is our top priority. We employ state-of-the-art
                encryption, regular security audits, and compliance with
                industry standards to safeguard your data. Our commitment is to
                provide a secure environment for your valuable information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Q: Can your SaaS solution integrate with other tools we use?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely. We understand the importance of seamless
                integration. Our SaaS solution is designed to work harmoniously
                with a variety of popular tools and platforms, ensuring a smooth
                workflow and reducing any disruptions to your current processes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Q: What kind of customer support can we expect?
              </Accordion.Header>
              <Accordion.Body>
                Our customer support team is dedicated to your success. You can
                expect prompt responses, helpful resources, and, if needed,
                personalized assistance. We believe in building long-lasting
                relationships with our users, and exceptional support.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Q: How does your pricing model work, and is there flexibility as
                our business grows?
              </Accordion.Header>
              <Accordion.Body>
                We offer a range of flexible pricing plans to accommodate
                businesses of all sizes. Whether you're a startup or an
                enterprise, our pricing scales with your needs. You can choose
                from monthly or annual billing.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

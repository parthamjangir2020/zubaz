/* eslint-disable react/no-unescaped-entities */

const FaqSection = () => {
  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Find all the answers to your confusion</h2>
        </div>
        <div
          className="zubuz-accordion-wrap zubuz-accordion-wrap2"
          id="zubuz-accordion"
        >
          <div className="zubuz-accordion-item open">
            <div className="zubuz-accordion-header">
              <p>
                Q: What makes your SaaS solution stand out from competitors?
              </p>
              <div className="zubuz-active-icon">
                <img src="/images/v3/plus.png" alt="" />
              </div>
              <div className="zubuz-inactive-icon">
                <img src="/images/v3/minus.png" alt="" />
              </div>
            </div>
            <div className="zubuz-accordion-body">
              <p>
                {" "}
                Our SaaS platform distinguishes itself through a combination of
                user-friendly design, robust feature set, and a commitment to
                constant innovation. We prioritize customer feedback to ensure
                we stay ahead of the curve and meet evolving business needs.
              </p>
            </div>
          </div>
          <div className="zubuz-accordion-item">
            <div className="zubuz-accordion-header">
              <p>Q: How secure is the data stored on your platform?</p>
              <div className="zubuz-active-icon">
                <img src="/images/v3/plus.png" alt="" />
              </div>
              <div className="zubuz-inactive-icon">
                <img src="/images/v3/minus.png" alt="" />
              </div>
            </div>
            <div className="zubuz-accordion-body">
              <p>
                Security is our top priority. We employ state-of-the-art
                encryption, regular security audits, and compliance with
                industry standards to safeguard your data. Our commitment is to
                provide a secure environment for your valuable information.
              </p>
            </div>
          </div>

          <div className="zubuz-accordion-item">
            <div className="zubuz-accordion-header">
              <p>
                Q: Can your SaaS solution integrate with other tools we use?
              </p>
              <div className="zubuz-active-icon">
                <img src="/images/v3/plus.png" alt="" />
              </div>
              <div className="zubuz-inactive-icon">
                <img src="/images/v3/minus.png" alt="" />
              </div>
            </div>
            <div className="zubuz-accordion-body">
              <p>
                Absolutely. We understand the importance of seamless
                integration. Our SaaS solution is designed to work harmoniously
                with a variety of popular tools and platforms, ensuring a smooth
                workflow and reducing any disruptions to your current processes.
              </p>
            </div>
          </div>

          <div className="zubuz-accordion-item">
            <div className="zubuz-accordion-header">
              <p>Q: What kind of customer support can we expect?</p>
              <div className="zubuz-active-icon">
                <img src="/images/v3/plus.png" alt="" />
              </div>
              <div className="zubuz-inactive-icon">
                <img src="/images/v3/minus.png" alt="" />
              </div>
            </div>
            <div className="zubuz-accordion-body">
              <p>
                Our customer support team is dedicated to your success. You can
                expect prompt responses, helpful resources, and, if needed,
                personalized assistance. We believe in building long-lasting
                relationships with our users, and exceptional support.
              </p>
            </div>
          </div>

          <div className="zubuz-accordion-item">
            <div className="zubuz-accordion-header">
              <p>
                Q: How does your pricing model work, and is there flexibility as
                our business grows?
              </p>
              <div className="zubuz-active-icon plus">
                <img src="/images/v3/plus.png" alt="" />
              </div>
              <div className="zubuz-inactive-icon">
                <img src="/images/v3/minus.png" alt="" />
              </div>
            </div>
            <div className="zubuz-accordion-body">
              <p>
                We offer a range of flexible pricing plans to accommodate
                businesses of all sizes. Whether you're a startup or an
                enterprise, our pricing scales with your needs. You can choose
                from monthly or annual billing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

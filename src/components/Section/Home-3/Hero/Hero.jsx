/* eslint-disable react/no-unescaped-entities */

const HeroSection = () => {
  return (
    <div className="zubuz-hero-section">
      <div className="container">
        <div className="zubuz-hero-content center">
          <h1>
            Launch your startup's success with SaaS
            <span className="zubuz-title-shape">
              <img src="/images/v3/shape-v3-01.png" alt="" />
            </span>
          </h1>
          <p>
            Our SaaS for startup businesses offers a cost-effective, scalable
            and user-friendly approach to access and use the software tools they
            need and provides powerful technology solutions.
          </p>
          <div className="zubuz-extara-mt">
            <div className="zubuz-subscribe-three">
              <form action="#">
                <input type="email" placeholder="Enter your e-mail address" />
                <button
                  className="zubuz-default-btn zubuz-subscription-btn three"
                  id="zubuz-subscription-btn"
                  type="submit"
                >
                  <span>Get started</span>
                </button>
                <div className="zubuz-input-email">
                  <img src="/images/icon/email2.svg" alt="" />
                </div>
              </form>
            </div>
            <div className="zubuz-icon-list">
              <ul>
                <li>
                  <img src="/images/v3/check.png" alt="" /> No credit card
                  required
                </li>
                <li>
                  <img src="/images/v3/check.png" alt="" /> 7-day free trial
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="zubuz-border-btoom">
          <div className="zubuz-hero-thumb3">
            <img src="/images/v3/thumb-v3-01.png" alt="" />
            <div className="zubuz-hero-thumb-card1">
              <img src="/images/v3/card-v3-1.png" alt="" />
            </div>
            <div className="zubuz-hero-thumb-card2">
              <img src="/images/v3/card-v3-2.png" alt="" />
            </div>
            <div className="zubuz-hero-thumb-card3">
              <img src="/images/v3/card-v3-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

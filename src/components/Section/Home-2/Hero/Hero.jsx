import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="zubuz-hero-section2">
      <div className="container">
        <div className="row zubuz_screenfix_right">
          <div className="col-lg-6">
            <div className="zubuz-hero-content">
              <div className="zubuz-hero-rating">
                <ul>
                  <li>
                    <img src="/images/v2/rating.png" alt="" />
                  </li>
                  <li>4.8/5 on TrustPilot reviews</li>
                </ul>
              </div>
              <h1>Empower your business to the next level</h1>
              <p>
                Our user-friendly and feature-rich CRM tool enables your
                organization to increase your sales, manage clients, and close
                deals more efficiently.
              </p>
              <div className="zubuz-hero-btn-wrap">
                <Link href="/sign-up" className="zubuz-default-btn pill">
                  <span>Sign up for free</span>
                </Link>
                <Link href="/service" className="zubuz-login-btn m-0">
                  View all features
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="zubuz-hero-thumb2">
              <img src="/images/v2/dashboard.png" alt="" />
              <div className="zubuz-hero-shape2">
                <img src="/images/v2/shape1-v2.png" alt="" />
              </div>
              <div className="zubuz-hero-shape3">
                <img src="/images/v2/shape2-v2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

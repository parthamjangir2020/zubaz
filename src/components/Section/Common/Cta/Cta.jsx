import Link from "next/link";

const Cta = () => {
  return (
    <div className="zubuz-cta-section blue-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-2 d-flex align-items-center">
            <div className="zubuz-default-content light">
              <h2>Start managing your money now!</h2>
              <p>
                Your financial future is just a download away. Get our app and
                experience the benefits of better money management.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-app-wrap">
                  <Link className="zubuz-app" href="contact-us">
                    <img src="/images/v1/play-store.png" alt="" />
                  </Link>
                  <Link className="zubuz-app" href="contact-us">
                    <img src="/images/v1/app-store.png" alt="" />
                  </Link>
                  <div className="zubuz-cta-shape">
                    <img src="/images/v1/shape2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="zubuz-cta-thumb">
              <img src="/images/v1/cta-mocup.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

/* eslint-disable react/no-unescaped-entities */
const ContentSection = () => {
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-v3-thumb">
              <img src="/images/v3/thumb-v3-2.png" alt="" />
              <div className="zubuz-v3-card">
                <img src="/images/v3/card-v3-4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="zubuz-default-content m-left">
              <h2>Our core values drive our work</h2>
              <p>
                We're dedicated to simplifying complex processes, fostering
                collaboration, and propelling your success.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <img src="/images/about/icon1.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Innovation & Collaboration:</span>
                    <p>
                      We embrace creativity and continuous improvement,
                      fostering a culture of innovation. We believe in the power
                      of teamwork.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <img src="images/about/icon2.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Integrity & Customer-Centricity:</span>
                    <p>
                      We are committed to delivering exceptional value. We
                      uphold the highest standards of honesty and ethics in
                      everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

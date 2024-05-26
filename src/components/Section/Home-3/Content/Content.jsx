const ContentSection = () => {
  return (
    <div className="section zubuz-section-padding5">
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
              <h2>Agility to adapt to market needs</h2>
              <p>
                Startups often need to bring their products or services to
                market quickly. Our SaaS applications are readily available and
                reducing development and deployment time.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <img src="/images/v3/icon11.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Fast implementation:</span>
                    <p>
                      Our SaaS solutions can be implemented quickly, often
                      within a few clicks, reducing setup time and allowing
                      startups immediately.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-icon none-bg">
                    <img src="/images/v3/icon10.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data data-small">
                    <span>Accelerated time-to-market:</span>
                    <p>
                      SaaS tools startups can accelerate their product or
                      service launch and stay ahead of the competition and reach
                      customers faster.
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

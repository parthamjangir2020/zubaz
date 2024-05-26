const ContentSectionTwo = () => {
  return (
    <div className="section zubuz-section-padding5 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="zubuz-thumb thumb-pl">
              <img src="/images/v1/mocup2.png" alt="" />
              <div className="zubuz-thumb-card2">
                <img src="/images/v1/card2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content">
              <h2>Bank account & credit card linked</h2>
              <p>
                Easily link their bank accounts & credit cards to view account
                balances, monitor transactions and receive alerts for unusual
                activity.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon">
                    <img src="/images/v1/icon1.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Saving & Goal Setting</span>
                    <p>
                      Easily set money aside and build your savings for the
                      future plan and track your financial goals.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-icon">
                    <img src="/images/v1/icon2.png" alt="" />
                  </div>
                  <div className="zubuz-iconbox-data">
                    <span>Credit Score Monitoring</span>
                    <p>
                      Our finance app provides credit score monitoring to help
                      users monitor their credit health.
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

export default ContentSectionTwo;

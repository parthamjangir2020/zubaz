const ContentSection = () => {
  return (
    <div className="section zubuz-section-padding2 dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-career-thumb">
              <img src="/images/v3/thumb-v3-3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="zubuz-default-content m-left light">
              <h2>Our simple hiring process</h2>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-number">1</div>
                  <div className="zubuz-iconbox-data light">
                    <span>Application submission</span>
                    <p>
                      Submit your detailed application to be considered for the
                      right position you want to join.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-number">2</div>
                  <div className="zubuz-iconbox-data light">
                    <span>Initial screening & assessment</span>
                    <p>
                      Our team reviews applications and conducts all the
                      assessments to evaluate qualifications.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left">
                  <div className="zubuz-iconbox-number">3</div>
                  <div className="zubuz-iconbox-data light">
                    <span>Final selection & offer</span>
                    <p>
                      The most qualified candidate is selected & receives an
                      offer to join our team directly.
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

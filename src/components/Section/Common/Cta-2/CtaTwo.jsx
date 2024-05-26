const CtaTwo = () => {
  return (
    <div className="zubuz-cta-section2">
      <div className="container">
        <div
          className="zubuz-cta-wrap"
          style={{ backgroundImage: "url(/images/v2/cta-bg.png)" }}
        >
          <div className="zubuz-cta-content">
            <h2>Start managing your money now!</h2>
            <div className="zubuz-subscribe-two">
              <form action="#">
                <input type="email" placeholder="Enter your e-mail address" />
                <button
                  className="zubuz-default-btn zubuz-subscription-btn two"
                  id="zubuz-subscription-btn"
                  type="submit"
                >
                  <span>Get started</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwo;

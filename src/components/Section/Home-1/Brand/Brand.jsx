import Marquee from "react-fast-marquee";

const BrandSection = () => {
  return (
    <div className="section dark-bg zubuz-section-padding4">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-brand-logo-content">
              <h3>
                Over 50,000 people rely on our app for their money choices
              </h3>
            </div>
          </div>
          <div className="col-lg-7">
            <Marquee speed="30" className="zubuz-brand-slider">
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_1.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_2.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_3.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_4.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_5.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_6.png" alt="" />
              </div>
            </Marquee>
            <Marquee
              speed="30"
              direction="right"
              className="zubuz-brand-slider"
              style={{marginTop:"25px"}}
            >
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_1.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_2.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_3.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_4.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_5.png" alt="" />
              </div>
              <div className="zubuz-brand-item">
                <img src="/images/v1/b_6.png" alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;

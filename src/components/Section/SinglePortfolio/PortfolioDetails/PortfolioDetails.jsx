/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

const PortfolioDetailsSection = () => {
  return (
    <div className="section zubuz-section-padding">
      <div className="container">
        <div className="zubuz-section-title zubuz-two-column-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>An e-commerce system for all</h2>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <p>
                E-commerce is a method of buying & selling goods and services
                online. It can use e-commerce channel such as your own website,
                an established selling.
              </p>
            </div>
          </div>
        </div>
        <div className="zubuz-portfolio-details-thumb">
          <img src="/images/portfolio/p_1.png" alt="" />
        </div>
        <div className="zubuz-portfolio-info">
          <div className="zubuz-portfolio-info-item">
            <p>Client</p>
            <h3>XYZ Company</h3>
          </div>
          <div className="zubuz-portfolio-info-item">
            <p>Services:</p>
            <h3>Web Design</h3>
          </div>
          <div className="zubuz-portfolio-info-item">
            <p>Duration:</p>
            <h3>2 Weeks</h3>
          </div>
          <div className="zubuz-portfolio-info-item">
            <p>Website</p>
            <Link href="">
              <h3>
                Live preview <img src="/images/icon/arrow-right.svg" alt="" />
              </h3>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="zubuz-portfolio-details-content-wrap">
              <div className="zubuz-portfolio-details-content">
                <h2>Project overview:</h2>
                <p>
                  Web design platforms can be subscription-based or
                  non-subscription-based. Furthermore, different platforms have
                  different features aimed at specific parts of the market. For
                  example: Platforms such as Magento and Shopify are geared
                  towards ecommerce websites.
                </p>
              </div>
              <div className="zubuz-portfolio-details-content">
                <h2>Project execution:</h2>
                <p>
                  Let's choose the average value and look at the following seven
                  steps of web development: Information Gathering, Planning,
                  Design, Content Writing and Assembly, Coding, Testing, Review
                  and Launch, as well as Maintenance.
                </p>
                <h4>The 6 Steps of the Website Design Process:</h4>
                <ul>
                  <li>
                    Step 1: Discovery Phase. It's impossible to complete a
                    successful website design process without first knowing what
                    the goals of the project are
                  </li>
                  <li>Step 2: Planning</li>
                  <li>Step 3: Design</li>
                  <li>Step 4: Development</li>
                  <li>Step 5: Launching the Website</li>
                </ul>
              </div>
              <div className="zubuz-portfolio-details-content">
                <h2>Project results:</h2>
                <p>
                  A design is a plan or specification for the construction of an
                  object or system or for the implementation of an activity or
                  process or the result of that plan or specification in the
                  form of a prototype, product, or process. The verb to design
                  expresses the process of developing a design.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="zubuz-portfolio-details-thumb-wrap">
              <div className="zubuz-portfolio-details-thumb-item">
                <img src="/images/portfolio/p-details1.png" alt="" />
              </div>
              <div className="zubuz-portfolio-details-thumb-item">
                <img src="/images/portfolio/p-details2.png" alt="" />
              </div>
              <div className="zubuz-portfolio-details-thumb-item">
                <img src="/images/portfolio/p-details3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsSection;

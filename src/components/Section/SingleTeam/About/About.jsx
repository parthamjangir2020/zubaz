/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-team-details-thumb">
              <img src="/images/team/team-details.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content m-left-85">
              <h2>CEO & founder of the company</h2>
              <p>
                Mr. Abraham Maslow is the CEO of our design agency. He plays a
                key role in overseeing the agency's operations, growth and
                strategic direction with best ideas.
              </p>
              <p>
                As the leader of the organization, he also sets the company's
                vision, mission, & values. He spent 15 years providing strategic
                direction and ensuring the organization's goals and objectives.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-social-icon social-box">
                  <ul>
                    <li>
                      <Link href="" target="_blank">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank">
                        <FaLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const FooterSectionThree = () => {
  return (
    <footer className="zubuz-footer-section dark-bg">
      <div className="container">
        <div className="zubuz-footer-extra-top">
          <div className="row">
            <div className="col-lg-7">
              <div className="zubuz-footer-extra-title">
                <h2>Take your startup to the next level</h2>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="zubuz-footer-btn">
                <Link className="zubuz-default-btn pill" href="contact-us">
                  <span>Get started now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="zubuz-footer-top">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="zubuz-footer-textarea light">
                <Link href="/">
                  <img src="/images/logo/logo-white.svg" alt="" />
                </Link>
                <p>
                  We're your innovation partner, delivering cutting-edge
                  solutions that elevate your business to the next level.
                </p>
                <div className="zubuz-social-icon social-box social-box-white">
                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/" target="_blank">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/" target="_blank">
                        <FaGithub />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="zubuz-footer-menu light extar-margin">
                <div className="zubuz-footer-title light">
                  <p>Navigation</p>
                </div>
                <ul>
                  <li>
                    <Link href="">Demos</Link>
                  </li>
                  <li>
                    <Link href="">About Us</Link>
                  </li>
                  <li>
                    <Link href="">Services</Link>
                  </li>
                  <li>
                    <Link href="">Pages</Link>
                  </li>
                  <li>
                    <Link href="">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="zubuz-footer-menu light">
                <div className="zubuz-footer-title light">
                  <p>Utility pages</p>
                </div>
                <ul>
                  <li>
                    <Link href="">Instructions</Link>
                  </li>
                  <li>
                    <Link href="">Style guide</Link>
                  </li>
                  <li>
                    <Link href="">Licenses</Link>
                  </li>
                  <li>
                    <Link href="">404 Not found</Link>
                  </li>
                  <li>
                    <Link href="">Password protected</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="zubuz-footer-menu light info extar-margin">
                <div className="zubuz-footer-title light">
                  <p>Contact us</p>
                </div>
                <ul>
                  <li>
                    <Link href="">
                      <img src="/images/icon/call.svg" alt="" />
                      +088-234-6849
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/icon/email.svg" alt="" />
                      example@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="/images/icon/map.svg" alt="" />
                      Howard Street, 13125 USA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="zubuz-footer-bottom center light">
          <div className="zubuz-copywright light">
            <p> &copy;Copyright 2024, All Rights Reserved by Mthemeus</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSectionThree;

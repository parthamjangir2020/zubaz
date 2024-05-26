/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="zubuz-footer-section main-footer white-bg">
      <div className="container">
        <div className="zubuz-footer-top">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="zubuz-footer-textarea">
                <Link href="">
                  <img src="/images/logo/logo-dark.svg" alt="" />
                </Link>
                <p>
                  We're your innovation partner, delivering cutting-edge
                  solutions that elevate your business to the next level.
                </p>
                <div className="zubuz-subscribe-one">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button
                      className="zubuz-default-btn zubuz-subscription-btn one"
                      id="zubuz-subscription-btn"
                      type="submit"
                    >
                      <span>Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
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
              <div className="zubuz-footer-menu">
                <div className="zubuz-footer-title">
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
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
                  <p>Resources</p>
                </div>
                <ul>
                  <li>
                    <Link href="">Support</Link>
                  </li>
                  <li>
                    <Link href="">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="">Strategic finance</Link>
                  </li>
                  <li>
                    <Link href="">Video guide</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="zubuz-footer-bottom">
          <div className="zubuz-social-icon order-md-2">
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
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram />
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
          <div className="zubuz-copywright">
            <p> &copy;Copyright 2024, All Rights Reserved by Mthemeus</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

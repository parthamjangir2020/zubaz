"use client";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="scetion zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-2">
            <div className="zubuz-default-content">
              <h2>Suitable app for all levels of users</h2>
              <p>
                Finance apps are for everyone, from beginners to experts. They
                help manage money, track expenses, and make financial tasks
                easier.
              </p>
              <p>
                Like budgeting and investment management. These apps are
                convenient and offer financial insights to help people save and
                plan for the future.
              </p>
              <div className="zubuz-extara-mt">
                <Link className="zubuz-default-btn" href="contact-us">
                  <span>Start Your Free Trial</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            {/* <div className="zubuz-accordion-wrap" id="zubuz-accordion">
              <div className="zubuz-accordion-item open">
                <div className="zubuz-accordion-header">
                  <h3>Sign up for free</h3>
                  <div className="zubuz-active-icon">
                    <svg
                      width="22"
                      height="13"
                      viewBox="0 0 22 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.75 2.25L11 11L2.25 2.25"
                        stroke="#111827"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="zubuz-accordion-body">
                  <p>
                    Start your journey with a 34-day trial. It’s easy no credit
                    card or commitment.
                  </p>
                </div>
              </div>
              <div className="zubuz-accordion-item">
                <div className="zubuz-accordion-header">
                  <h3>Make a money plan</h3>
                  <div className="zubuz-active-icon">
                    <svg
                      width="22"
                      height="13"
                      viewBox="0 0 22 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.75 2.25L11 11L2.25 2.25"
                        stroke="#111827"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="zubuz-accordion-body">
                  <p>
                    Add your accounts and expenses, set savings targets, and
                    share your plan.
                  </p>
                </div>
              </div>
              <div className="zubuz-accordion-item">
                <div className="zubuz-accordion-header">
                  <h3>Enjoy less stress</h3>
                  <div className="zubuz-active-icon">
                    <svg
                      width="22"
                      height="13"
                      viewBox="0 0 22 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.75 2.25L11 11L2.25 2.25"
                        stroke="#111827"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="zubuz-accordion-body">
                  <p>
                    Start feeling confident, content, and secure in your
                    financial life.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="zubuz-accordion-wrap">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Sign up for free</Accordion.Header>
                  <Accordion.Body>
                    Start your journey with a 34-day trial. It’s easy no credit
                    card or commitment.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Make a money plan</Accordion.Header>
                  <Accordion.Body>
                    Start your journey with a 34-day trial. It’s easy no credit
                    card or commitment.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Enjoy less stress</Accordion.Header>
                  <Accordion.Body>
                    Start your journey with a 34-day trial. It’s easy no credit
                    card or commitment.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

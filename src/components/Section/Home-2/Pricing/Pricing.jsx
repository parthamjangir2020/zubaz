"use client";

import Link from "next/link";
import { useState } from "react";
import PricingCard from "~/components/Ui/Cards/Pricing";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const priceToggole = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div className="section zubuz-section-padding3 bg-light position-relative">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Rational planning for rapid growth</h2>
        </div>
        <div className="pricing-btn">
          <label>Billed monthly</label>
          <div className="toggle-btn">
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              id="flexSwitchCheckDefault"
              data-pricing-trigger
              data-target="#table-price-value"
              // checked
              onClick={priceToggole}
            />
          </div>
          <label>Billed annually</label>
        </div>
        <div
          className="row"
          id="table-price-value"
          data-pricing-dynamic
          data-value-active="monthly"
        >
          <div className="col-xl-4 col-md-6">
            <div className="zubuz-pricing-wrap">
              <div className="zubuz-pricing-header">
                <h5>Basic</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div
                  className="zubuz-price dynamic-value"
                >
                  {isMonthly ? 19 : 39}
                </div>
                <p
                  className="dynamic-value"
                >
                  USD/Billed{isMonthly ? " Monthly" : " Yearly"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p>Works perfect for small teams</p>
              </div>
              <div className="zubuz-pricing-body">
                <ul>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    All multimedia channels
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    All enterprise CRM features
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    Up to 25,000 contacts
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    Flow + AI base chatbot
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    24/7 Support (Live, Email, Chat)
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn" href="pricing">
                Select the plan
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="zubuz-pricing-wrap active">
              <div className="zubuz-pricing-header">
                <h5>Standard</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div
                  className="zubuz-price dynamic-value"
                >
                  {isMonthly ? 49 : 69}
                </div>
                <p
                  className="dynamic-value"
                >
                  USD/Billed{isMonthly ? " Monthly" : " Yearly"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p>Great for small and medium teams</p>
              </div>
              <div className="zubuz-pricing-body">
                <ul>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    All multimedia channels
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    All advanced CRM features
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    Up to 15,000 contacts
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    Flow + AI base chatbot
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    24/7 Support (Live, Email, Chat)
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn active" href="pricing">
                Select the plan
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="zubuz-pricing-wrap">
              <div className="zubuz-pricing-header">
                <h5>Enterprise</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div
                  className="zubuz-price dynamic-value"
                >
                  {isMonthly ? 89 : 99}
                </div>
                <p
                  className="dynamic-value"
                >
                  USD/Billed{isMonthly ? " Monthly" : " Yearly"}
                </p>
              </div>
              <div className="zubuz-pricing-description">
                <p>Great for large teams</p>
              </div>
              <div className="zubuz-pricing-body">
                <ul>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    All multimedia channels
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    All enterprise CRM features
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    Up to 25,000 contacts
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    Flow + AI base chatbot
                  </li>
                  <li>
                    <img src="/images/v2/check2.png" alt="" />
                    24/7 Support (Live, Email, Chat)
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn" href="pricing">
                Select the plan
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="zubuz-pricing-shape">
        <img src="/images/v2/shape4-v2.png" alt="" />
      </div>
    </div>
  );
};

export default PricingSection;

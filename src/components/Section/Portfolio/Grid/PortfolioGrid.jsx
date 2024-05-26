"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import PortfolioFilterNav from "../Components/PortfolioFilterNav";

const PortfolioGrid = () => {
  const isotopeRef = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    // Check if window is defined (i.e., in the browser environment)
    if (typeof window !== "undefined") {
      // Dynamically import Isotope only in the client-side code
      import("isotope-layout").then((Isotope) => {
        // Initialize Isotope grid
        isotopeRef.current = new Isotope.default(".filter-container", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
        });
      });
    }
  }, []);

  useEffect(() => {
    // Check if isotopeRef.current is defined (i.e., Isotope is initialized)
    if (isotopeRef.current) {
      // Arrange items based on filter key
      if (filterKey === "*") isotopeRef.current.arrange({ filter: `*` });
      else isotopeRef.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  // Event handler for filter key change
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  return (
    <div className="section zubuz-section-padding3 overflow-hidden">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Some of our successful work</h2>
        </div>
        <PortfolioFilterNav
          filterKey={filterKey}
          handleFilterKeyChange={handleFilterKeyChange}
        />
        <div
          className="zubuz-portfolio-column filter-container"
          id="zubuz-two-column"
        >
          <div className="filter-item ui branding">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/portfolio/p_1.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="single-portfolio">
                    <h3>E-commerce System</h3>
                  </Link>
                  <p>Website</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="single-portfolio"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item ui website">
            <div className="collection-grid-item zubuz-portfolio-wrap ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/portfolio/p_2.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="single-portfolio">
                    <h3>Digital Art</h3>
                  </Link>
                  <p>Branding</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="single-portfolio"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item ui">
            <div className="collection-grid-item zubuz-portfolio-wrap ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/portfolio/p_3.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="single-portfolio">
                    <h3>Creative Work</h3>
                  </Link>
                  <p>UI/UX</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="single-portfolio"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-item ui branding website">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/portfolio/p_4.png" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="single-portfolio">
                    <h3>Development</h3>
                  </Link>
                  <p>Technology</p>
                  <Link
                    className="zubuz-portfolio-icon"
                    href="single-portfolio"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;

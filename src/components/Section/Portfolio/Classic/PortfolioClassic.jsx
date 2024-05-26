"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import PortfolioFilterNav from "../Components/PortfolioFilterNav";
const Isotope = dynamic(() => import("isotope-layout"), {
  ssr: false,
});

const PortfolioClassic = () => {
  const isotopeRef = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    // Dynamically import Isotope only on the client-side
    import("isotope-layout").then((Isotope) => {
      if (isotopeRef.current) {
        const iso = new Isotope.default(isotopeRef.current, {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
        });

        // Store the Isotope instance for later use
        isotopeRef.current.isoInstance = iso;

        return () => {
          isotopeRef.current.isoInstance.destroy();
        };
      }
    });
  }, []);

  useEffect(() => {
    if (isotopeRef.current && isotopeRef.current.isoInstance) {
      if (filterKey === "*") {
        isotopeRef.current.isoInstance.arrange({ filter: "*" });
      } else {
        isotopeRef.current.isoInstance.arrange({ filter: `.${filterKey}` });
      }
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <div className="section zubuz-section-padding3 overflow-hidden">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Our successful work</h2>
        </div>
        <PortfolioFilterNav
          filterKey={filterKey}
          handleFilterKeyChange={handleFilterKeyChange}
        />
        <div
          ref={isotopeRef}
          className="zubuz-portfolio-column zubuz-portfolio-column2 filter-container"
          id="zubuz-one-column"
        >
          <div className="filter-item ui branding">
            <div className="collection-grid-item zubuz-portfolio-wrap2">
              <div className="zubuz-portfolio-thumb2">
                <img src="/images/portfolio/p_1.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link href="single-portfolio">
                  <h3>E-commerce System</h3>
                </Link>
                <p>Website</p>
                <Link className="zubuz-portfolio-icon2" href="single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item ui website">
            <div className="collection-grid-item zubuz-portfolio-wrap2 ui Website">
              <div className="zubuz-portfolio-thumb2">
                <img src="/images/portfolio/p_2.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link href="single-portfolio">
                  <h3>Digital Art</h3>
                </Link>
                <p>Branding</p>
                <Link className="zubuz-portfolio-icon2" href="single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item ui">
            <div className="collection-grid-item zubuz-portfolio-wrap2 ui">
              <div className="zubuz-portfolio-thumb2">
                <img src="/images/portfolio/p_3.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link href="single-portfolio">
                  <h3>Creative Work</h3>
                </Link>
                <p>UI/UX</p>
                <Link className="zubuz-portfolio-icon2" href="single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item ui branding website">
            <div className="collection-grid-item zubuz-portfolio-wrap2 branding ui Website">
              <div className="zubuz-portfolio-thumb2">
                <img src="/images/portfolio/p_4.png" alt="" />
              </div>
              <div className="zubuz-portfolio-data2">
                <Link href="single-portfolio">
                  <h3>Development</h3>
                </Link>
                <p>Technology</p>
                <Link className="zubuz-portfolio-icon2" href="single-portfolio">
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 1.5L46.5 19M46.5 19L29 36.5M46.5 19L1.5 19"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioClassic;

"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
const StateSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("zubuz-counter");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="section zubuz-section-padding5" id="zubuz-counter">
      <div className="container">
        <div className="zubuz-counter-wrap2">
          <div className="zubuz-counter-data primary-color">
            <h2 className="zubuz-counter-number">
              <span>{isVisible && <CountUp end={15} duration={5} />}</span>
              <em>+</em>
            </h2>
            <p>Years of experience</p>
          </div>
          <div className="zubuz-counter-data primary-color">
            <h2 className="zubuz-counter-number">
              <span>{isVisible && <CountUp end={2} duration={5} />}</span>
              <em>K</em>
            </h2>
            <p>Monthly active user</p>
          </div>
          <div className="zubuz-counter-data primary-color">
            <h2 className="zubuz-counter-number">
              {" "}
              <span>{isVisible && <CountUp end={100} duration={5} />}</span>
              <em>%</em>
            </h2>
            <p>Client satisfaction score</p>
          </div>
          <div className="zubuz-counter-data primary-color">
            <h2 className="zubuz-counter-number">
              {" "}
              <span>{isVisible && <CountUp end={30} duration={5} />}</span>
              <em>K</em>
            </h2>
            <p>Successful project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;

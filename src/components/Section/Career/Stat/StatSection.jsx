"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const StatSection = () => {
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
    <div className="section dark-bg zubuz-section-padding5">
      <div id="zubuz-counter"></div>
      <div className="container">
        <div className="zubuz-counter-wrap2">
          <div className="zubuz-counter-data light">
            <h2 className="zubuz-counter-number">
              {" "}
              <span>{isVisible && <CountUp end={99.5} duration={5} />}</span>
              <em>%</em>
            </h2>
            <p>Positive user rating</p>
          </div>
          <div className="zubuz-counter-data light">
            <h2 className="zubuz-counter-number">
              <span>{isVisible && <CountUp end={2} duration={5} />}</span>
              <em>K</em>
            </h2>
            <p>Monthly active user</p>
          </div>
          <div className="zubuz-counter-data light">
            <h2 className="zubuz-counter-number">
              <span>{isVisible && <CountUp end={100} duration={5} />}</span>
              <em>%</em>
            </h2>
            <p>Uptime in the last year</p>
          </div>
          <div className="zubuz-counter-data light">
            <h2 className="zubuz-counter-number">
              <span>{isVisible && <CountUp end={55} duration={5} />}</span>
              <em>+</em>
            </h2>
            <p>Integration with other tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;

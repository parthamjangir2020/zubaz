"use client";
import { useState, useEffect } from "react";
import FeatureCardThree from "~/components/Ui/Cards/FeatureCardThree";

const FeatureSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/featureDataTwo.json");
        const data = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="section zubuz-section-padding3">
      <div class="container">
        <div class="zubuz-section-title zubuz-two-column-title">
          <div class="row">
            <div class="col-lg-7">
              <h2>Advantages of working with us</h2>
            </div>
            <div class="col-lg-5 d-flex align-items-center">
              <p>
                We embrace creativity & continuous improvement, fostering a
                culture of innovation. We believe in the power of teamwork and
                collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <FeatureCardThree key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

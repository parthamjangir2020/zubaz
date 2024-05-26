"use client";
import { useEffect, useState } from "react";
import FeatureCard from "~/components/Ui/Cards/Feature";

const FeatureSection = () => {
  const [featureDatas, setFeatureDatas] = useState([]);
  const featureData = async () => {
    const res = await fetch("./db/featureData.json");
    const featureData = await res.json();
    setFeatureDatas(featureData);
  };
  useEffect(() => {
    featureData();
  }, []);

  return (
    <div className="section zubuz-section-padding3 light-bg">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Features to improve your financial life</h2>
        </div>
        <div className="row">
          {featureDatas?.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature?.title}
              icon={feature?.icon}
              description={feature?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

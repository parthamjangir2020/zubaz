"use client";

import { useEffect, useState } from "react";
import CareerCard from "~/components/Ui/Cards/CareerCard";

const CareerSection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/careerData.json"); // Adjust the path as per your project structure
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Join our team to shape the future</h2>
        </div>
        <div className="zubuz-jobs-wrap">
          {jobs.map((job, index) => (
            <CareerCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSection;

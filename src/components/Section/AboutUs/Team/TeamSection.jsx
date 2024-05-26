"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import TeamCard from "~/components/Ui/Cards/TeamCard";

const TeamSection = () => {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/teamData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="section zubuz-section-padding3 dark-bg">
      <div className="container">
        <div className="zubuz-section-title light zubuz-two-column-title">
          <div className="row">
            <div className="col-lg-6">
              <h2>We’ve a team of creatives</h2>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="zubuz-title-btn">
                <Link className="zubuz-default-btn pill" href="team">
                  <span>Join Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {teamData?.slice(0, 3).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SerciveCard from "~/components/Ui/Cards/Sercive";

const ServiceSection = () => {
  const [serviceDatas, setServiceDatas] = useState([]);
  const serviceData = async () => {
    const res = await fetch("./db/serviceData.json");
    const serviceData = await res.json();
    setServiceDatas(serviceData);
  };
  useEffect(() => {
    serviceData();
  }, []);

  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title zubuz-two-column-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>Wide range of SaaS solutions</h2>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="zubuz-title-btn">
                <Link className="zubuz-default-btn pill" href="service">
                  <span>View all services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDatas.slice(0, 6)?.map((service, index) => (
            <SerciveCard
              key={index}
              title={service?.title}
              icon={service?.icon}
              description={service?.description}
              link={service?.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

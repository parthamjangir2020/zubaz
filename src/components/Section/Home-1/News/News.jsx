/* eslint-disable react/no-unescaped-entities */

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "~/components/Ui/Cards/Blog";
import ArrowRightIcon from "~/components/Ui/Icon/ArrowRight";

const NewsSection = () => {
  const [blogDatas, setBlogDatas] = useState([]);
  const blogData = async () => {
    const res = await fetch("./db/blogData.json");
    const blogData = await res.json();
    setBlogDatas(blogData);
  };
  useEffect(() => {
    blogData();
  }, []);

  return (
    <div className="section zubuz-section-padding2 light-bg">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>We've earned a 4.8-star Trustpilot rating</h2>
        </div>
        <div className="row">
          {blogDatas?.map((blog, index) => (
            <div className="col-xl-4 col-lg-6" key={index}>
              <div className="zubuz-blog-wrap">
                <Link href={blog?.link}>
                  <div className="zubuz-blog-thumb">
                    <img src={blog?.image} alt="" />
                    <div className="zubuz-blog-categorie">{blog?.category}</div>
                  </div>
                </Link>
                <div className="zubuz-blog-data">
                  <p>{blog?.date}</p>
                  <Link href={blog?.link}>
                    <h3>{blog?.title}</h3>
                  </Link>
                  <Link href={blog?.link} className="zubuz-blog-btn">
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
            // <BlogCard
            //   key={index}
            //   title={blog?.title}
            //   image={blog?.image}
            //   category={blog?.category}
            //   date={blog?.date}
            //   link={blog?.link}
            // />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import TwoBlogCard from "~/components/Ui/Cards/TwoBlogCard";

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/blogsTwo.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogData.map((post) => (
              <TwoBlogCard key={post?.id} post={post} />
            ))}
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar">
              <div className="widget">
                <div className="wp-block-search__inside-wrapper">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="wp-block-search__input"
                  />
                  <button id="wp-block-search__button" type="submit">
                    <img src="/images/icon/search.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">Categories:</h3>
                <ul>
                  <li>
                    <Link href="">SaaS</Link>
                  </li>
                  <li>
                    <Link href="">Marketing</Link>
                  </li>
                  <li>
                    <Link href="">Technology</Link>
                  </li>
                  <li>
                    <Link href="">SaaS Metrics</Link>
                  </li>
                  <li>
                    <Link href="">Development</Link>
                  </li>
                </ul>
              </div>
              <div className="widget zubuz_recent_posts_Widget">
                <h3 className="wp-block-heading">Recent Posts:</h3>
                <div className="post-item">
                  <div className="post-thumb">
                    <Link href="">
                      <img src="/images/blog/blog1.png" alt="" />
                    </Link>
                  </div>
                  <div className="post-text">
                    <div className="post-date">June 18, 2024</div>
                    <Link className="post-title" href="">
                      7 businesses for easy money
                    </Link>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb">
                    <Link href="">
                      <img src="/images/blog/blog2.png" alt="" />
                    </Link>
                  </div>
                  <div className="post-text">
                    <div className="post-date">June 18, 2024</div>
                    <Link className="post-title" href="">
                      My 3 tips for business ideas
                    </Link>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb">
                    <Link href="">
                      <img src="/images/blog/blog3.png" alt="" />
                    </Link>
                  </div>
                  <div className="post-text">
                    <div className="post-date">June 18, 2024</div>
                    <Link className="post-title" href="">
                      12 Halloween costume ideas
                    </Link>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">Tags:</h3>
                <div className="wp-block-tag-cloud">
                  <Link href="">Marketing</Link>
                  <Link href="">Business</Link>
                  <Link href="">SaaS</Link>
                  <Link href="">Development</Link>
                  <Link href="">UI/UX</Link>
                  <Link href="">Brand</Link>
                </div>
              </div>
              <div className="zubuz-blog-contact">
                <h3>How can we help you?</h3>
                <p>
                  We are here to help you! Tell us how we can help and we’ll get
                  in touch within next 24hrs
                </p>
                <Link href="contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

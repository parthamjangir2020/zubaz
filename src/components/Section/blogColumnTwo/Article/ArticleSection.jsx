"use client";
import { useEffect, useState } from "react";
import ArticleCard from "~/components/Ui/Cards/ArticleCard";

const ArticleSection = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/article.json");
        const data = await response.json();
        setArticleData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="section zubuz-section-padding3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="zubuz-section-title">
              <h2>Latest articles</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {articleData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;

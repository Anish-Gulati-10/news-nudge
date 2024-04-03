import { useEffect, useState } from "react";
import { Article } from "../components/article";
import { SearchNews } from "../utils/searchNews";
import { Navbar } from "../components/Navbar";
import Loader from "../components/loader";
import { useParams } from "react-router-dom";

export const Search = () => {
  const [articles, setArticles] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SearchNews(params.query);
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params]);

  if (!articles) {
    return <Loader />;    
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap items-stretch gap-y-10 px-2 justify-evenly gap-x-11 py-6 bg-crypto">
        {articles.map((article, index) => {
          return (
            <Article
              key={index}
              headline={article.headline}
              img_url={article.img_url}
              url={article.url}
              published_at={article.published_at}
              score={article.score}
              source={article.source}
              desc={article.desc}
            />
          );
        })}
      </div>
    </>
  );
};

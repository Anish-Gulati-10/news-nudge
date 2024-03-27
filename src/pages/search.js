import { useEffect, useState } from "react";
import { Article } from "../components/article";
import { SearchNews } from "../utils/search_news";
import { useSearchQuery } from "../context/QueryContext";

export const Search = () => {
  const [articles, setArticles] = useState([]);
  const {searchQuery} = useSearchQuery();

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data")
      try {
        const data = await SearchNews(searchQuery);
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
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
  );
};

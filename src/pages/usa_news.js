import { FetchNews } from "../utils/fetch_news";
import { useEffect } from "react";

export const UsaNews = () => {
    useEffect(()=>{
        const fetchData = async () => {
          try{
            const data = await FetchNews("usa");
            console.log(data);
          } catch (error){
            console.log(error);
          }
        }
        fetchData();
      },[])

    return (
            <h1>UsaNews</h1>
    );
}

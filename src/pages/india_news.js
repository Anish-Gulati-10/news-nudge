import { FetchNews } from "../utils/fetch_news";
import { useEffect } from "react";

export const IndiaNews = () => {
    useEffect(()=>{
        const fetchData = async () => {
          try{
            const data = await FetchNews("india");
            console.log(data);
          } catch (error){
            console.log(error);
          }
        }
        fetchData();
      },[])
    return (
            <h1>IndiaNews</h1>
    );
}

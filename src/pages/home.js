import { FetchNews } from "../utils/fetch_news";
import { useEffect } from "react";

export const Home = () => {
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const data = await FetchNews("");
        console.log(data);
      } catch (error){
        console.log(error);
      }
    }
    fetchData();
  },[])

  return <h1>Home</h1>;
};

import { FetchNews } from "../utils/fetch_news";
import { useEffect } from "react";

export const Crypto = () => {
    useEffect(()=>{
        const fetchData = async () => {
          try{
            const data = await FetchNews("crypto");
            console.log(data);
          } catch (error){
            console.log(error);
          }
        }
        fetchData();
      },[])
    return (
            <h1>Crypto</h1>
    );
}

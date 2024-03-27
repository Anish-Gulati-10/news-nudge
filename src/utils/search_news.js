import axios from "axios";
import { LOCAL_URL } from "../constants/constants";

export const SearchNews = async (news_input) => {
  console.log(`searching for ${news_input}`)
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${LOCAL_URL}news/search?news_input=${news_input}`,
    //url: 'http://localhost:8000/news/search?news_input=ambani',
    headers: {},
  };

  const response = await axios.request(config);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Error fetching news");
  }
};

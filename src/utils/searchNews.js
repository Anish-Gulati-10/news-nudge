import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

export const SearchNews = async (news_input) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BACKEND_URL}news/search?news_input=${news_input}`,
    headers: {},
  };

  const response = await axios.request(config);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Error fetching news");
  }
};

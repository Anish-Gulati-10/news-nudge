import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

export const FetchNews = async (topic) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BACKEND_URL}news/${topic}`,
    headers: {},
  };

  const response = await axios.request(config);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Error fetching news");
  }
};

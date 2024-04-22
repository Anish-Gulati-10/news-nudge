import axios from "axios";
import { LOCAL_URL } from "../constants/constants";

export const EconomicEvents = async () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${LOCAL_URL}economic-calendar/`,
    headers: {},
  };

  const response = await axios.request(config);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Error fetching news");
  }
};

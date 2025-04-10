import axios from "axios";

export const API_URL = "https://url-shortener-service-833302674742.asia-southeast1.run.app";
export const shortenUrl = async (originalUrl: string): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/urls/shorten`, {
      url: originalUrl,
    });
    return response.data;
  } catch (error) {
    console.error("Error shortening URL", error);
    throw error;
  }
};

export const getAllUrls = async (): Promise<any> => {
  try {
    console.log("getting urls");
    const response = await axios.get(`${API_URL}/urls`);
    return response.data;
  } catch (error) {
    console.error("Error fetching URLs", error);
    throw error;
  }
};

import axios from "axios";

// if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
//   throw new Error("Missing NEXT_PUBLIC_API_BASE_URL in environment variables");
// }

export const API_URL = 'https://urlly.jamescasia.com';
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

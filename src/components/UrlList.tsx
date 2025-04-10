import React, { useEffect, useState } from "react";
import { getAllUrls } from "../services/api";

interface Url {
  id: number;
  original_url: string;
  short_url: string;
  created_at: string;
}

const UrlList: React.FC = () => {
  const [urls, setUrls] = useState<Url[]>([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const data = await getAllUrls();
        setUrls(data);
      } catch (error) {
        console.error("Error fetching URLs", error);
      }
    };
    fetchUrls();
  }, []);

  return (
    <div>
      <h2>Shortened URLs</h2>
      <ul>
        {urls.map((url) => (
          <li key={url.id}>
            <p>
              <strong>Original URL:</strong> {url.original_url}
            </p>
            <p>
              <strong>Shortened URL:</strong>{" "}
              <a href={url.short_url} target="_blank" rel="noopener noreferrer">
                {url.short_url}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;

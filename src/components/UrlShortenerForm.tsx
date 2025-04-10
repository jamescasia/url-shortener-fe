import React, { useState } from "react";
import { shortenUrl, API_URL } from "../services/api";

interface FormData {
  originalUrl: string;
}

const UrlShortenerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ originalUrl: "" });
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      const data = await shortenUrl(formData.originalUrl);
      setShortenedUrl(`${API_URL}/${data.url}`);
    } catch (error) {
      setError("Failed to shorten the URL. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 style={{ marginBottom: "10px", color: "#2c3e50" }}>
          urlly: <span style={{ fontWeight: "normal" }}>URL Shortener</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="url"
            name="originalUrl"
            value={formData.originalUrl}
            onChange={handleChange}
            placeholder="Enter your URL here"
            required
          />
          <button type="submit">Shorten</button>
        </form>

        {error && (
          <p style={{ color: "#e74c3c", marginTop: "10px", textAlign: "center" }}>
            {error}
          </p>
        )}

        {shortenedUrl && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#ecf0f1",
              borderRadius: "6px",
              textAlign: "center",
              wordBreak: "break-word",
            }}
          >
            <p style={{ marginBottom: "5px", fontWeight: 500 }}>Shortened URL:</p>
            <a
              href={shortenedUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3498db", fontWeight: "bold" }}
            >
              {shortenedUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortenerForm;

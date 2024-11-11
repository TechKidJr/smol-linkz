import React, { useState, useEffect } from 'react';
import URLForm from './components/URLForm';
import URLList from './components/URLList';
import { getShortenedURLs } from './services/apiService';
import './App.css';

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const urls = await getShortenedURLs();
      setUrls(urls);
    }
    fetchData();
  }, []);

  const handleShortened = (newUrl) => {
    setUrls((prevUrls) => [newUrl, ...prevUrls]);
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <URLForm onShortened={handleShortened} />
      <URLList urls={urls} />
    </div>
  );
}

export default App;

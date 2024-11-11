import React, { useState } from 'react';
import { shortenURL } from '../services/apiService';

function URLForm({ onShortened }) {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shortened = await shortenURL(longUrl);
    onShortened(shortened);
    setLongUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter a long URL"
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default URLForm;

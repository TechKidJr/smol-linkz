// src/components/URLList.js

import React from 'react';

function URLList({ urls }) {
  return (
    <ul>
      {urls.map((url) => (
        <li key={url.shortUrl}>
          <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
            {url.shortUrl}
          </a> - {url.longUrl}
        </li>
      ))}
    </ul>
  );
}

export default URLList;

const API_URL = 'http://localhost:5000';

export async function shortenURL(longUrl) {
  const response = await fetch(`${API_URL}/shorten`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ longUrl }),
  });
  return response.json();
}

export async function getShortenedURLs() {
  const response = await fetch(`${API_URL}/urls`);
  return response.json();
}

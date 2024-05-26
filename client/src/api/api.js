const API_BASE_URL="http://localhost:8080";

export const get = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`GET request failed: ${response.status}`);
  }
  const data = await response.json();
  console.log(data)
  return data;
};

export const post = async (endpoint, body) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`POST request failed: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
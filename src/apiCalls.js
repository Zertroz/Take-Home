const key = '2f7415718ce54a9b922dc066d61dc598';

export const apiCall = async (keyword) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&language=en&pageSize=50&apiKey=${key}`);
  const data = await response.json();
  return data;
}
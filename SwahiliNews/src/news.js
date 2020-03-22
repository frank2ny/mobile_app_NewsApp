// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=318c2284f53f4d74bf8756ea2b0be45f";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
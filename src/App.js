import { useState, useEffect, useRef } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./styles/style.css";

const subscription_key = "7bdabae7a5d3437391ed75b47838d26e";

const fetchNews = async (q) => {
  let URL;
  q === ""
    ? (URL = `https://api.bing.microsoft.com/v7.0/news/search`)
    : (URL = `https://api.bing.microsoft.com/v7.0/news/search?q=${q}`);
  console.log(URL);
  const res = await fetch(URL, {
    headers: {
      "Ocp-Apim-Subscription-Key": subscription_key,
    },
  });
  const dataParsed = await res.json();
  // console.log(dataParsed);
  return dataParsed.value;
};

function App() {
  const [news, setNews] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetchNews(q)
      .then((newsData) => {
        setNews(newsData);
      })
      .catch((err) => {
        return;
      });
  }, []);

  return (
    <div className="app">
      <Search setQ={setQ} q={q} search={fetchNews} setNews={setNews} />
      <List data={news} />
    </div>
  );
}

export default App;

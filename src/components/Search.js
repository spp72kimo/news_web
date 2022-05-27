import React from "react";

const search = ({ setQ, q, search, setNews }) => {
  const handleSearch = () => {
    console.log("Search...");
    console.log(q);
    // const URL = `https://api.bing.microsoft.com/v7.0/news/search?q=${q}`;
    // console.log(URL);
    search(q).then((data) => {
      setNews(data);
    });
  };

  const handleChange = (e) => {
    setQ(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        value={q || ""}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>搜尋</button>
    </div>
  );
};

export default search;

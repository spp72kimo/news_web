import React from "react";

const Item = ({ data }) => {
  // console.log(data);
  const date = new Date(data.datePublished);
  let Y = date.getFullYear() + "-";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  let D = date.getDate() + " ";
  let h = date.getHours() + ":";
  let m = date.getMinutes();
  const t = Y + M + D + h + m;
  return (
    <div className="item">
      <div className="one">
        <img src={data.image && data.image.thumbnail.contentUrl} alt="" />
        <div className="content">
          <a href={data.url} target="_blank">
            <h3>{data.name}</h3>{" "}
          </a>
          <p>{t}</p>
          <p>{data.provider[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;

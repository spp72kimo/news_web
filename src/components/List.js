import React from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

const List = ({ data }) => {
  // console.log(data);
  return (
    <div className="list">
      {data &&
        data.map((news) => {
          return <Item data={news} key={uuidv4()} />;
        })}
    </div>
  );
};

export default List;

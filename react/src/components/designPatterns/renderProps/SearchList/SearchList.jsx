import React, { useState } from "react";

import "./SearchList.css";

const SearchList = ({ items, children }) => {
  const [query, setQuery] = useState("");

  const filteredList = items.filter((item, idx) =>
    JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
  );

  const filterHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search-list">
      <input type="text" onChange={filterHandler} />
      <ul>
        {filteredList.map((item, idx) => (
          <li key={`${item}-${idx}`}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;

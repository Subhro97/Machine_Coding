import React from "react";

import SearchList from "@/components/designPatterns/renderProps/SearchList/SearchList";

const SearchListPage = () => {
  return (
    <>
      <SearchList items={["item1", "item2", "item3", "item4", "item5"]}>
        {(item) => item}
      </SearchList>
      <br />
      <br />
      <SearchList items={["Spidey", "Gojo", "Zenitsu", "Charizard", "Sukuna"]}>
        {(item) => item}
      </SearchList>
    </>
  );
};

export default SearchListPage;

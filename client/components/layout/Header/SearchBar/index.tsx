import React from "react";
import styled from "styled-components";


export function SearchBar(props) {
  const { src, className } = props;

  return (
    <SearchBar1 className={`search-bar ${className || ""}`}>
      <IconSearch className="icon-search" src={src} />
    </SearchBar1>
  );
}

const SearchBar1 = styled.div`
  height: 50px;
  display: flex;
  padding: 10px 19px;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 59px;
  box-shadow: 0px 7px 30px #0015da29;
  width: 50%;
  margin-right: 20px;

  &.search-bar.search-bar-1 {
    margin-top: 2px;
    padding: unset;
    align-items: unset;
  }
`;

const IconSearch = styled.img`
  width: 35px;
  height: 35px;
`;

const IconSearch1 = styled.img`
  .search-bar.search-bar-1 & {
    margin-top: 12px;
    margin-left: 19px;
  }
`;

export default SearchBar;

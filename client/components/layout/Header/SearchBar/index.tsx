import React from "react";
import styled from "styled-components";


<<<<<<< HEAD
export function SearchBar(props) {
=======
function SearchBar(props) {
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
<<<<<<< HEAD
  background-color: var(--white);
  border-radius: 59px;
  box-shadow: 0px 7px 30px #0015da29;
  width: 50%;

  &.search-bar.search-bar-1 {
    margin-top: 2px;
    padding: unset;
    align-items: unset;
=======
  min-width: 700px;
  background-color: var(--white);
  border-radius: 59px;
  box-shadow: 0px 7px 30px #0015da29;

  &.search-bar.search-bar-1 {
    margin-top: 2px;
    width: 932px;
    padding: unset;
    align-items: unset;
    min-width: unset;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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

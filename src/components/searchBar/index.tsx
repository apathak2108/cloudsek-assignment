import React from "react";
import { SearchInput, StyledSearchContainer, StyledSearchIcon } from "./searchBar.styled";
import { STRINGS, URL } from "../../constants";

const SearchBar: React.FC = () => {
  return (
    <StyledSearchContainer>
      <StyledSearchIcon src={URL.SEARCH_ICON} alt={STRINGS.SEARCH_ICON_ALT} />
      <SearchInput placeholder={STRINGS.SEARCH_PLACEHOLDER} />
    </StyledSearchContainer>
  );
};

export default SearchBar;

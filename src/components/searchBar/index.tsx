import React from "react";
import {
  SearchInput,
  StyledSearchContainer,
  StyledSearchIcon,
} from "./searchBar.styled";
import { STRINGS, URL } from "../../constants";

interface SearchBarProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <StyledSearchContainer>
      <StyledSearchIcon src={URL.SEARCH_ICON} alt={STRINGS.SEARCH_ICON_ALT} />
      <SearchInput
        placeholder={STRINGS.SEARCH_PLACEHOLDER}
        value={value}
        onChange={onChange}
      />
    </StyledSearchContainer>
  );
};

export default SearchBar;

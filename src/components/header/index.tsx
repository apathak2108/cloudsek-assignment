import { useDispatch, useSelector } from "react-redux";
import { STRINGS } from "../../constants";
import { RootState } from "../../redux/rootReducer";
import Badge from "../badge";
import SearchBar from "../searchBar";
import {
  StyledHeaderContainer,
  StyledHeaderInnerLeftContainer,
  StyledHeaderInnerRightContainer,
  StyledHeading,
} from "./header.styled";
import { useEffect, useState } from "react";
import {
  getUsersTotalCount,
  searchUsers,
} from "../../redux/actions/homeActions";
import { debounce } from "../../utils";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>(STRINGS.EMPTY_STRING);
  const count = useSelector((state: RootState) => state.home.count);
  const loading = useSelector((state: RootState) => state.home.loading);

  const debouncedSearch = debounce((query: string) => {
    dispatch(searchUsers(query, STRINGS.EMPTY_STRING, 8));
  }, 10);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    dispatch(getUsersTotalCount());
  }, []);

  return (
    <StyledHeaderContainer>
      <StyledHeaderInnerLeftContainer>
        <StyledHeading>{STRINGS.MAIN_HEADING}</StyledHeading>
        {!loading && <Badge value={`${count}\u00A0${STRINGS.USERS}`} />}
      </StyledHeaderInnerLeftContainer>
      <StyledHeaderInnerRightContainer>
        <SearchBar value={query} onChange={handleInputChange} />
      </StyledHeaderInnerRightContainer>
    </StyledHeaderContainer>
  );
};

export default Header;

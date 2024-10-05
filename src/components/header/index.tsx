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
  setFilteredUsers,
  setIsUsersFound,
  setUserCount,
} from "../../redux/actions/userActions";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { allUsers, filteredUsers, loading, error } = useSelector(
    (state: RootState) => state?.user
  );
  const totalUsersCount = allUsers?.length;
  const filteredUsersCount = filteredUsers?.length;
  const [query, setQuery] = useState<string>(STRINGS.EMPTY_STRING);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const filteredUser = allUsers?.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(query.toLowerCase());
  });

  useEffect(() => {
    if (query.length > 2) {
      dispatch(setFilteredUsers(filteredUser));
      const noUsersFound = filteredUser.length === 0;
      dispatch(setUserCount(filteredUser.length));
      dispatch(setIsUsersFound(!noUsersFound));
    } else {
      dispatch(setFilteredUsers([]));
      dispatch(setUserCount(totalUsersCount));
      dispatch(setIsUsersFound(true));
    }
  }, [query]);

  const getUserCountText = (count: number) =>
    `${count}\u00A0${count === 1 ? STRINGS.USER : STRINGS.USERS}`;

  return (
    <StyledHeaderContainer>
      <StyledHeaderInnerLeftContainer>
        <StyledHeading>{STRINGS.MAIN_HEADING}</StyledHeading>
        {!loading && !error && (
          <Badge
            value={
              query.length > 2
                ? getUserCountText(filteredUsersCount)
                : getUserCountText(totalUsersCount)
            }
          />
        )}
      </StyledHeaderInnerLeftContainer>
      <StyledHeaderInnerRightContainer>
        <SearchBar value={query} onChange={handleInputChange} />
      </StyledHeaderInnerRightContainer>
    </StyledHeaderContainer>
  );
};

export default Header;

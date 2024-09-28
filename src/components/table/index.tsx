import React, { useEffect } from "react";
import {
  LoaderWrapper,
  StyledTable,
  StyledTableCell,
  StyledTableCellForBadge,
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
} from "./table.styled";
import UserCatalogue from "../catalogue";
import { STRINGS, TABLE_HEADINGS } from "../../constants";
import StatusBadge from "../statusBadge";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from "../../redux/actions/homeActions";
import { RootState } from "../../redux/rootReducer";
import Loader from "../loader";
import Badge from "../badge";
import { capitalizeFirstLetter } from "../../utils";

const CustomTable: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.home
  );

  useEffect(() => {
    dispatch(searchUsers(STRINGS.EMPTY_STRING, STRINGS.EMPTY_STRING, 8));
  }, [dispatch]);

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow active={true}>
            {TABLE_HEADINGS.map((heading, index) => (
              <StyledTableHeader key={index}>{heading}</StyledTableHeader>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <tbody>
          {loading && !error && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
          {!loading && error && <LoaderWrapper>{error}</LoaderWrapper>}
          {!loading &&
            !error &&
            users?.length > 0 &&
            users.map((user: any, index: number) => (
              <StyledTableRow key={index} active={user.active}>
                <StyledTableCell>
                  <UserCatalogue
                    name={`${user.first_name} ${user.last_name}`}
                    username={`@${user.first_name}`}
                    image={user.profile_picture}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <StatusBadge status={user.active} />
                </StyledTableCell>
                <StyledTableCell>{user.role}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCellForBadge>
                  {JSON.parse(user.teams).map((team: string, index: number) => (
                    <Badge key={index} value={capitalizeFirstLetter(team)} />
                  ))}
                </StyledTableCellForBadge>
              </StyledTableRow>
            ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default CustomTable;

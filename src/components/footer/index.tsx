import React, { useState } from "react";
import { StyledFooterContainer } from "./footer.styled";
import Pagination from "../pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { searchUsers } from "../../redux/actions/homeActions";
import { getTotalPages } from "../../utils";
import { STRINGS } from "../../constants";

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const limit = 8;
  const totalUsers = useSelector((state: RootState) => state.home.count);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = getTotalPages(totalUsers, limit);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    dispatch(searchUsers(STRINGS.EMPTY_STRING, page, limit));
  };

  return (
    <StyledFooterContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => handlePageChange(page)}
      />
    </StyledFooterContainer>
  );
};

export default Footer;

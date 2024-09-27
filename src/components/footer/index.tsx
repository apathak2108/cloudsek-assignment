import React, { useState } from "react";
import { StyledFooterContainer } from "./footer.styled";
import Pagination from "../pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { searchUsers } from "../../redux/actions/homeActions";

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const limit = 8;
  const totalUsers = useSelector((state: RootState) => state.home.count);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages =
    totalUsers % limit === 0
      ? Math.floor(totalUsers / limit)
      : Math.floor(totalUsers / limit) + 1;

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    dispatch(searchUsers("", page, limit));
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

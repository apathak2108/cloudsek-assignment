import React, { useState, useEffect } from "react";
import { StyledFooterContainer } from "./footer.styled";
import Pagination from "../pagination";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPages } from "../../utils";
import { LIMIT } from "../../constants";
import { getPaginatedUsers } from "../../redux/actions/userActions";
import { RootState } from "../../redux/rootReducer";

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const userTotalCount = useSelector(
    (state: RootState) => state?.user?.userCount
  );
  const totalPages = getTotalPages(userTotalCount, LIMIT);

  useEffect(() => {
    dispatch(getPaginatedUsers(currentPage, LIMIT));
  }, [currentPage, dispatch]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <StyledFooterContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </StyledFooterContainer>
  );
};

export default Footer;

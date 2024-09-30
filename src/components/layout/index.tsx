import React, { ReactNode } from "react";
import { StyledChildrenContainer, StyledLayout } from "./layout.styled";
import Header from "../header";
import Footer from "../footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const users = useSelector((state: RootState) => state.home.users);
  return (
    <StyledLayout>
      <Header />
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
      {users.length > 0 && <Footer />}
    </StyledLayout>
  );
};

export default Layout;

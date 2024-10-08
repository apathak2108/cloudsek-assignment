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
  return (
    <StyledLayout>
      <Header />
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
     <Footer />
    </StyledLayout>
  );
};

export default Layout;

import { STRINGS } from "../../constants";
import Badge from "../badge";
import {
  StyledHeaderContainer,
  StyledHeaderInnerLeftContainer,
  StyledHeaderInnerRightContainer,
  StyledHeading,
} from "./header.styled";

const Header: React.FC = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderInnerLeftContainer>
        <StyledHeading>{STRINGS.MAIN_HEADING}</StyledHeading>
        <Badge value={`100 ${STRINGS.USERS}`} />
      </StyledHeaderInnerLeftContainer>
      <StyledHeaderInnerRightContainer></StyledHeaderInnerRightContainer>
    </StyledHeaderContainer>
  );
};

export default Header;

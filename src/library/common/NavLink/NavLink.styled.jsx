import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../resources/styled/variables";

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.textColor};
  transition: 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
  }
`;
NavLink.defaultProps = {
  theme: theme.dark,
};
export default NavLink;

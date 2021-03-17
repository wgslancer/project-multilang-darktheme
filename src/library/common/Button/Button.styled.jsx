import { connect } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../resources/styled/variables";
const Button = styled.button`
  width: 100%;
  height: auto;
  outline: none;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  transition: 0.2s ease-in;
  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.hoverTextColor};
  }
`;

Button.defaultProps = {
  theme: theme.dark,
};
const HOCButton = ({ darkTheme, ...props }) => {
  return (
    <Button theme={darkTheme ? theme.dark : theme.light} {...props}></Button>
  );
};

export default connect(({ styled }) => ({
  darkTheme: styled.darkTheme,
}))(HOCButton);

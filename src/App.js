import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import Button from "./library/common/Button/Button.styled";
import Header from "./library/common/Header/Header.components";
import { toggleTheme } from "./main/redux/styled/styled.slice";
const App = () => {
  const darkTheme = useSelector((state) => state.styled.darkTheme);
  const dispatch = useDispatch();
  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      <Header />
      <div style={{ width: "100px" }}>
        <Button onClick={() => dispatch({ type: toggleTheme })}>
          Change Theme
        </Button>
      </div>
    </div>
  );
};

export default memo(App);

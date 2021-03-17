import React, { memo } from "react";
import { useSelector } from "react-redux";
import "./Header.styled.scss";
import { theme } from "../../../resources/styled/variables";
import NavLink from "../NavLink/NavLink.styled";
const Header = memo(() => {
  const categories = useSelector((state) => state.header.categories);
  const darkTheme = useSelector((state) => state.styled.darkTheme);
  return (
    <div className={`header ${darkTheme ? "dark" : "light"}`}>
      {categories ? (
        <ul className="nav-list">
          {categories.map((ele) => (
            <li key={ele.id}>
              <NavLink
                to={ele.path}
                theme={darkTheme ? theme.dark : theme.light}
              >
                {ele.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
});

export default Header;

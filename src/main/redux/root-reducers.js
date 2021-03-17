import { combineReducers } from "@reduxjs/toolkit";
import header from "../../library/common/Header/Header.slice";
import styled from "./styled/styled.slice";
const rootReducers = combineReducers({
  header,
  styled,
});

export default rootReducers;

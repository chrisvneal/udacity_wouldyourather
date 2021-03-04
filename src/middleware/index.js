import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "react-redux";

export default applyMiddleware(thunk, logger);

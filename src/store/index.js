import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";

const store = createStore(reducer, compose(applyMiddleware(logger)));
export { store };

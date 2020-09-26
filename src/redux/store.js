import dateReducer from "./reducers/dateReducer";
import {createStore} from "redux";

const store = createStore(dateReducer);

export default store;
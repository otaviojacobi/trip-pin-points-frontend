import { combineReducers } from 'redux';
import markers from "./markers";
import auth from "./auth";

const tripPinPointsApp = combineReducers({
  markers, auth,
})

export default tripPinPointsApp;

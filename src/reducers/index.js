import { combineReducers } from 'redux';
import markers from "./markers";

const tripPinPointsApp = combineReducers({
  markers,
})

export default tripPinPointsApp;

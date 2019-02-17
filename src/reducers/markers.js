const initialState = [];

export default function markers(state = initialState, action) {
  let markers = state.slice();

  switch (action.type) {
    case 'ADD_MARKER':
      return [...state, { lng: action.lng, lat: action.lat }];
    case 'DELETE_MARKER':
      return markers.filter(marker => marker.lng !== action.marker.lng && marker.lat !== action.marker.lat);
    default:
      return state;
  }
}

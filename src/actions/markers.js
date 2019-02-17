export const addMarker = ({x, y, lat, lng, event}) => {

  return {
    type: 'ADD_MARKER',
    lat,
    lng
  }
}

export const deleteMarker = marker => {
  return {
    type: 'DELETE_MARKER',
    marker
  }
}
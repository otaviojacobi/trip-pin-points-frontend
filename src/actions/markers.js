export const fetchMarkers = () => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json",
  
    'Access-Control-Allow-Headers': 'Authorization'};
    let {token} = getState().auth;


    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return fetch("http://trip-pin-points-markers.sa-east-1.elasticbeanstalk.com/marker", {method: "GET", headers, })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          return dispatch({type: 'FETCH_MARKERS', markers: res.data.markers});
        } else if (res.status === 401 || res.status === 403 || res.status === 400) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}

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
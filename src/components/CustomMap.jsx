import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {connect} from 'react-redux';

import Marker from './Marker';
import {markers, auth} from '../actions';

class CustomMap extends Component {
  static defaultProps = {
    center: {
      lat: -30.0434455,
      lng: -51.172561
    },
    zoom: 13
  };

  constructor(props){
    super(props);
    this.state = {
        markers: [],
    }
  }

  componentDidMount(){
    this.props.fetchMarkers();
  }

 _onMapClick({x, y, lat, lng, event}) {
    this.setState({ 
      markers: [...this.state.markers, {lat, lng}]
    });
  }

  _onMarkerClick(clickedMarker) {
    this.setState({ 
      markers: this.state.markers.filter(marker => marker.lat !== clickedMarker.lat && marker.lng !== clickedMarker.lng)
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '96vh', width: '100%' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.props.addMarker}
        >
            {this.props.markers.map(marker =>{
              return(
                <Marker
                  lat={marker.lat}
                  lng={marker.lng}
                  onClick={this.props.deleteMarker.bind(this, marker)}
                />
              )
            })}
        </GoogleMapReact>
        <div style={{textAlign: "right"}}>
          <button type="submit" onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    markers: state.markers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMarkers: () => {
      dispatch(markers.fetchMarkers())
    },
    addMarker: params => {
      dispatch(markers.addMarker(params));
    },
    deleteMarker: marker => {
      dispatch(markers.deleteMarker(marker));
    },
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomMap);

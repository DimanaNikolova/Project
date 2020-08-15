import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
import Marker from '../Marker/Marker'

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className="Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDMjjDlT--kVYx0tKeUh0kMEMyM0KXBpHk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap
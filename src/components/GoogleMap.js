import {Map, Marker, GoogleApiWrapper,InfoWindow} from 'google-maps-react';
import { Component } from 'react';

export class MapContainer extends Component {
  
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter:{
        lat : 33.88333,
        lng:10.11667
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            initialCenter={{
              lat:this.state.mapCenter.lat,
              lng : this.state.mapCenter.lng
            }}
            >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyAmgGyVJpHEvx2gljq93fOfUBI3_TD0j_M')
  })(MapContainer)
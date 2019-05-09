import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as DeveloperModalActions } from '../../store/ducks/developerModal';

class Map extends Component {
  static propTypes = {
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        avatar_url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
      }),
    ).isRequired,
    showModal: PropTypes.func.isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.811084,
      longitude: -43.207885,
      zoom: 12,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    this.props.showModal({
      latitude,
      longitude,
    });
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.developers.map(dev => (
          <Marker
            key={dev.id}
            latitude={dev.cordinates.latitude}
            longitude={dev.cordinates.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              alt=""
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src={dev.avatar_url}
            />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProp = ({ developers }) => ({
  developers: developers || [],
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperModalActions, dispatch);

export default connect(
  mapStateToProp,
  mapDispatchToProps,
)(Map);

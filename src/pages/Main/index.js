import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingOverlay from 'react-loading-overlay';
import SideBar from '../../components/SideBar';
import Map from '../../components/Map';
import MeuModal from '../../components/DeveloperModal';

const Main = props => (
  <>
    <LoadingOverlay active={props.isShow} spinner text={props.message}>
      <Map />
      <SideBar />
      <MeuModal />
    </LoadingOverlay>
  </>
);

const mapStateToProp = state => ({
  isShow: state.mask.isShow,
  message: state.mask.message,
});

Main.propTypes = {
  isShow: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default connect(mapStateToProp)(Main);

import React, { Component } from 'react';

import Modal from 'react-modal';
import PropTypes from 'prop-types';

import './style.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as DeveloperModalActions } from '../../store/ducks/developerModal';
import { Actions as DevelopersActions } from '../../store/ducks/developers';

import {
  Form, Actions, Cancel, Success,
} from './styles';

Modal.setAppElement(document.getElementById('root'));

class DeveloperModal extends Component {
  state = {
    repositoryPath: '',
  };

  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    addDeveloperRequest: PropTypes.func.isRequired,
    cordinates: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    ]).isRequired,
  };

  onSave = (e) => {
    e.preventDefault();

    const { latitude, longitude } = this.props.cordinates;

    this.props.addDeveloperRequest(this.state.repositoryPath, {
      latitude,
      longitude,
    });
  };

  onClose = () => {
    this.props.hideModal();
  };

  onChangeInput = (e) => {
    this.setState({
      repositoryPath: e.target.value,
    });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isShow}
        onRequestClose={this.onClose}
        className="developer-modal"
        overlayClassName="developer-modal-overlay"
      >
        <Form onSubmit={this.onSave}>
          <strong>Adicionar desenvolvedor</strong>
          <input type="text" placeholder="Usuário do GitHub" onChange={this.onChangeInput} />
          <Actions>
            <Cancel type="button" onClick={this.onClose}>
              Cancelar
            </Cancel>
            <Success type="submit">Adicionar</Success>
          </Actions>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = ({ developerModal }) => ({
  isShow: developerModal.isShow,
  cordinates: developerModal.cordinates,
  repositoryPath: developerModal.repositoryPath,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = dispatch => bindActionCreators({ ...DeveloperModalActions, ...DevelopersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeveloperModal);

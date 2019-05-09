import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  Page, Container, Item, Avatar, Content, Actions, Remove, Link,
} from './styles';

import { Actions as DeveloperActions } from '../../store/ducks/developers';

const SideBar = ({ developers, removeDeveloper }) => (
  <Page>
    <Container>
      {developers.map(dev => (
        <Item key={dev.id}>
          <Avatar>
            <img src={dev.avatar_url} alt="avatar" />
          </Avatar>
          <Content>
            <div>
              <strong>{dev.name}</strong>
            </div>
            <div>
              <small>{dev.description}</small>
            </div>
          </Content>
          <Actions>
            <Remove
              type="button"
              className="remove"
              onClick={() => {
                removeDeveloper(dev.id);
              }}
            >
              <i className="fa fa-times" />
            </Remove>
            <Link
              href={`https://github.com/${dev.description}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </Link>
          </Actions>
        </Item>
      ))}
    </Container>
  </Page>
);

SideBar.propTypes = {
  removeDeveloper: PropTypes.func.isRequired,
  developers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar_url: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProp = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProp,
  mapDispatchToProps,
)(SideBar);

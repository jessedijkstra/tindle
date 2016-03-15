import React, { Component, PropTypes } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import Login from '../components/Login';
import {
  setEmail, setPassword,
  loginWithUsernameAndPassword, loginWithRefreshToken
} from '../actions/Login';

class AuthenticationContainer extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    refreshToken: PropTypes.string,
    onRefreshToken: PropTypes.func
  }
  componentDidUpdate(prevProps) {
    const { loaded, refreshToken, onRefreshToken } = this.props;

    if (!prevProps.loaded && loaded && refreshToken.length) {
      onRefreshToken(refreshToken);
    }
  }

  render() {
    return (<Login {...this.props} />);
  }
}

export default connect(
  (state) => ({
    loaded: state.app.loaded,
    active: !state.authorized,
    loading: state.login.status === 'PENDING',
    email: state.login.email,
    password: state.login.password,
    refreshToken: state.refreshToken
  }),
  (dispatch) => ({
    onEmail: compose(dispatch, setEmail),
    onPassword: compose(dispatch, setPassword),
    onSubmit: compose(dispatch, loginWithUsernameAndPassword),
    onRefreshToken: compose(dispatch, loginWithRefreshToken)
  })
)(AuthenticationContainer);

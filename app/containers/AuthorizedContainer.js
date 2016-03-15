import React, { View, PropTypes } from 'react-native';
import { connect } from 'react-redux';

const Authorized = ({ authorized, children }) => (authorized ? children : <View />);

Authorized.propTypes = {
  authorized: PropTypes.bool,
  children: PropTypes.node
};

export default connect(
  (state) => ({
    authorized: state.authorized
  })
)(Authorized);

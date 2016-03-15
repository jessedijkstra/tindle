import React, { Text, View, TextInput, PropTypes } from 'react-native';
import { partial } from 'ramda';

const inputStyle = {
  backgroundColor: '#fff',
  borderRadius: 2,
  height: 50,
  padding: 10,
  marginBottom: 10
};

const Login = ({ active, email, password, onEmail, onPassword, onSubmit }) => (
  <View
    style={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      transform: [{ scale: (active ? 1 : 0) }]
    }}
  >
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6255',
        padding: 40
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: 'white',
          fontWeight: 'bold',
          marginTop: -80,
          marginBottom: 40
        }}
      >
        Tindle
      </Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={inputStyle}
        onChangeText={onEmail}
        onSubmitEditing={partial(onSubmit, [email, password])}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        style={inputStyle}
        onChangeText={onPassword}
        onSubmitEditing={partial(onSubmit, [email, password])}
      />
    </View>
  </View>
);

Login.propTypes = {
  active: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  onEmail: PropTypes.func,
  onPassword: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Login;

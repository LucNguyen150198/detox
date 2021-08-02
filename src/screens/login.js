import React from 'react';
import {StyleSheet, Button, SafeAreaView, TextInput, Text} from 'react-native';
var randomColor = require('randomcolor'); // import the script
const color = randomColor({
  luminosity: 'dark',
  format: 'rgba',
});
const USER = [{email: 'luc.nguyen150198@gmail.com', password: '123456'}];
const LoginScreen = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassWord] = React.useState(null);
  const [messageError, setError] = React.useState(null);
  const onChangeEmail = val => {
    setEmail(val);
  };
  const onChangePassword = val => {
    setPassWord(val);
  };
  const onSubmit = () => {
    if (!email || !password) {
      setError('please full fill');
    } else if (
      !USER.find(item => {
        return item.email === email && item.password === password;
      })
    ) {
      setError('email or password not correct');
    } else {
      setError(null);
      alert('success');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        testID={'userEmail'}
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        testID={'userPassword'}
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={onChangePassword}
      />

      {messageError && (
        <Text testID="validationMessage" style={{color}}>
          {messageError}
        </Text>
      )}

      <Button
        testID={'btnSignIn'}
        title="Sign in"
        color={color}
        onPress={onSubmit}
      />
    </SafeAreaView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 10,
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color,
    borderRadius: 5,
  },
});

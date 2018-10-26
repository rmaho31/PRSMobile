import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { navigation } from "../.././router";
import { onLogin } from './Authenticate'

export class SignUp extends React.Component {
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>UserName</FormLabel>
          <FormInput placeholder="UserName..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />
          <FormLabel>FirstName</FormLabel>
          <FormInput placeholder="FirstName..." />
          <FormLabel>LastName</FormLabel>
          <FormInput placeholder="LastName..." />
          <FormLabel>PhoneNumber</FormLabel>
          <FormInput placeholder="PhoneNumber..." />
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => {
              onLogin().then(() => this.props.navigation.navigate("LoggedIn"));
            }}
          />
        </Card>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
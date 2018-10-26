import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onLogin } from './Authenticate'

export class Login extends React.Component {
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>UserName</FormLabel>
          <FormInput placeholder="UserName..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Login"
            onPress={() => {
              onLogin().then(() => this.props.navigation.navigate("LoggedIn"));
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => this.props.navigation.navigate("SignUps")}
          />
        </Card>
      </View>
    );
  }
}
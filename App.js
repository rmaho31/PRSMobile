import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Users!</Text>
      </View>
    );
  }
}

class VendorScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vendors!</Text>
      </View>
    );
  }
}

class ProductScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Products!</Text>
      </View>
    );
  }
}

class PurchaseRequestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>PurchaseRequests!</Text>
      </View>
    );
  }
}

class LineItemScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>LineItems!</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator(
  {
    Users: UserScreen,
    Vendors: VendorScreen,
    Products: ProductScreen,
    PurchaseRequests: PurchaseRequestScreen,
    LineItems: LineItemScreen
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 8,
        color: "#fdcb6e"
      },
      style: {
        backgroundColor: 'black'
      },
    }
  });
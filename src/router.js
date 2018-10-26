import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import { SignUp } from "./Screens/User/SignUp";
import { Login } from "./Screens/User/Login";
import { UserScreen } from './Screens/User/UserScreen';
import { VendorScreen } from './Screens/Vendor/VendorScreen';
import { ProductScreen } from './Screens/Product/ProductScreen';
import { PurchaseRequestScreen } from './Screens/PurchaseRequest/PurchaseRequestScreen';
import { LineItemScreen } from './Screens/LineItem/LineItemScreen';

export const loggedIn = createMaterialTopTabNavigator(
    {
        Users: UserScreen,
        Vendors: VendorScreen,
        Products: ProductScreen,
        PurchaseRequests: PurchaseRequestScreen,
        LineItems: LineItemScreen
    },
    {
        tabBarOptions: {
            labelStyle:
            {
                fontSize: 8,
                color: "#fdcb6e"
            },
            style:
            {
                backgroundColor: 'black'
            },
        }
    });

export const loggedOut = createStackNavigator(
    {
        Logins: {
            screen: Login,
            navigationOptions: {
              title: "PRS App Please Login",
            }
        },
            SignUps: {
                screen: SignUp,
                navigationOptions: {
                  title: "Sign Up for access to the PRS",
                }
            }
    });

export const createRootNavigator = (lIn = false) => {
    return createSwitchNavigator(
        {
            LoggedIn: loggedIn,
            LoggedOut: loggedOut,
        },
        {
            initialRouteName: lIn ? "LoggedIn" : "LoggedOut"
        });
};
import React from "react";
import { createRootNavigator } from "./router";
import { isLoggedIn } from "./Screens/User/Authenticate";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      checkedLogin: false
    };
  }

  componentDidMount() {
    isLoggedIn()
      .then(result => this.setState({ loggedIn: result, checkedLogin: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedLogin, loggedIn } = this.state;

    if (!checkedLogin) {
      return null;
    }

    const Layout = createRootNavigator(loggedIn);
    return <Layout />;
  }
}
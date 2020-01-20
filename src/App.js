import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Menu } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./pages/SignIn";
import BillForm from "./pages/BillForm";
import MyBills from "./pages/MyBills";
import Statistics from "./pages/Statistics";
import { connect } from "react-redux";

export class App extends React.Component {
  state = { invertedTheme: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <div>
          {this.props.auth.isAuthenticated ? (
            <>
              <Redirect to="/" />

              <Menu stackable>
                <Menu.Item>
                  <img src={logo} />
                </Menu.Item>

                <Menu.Item
                  name="my-bills"
                  active={activeItem === "my-bills"}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/"
                >
                  My Bills
                </Menu.Item>
                <Menu.Item
                  name="add-bill"
                  active={activeItem === "add-bill"}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/add-bill"
                >
                  Add Bill
                </Menu.Item>

                <Menu.Item
                  name="statistics"
                  active={activeItem === "statistics"}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/statistics"
                >
                  Statistics
                </Menu.Item>
              </Menu>
            </>
          ) : (
            <Redirect to="/signin" />
          )}

          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/add-bill">
              <BillForm />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/">
              <MyBills />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  auth: state.authReducer
});

export default connect(mapStateToProps)(App);

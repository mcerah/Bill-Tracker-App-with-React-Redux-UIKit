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
import { connect } from "react-redux";

export class App extends React.Component {
  state = {};

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
                  name="new-bill"
                  active={activeItem === "new-bill"}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/new-bill"
                >
                  Add New Bill
                </Menu.Item>

                <Menu.Item
                  name="statistics"
                  active={activeItem === "statistics"}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/statistics"
                >
                  List Bills
                </Menu.Item>

                <Menu.Item
                  name="list-bills"
                  active={activeItem === "list-bills"}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/"
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
            <Route path="/new-bill">
              <About />
            </Route>
            <Route path="/statistics">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.authReducer
});

export default connect(mapStateToProps)(App);

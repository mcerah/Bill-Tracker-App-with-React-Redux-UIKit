import React from "react";
import { Grid, Form, Button, Message, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn } from "../actions//authAction";

export class SignIn extends React.Component {
  state = { username: "", password: "" };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Grid centered>
        <Grid.Row stretched centered>
          <Grid.Column width={6}>
            <Segment padded="very">
              Leave blank to sign-in, type some input to get error.
            </Segment>
            <Form error={this.props.signinError}>
              <Form.Input
                name="username"
                fluid
                label="Username"
                placeholder="Username"
                id="form-input-first-name"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <Form.Input
                name="password"
                fluid
                label="Password"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Message
                error
                header="Sign in Error!"
                list={[this.props.signinError]}
              />
              <Button
                type="submit"
                onClick={() => {
                  this.props.signIn(this.state.username, this.state.password);
                }}
              >
                Submit
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.authReducer,
  signinError: state.errorsReducer.signinError
});

const mapDispatchToProps = {
  signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

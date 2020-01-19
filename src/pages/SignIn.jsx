import React from "react";
import { Grid, Form, Button, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn } from "../actions//authAction";

export class SignIn extends React.Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <Grid columns="equal">
        <Grid.Row stretched>
          <Grid.Column></Grid.Column>
          <Grid.Column width={6}>
            <Form error={this.props.signinError}>
              <Form.Input
                error={{
                  content: "Please enter your first name",
                  pointing: "below"
                }}
                fluid
                label="Username"
                placeholder="Username"
                id="form-input-first-name"
              />
              <Form.Input
                error="Please enter your last name"
                fluid
                label="Password"
                placeholder="Password"
                type="password"
              />
              <Message
                error
                header="Sign in Error!"
                list={[this.props.signinError]}
              />
              <Button
                type="submit"
                onClick={() => {
                  this.props.signIn("", "");
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

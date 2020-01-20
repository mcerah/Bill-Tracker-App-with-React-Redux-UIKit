import React from "react";
import { Grid, Form, Button, Card, Divider, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { getBills } from "../actions//billAction";

export class MyBills extends React.Component {
  state = {};

  componentDidMount() {
    if (this.props.mybills.length == 0) this.props.getBills();
  }

  render() {
    return (
      <Grid centered>
        <Grid.Row stretched centered>
          <Grid.Column width={6}>
            <Divider horizontal>
              <Header as="h4">Over Due</Header>
            </Divider>
            {this.props.mybills.map(bill => {
              if (new Date(bill.dueDate) > new Date()) return null;
              return (
                <Card
                  key={bill.id}
                  header={bill.title}
                  meta={bill.dueDate}
                  description={bill.description}
                />
              );
            })}
            <Divider horizontal>
              <Header as="h4">Upcoming</Header>
            </Divider>
            {this.props.mybills.map(bill => {
              const diffDateInDays =
                (new Date(bill.dueDate) - new Date()) / 100000000;
              if (diffDateInDays > 8 || diffDateInDays < 0) return null;
              return (
                <Card
                  key={bill.id}
                  header={bill.title}
                  meta={bill.dueDate}
                  description={bill.description}
                />
              );
            })}
            <Divider horizontal>
              <Header as="h4">Later</Header>
            </Divider>
            {this.props.mybills.map(bill => {
              const diffDateInDays =
                (new Date(bill.dueDate) - new Date()) / 100000000;
              if (diffDateInDays < 8) return null;
              return (
                <Card
                  key={bill.id}
                  header={bill.title}
                  meta={bill.dueDate}
                  description={bill.description}
                />
              );
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  mybills: state.billReducer.bills
});

const mapDispatchToProps = {
  getBills
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBills);

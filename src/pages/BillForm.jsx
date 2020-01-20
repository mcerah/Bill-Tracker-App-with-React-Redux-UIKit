import React from "react";
import { Select, Form, Container, Button, Grid } from "semantic-ui-react";

import { DateInput } from "semantic-ui-calendar-react";
import uuid from "react-uuid";
import { addBill } from "../actions/billAction";
import { connect } from "react-redux";

export class BillForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      amount: "",
      title: "",
      description: "",
      category: "",
      errorMesage: {
        errorDate: "",
        errorAmount: "",
        errorTitle: "",
        errorCategory: ""
      }
    };
  }

  handleChange = e => {
    if (this.state.hasOwnProperty(e.target.name)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  onSubmit = e => {
    const { amount, category, date, title, description } = this.state;
    const errorMesage = { ...this.state.errorMesage };
    e.preventDefault();

    if (!amount) {
      errorMesage.errorAmount = "error";
      this.setState({ errorMesage });
    } else {
      errorMesage.errorAmount = "";
      this.setState({ errorMesage });
    }
    if (!title) {
      errorMesage.errorTitle = "error";
      this.setState({ errorMesage });
    } else {
      errorMesage.errorTitle = "";
      this.setState({ errorMesage });
    }
    if (!category) {
      errorMesage.errorCategory = "error";
      this.setState({ errorMesage });
    } else {
      errorMesage.errorCategory = "";
      this.setState({ errorMesage });
    }
    if (!date) {
      errorMesage.errorDate = "error";
      this.setState({ errorMesage });
    } else {
      errorMesage.errorDate = "";
      this.setState({ errorMesage });
    }

    if (amount && category && title && date) {
      this.props.addBill({
        id: uuid(),
        title: title,
        description: description,
        amount: amount,
        dueDate: date,
        category: category
      });

      this.setState({
        date: "",
        amount: "",
        title: "",
        description: "",
        category: ""
      });
    }
  };

  render() {
    const options = [
      { key: "s", text: "Service", value: 1 },
      { key: "f", text: "Food", value: 2 },
      { key: "p", text: "Personel", value: 3 }
    ];
    return (
      <Grid centered>
        <Grid.Row stretched centered>
          <Grid.Column width={6}>
            <Container>
              <Form className="ui form">
                <Form.Field error={this.state.errorMesage.errorTitle}>
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    name="title"
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Description"
                    value={this.state.description}
                    name="description"
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field error={this.state.errorMesage.errorAmount}>
                  <label>Amount</label>
                  <input
                    name="amount"
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field error={this.state.errorMesage.errorCategory}>
                  <Form.Select
                    onChange={(e, data) => {
                      this.setState({ category: data.value });
                    }}
                    control={Select}
                    label="Category"
                    options={options}
                    placeholder="Category"
                  ></Form.Select>
                </Form.Field>
                <Form.Field error={this.state.errorMesage.errorDate}>
                  <label>Date</label>
                  <DateInput
                    name="date"
                    placeholder="Date"
                    value={this.state.date}
                    iconPosition="left"
                    onChange={(e, { name, value }) => {
                      this.setState({ [name]: value });
                    }}
                    closable
                    dateFormat="YYYY-MM-DD"
                  />
                </Form.Field>

                <Button
                  className="ui button primary"
                  type="submit"
                  onClick={e => this.onSubmit(e)}
                >
                  Submit
                </Button>
              </Form>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  addBill
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillForm);

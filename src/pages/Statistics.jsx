import React from "react";
import { Grid } from "semantic-ui-react";
import { Chart } from "react-google-charts";

export default class Statistics extends React.Component {
  state = {};

  render() {
    return (
      <Grid centered>
        <Grid.Row stretched centered>
          <Grid.Column width={6}>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Category", "Hours per Day"],
                ["Service", 45],
                ["Food", 22],
                ["Personel", 10]
              ]}
              options={{
                title: "Caegory based distribution"
              }}
              rootProps={{ "data-testid": "1" }}
            />

            <Chart
              width={"500px"}
              height={"300px"}
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={[
                ["Month", "Service", "Food", "Personel"],
                ["Junuary", 1000, 400, 200],
                ["February", 1170, 460, 250],
                ["March", 660, 1120, 300],
                ["April", 1030, 540, 350]
              ]}
              options={{
                // Material design options
                chart: {
                  title: "Category Based Monthly Expenses",
                  subtitle: "Service, Food, and Personel: Junuary-April"
                }
              }}
              // For tests
              rootProps={{ "data-testid": "2" }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

import React from "react";
import dynamic from 'next/dynamic';
import Plot from 'react-plotly.js';
import { formatTimeDateYear} from "../../Util/format";

interface priceChartType {
  priceChartXValues: any,
  priceChartYValues: any
}

let getTotalIndex;
let coinID = 'cosmos'

class PriceChart extends React.Component<{}, priceChartType> {
    constructor(props) {
        super(props);
        this.state = {
            priceChartXValues: [],
            priceChartYValues: [],
        }
    }

    componentDidMount() {
        this.fetchPrice();
    }

    fetchPrice() {
        const pointerToThis = this;
        let API_Call = `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=1`;
        let priceChartXValuesFunction = [];
        let priceChartYValuesFunction = [];

        fetch(API_Call)
          .then(
            function(response) {
                return response.json();
            }
          )
          .then(
            function(data) {
               for (var item in data.prices) {
                 priceChartXValuesFunction.push(formatTimeDateYear(data.prices[item][0]))
                 priceChartYValuesFunction.push(data.prices[item][1])
                 getTotalIndex = item
               } 
               
              pointerToThis.setState({
                priceChartXValues: priceChartXValuesFunction,
                priceChartYValues: priceChartYValuesFunction
              })
            }
          ) 
    }

    render() {
      return (
        <div className="container" >
         <Plot
          data={[
            {
              x: this.state.priceChartXValues,
              y: this.state.priceChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'blue'},
            },
          ]}
          layout={{ 
            xaxis: {title: 'Time',
            tickformat: '%',
            //type: this.state.priceChartXValues,
            tickvals: [this.state.priceChartXValues[0], this.state.priceChartXValues[Math.round(getTotalIndex/2)],  this.state.priceChartXValues.slice(-1)],
            showline:true,
          },
            yaxis: {title: 'Price in USD'},
            title: 'Price Chart',
            autosize: true
        }}
          useResizeHandler= {true}
          style ={{width: "100%", height: "100%"}}
        />
        </div>
        
      );
    }
}

export default PriceChart;
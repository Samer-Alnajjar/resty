import React, { Component } from 'react';
import { If, Then, Else } from '../If'; //'react-if'
import ReactJson from 'react-json-view';


class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiMemoryData: JSON.parse(localStorage.getItem("API data")) || [],
      body: []
    }
  }

  handleAPI = (data) => {
    this.setState({ body: data });
  }

  render() {
    return (
      <>
        <If condition={this.state.apiMemoryData.length}>
          <Then>
            {this.state.apiMemoryData.map((apiData, index) => {
              return (
                <div onClick={() => { this.handleAPI(apiData) }} key={index}>
                  {apiData.method} {apiData.URL}
                  <button onClick={() => {
                    this.props.history.push("/",{
                      method: apiData.method,
                      URL: apiData.URL
                    })
                  }}>Re-Run</button>
                </div>
              )
            })}
          </Then>
        </If>
        <div id="api">
          <If condition={!this.state.body || this.state.body.length === 0}>
            <Then>
              <div>No data available </div>
            </Then>
            <Else>
              <ReactJson src={this.state.body} name={false} theme="rjv-default" />
            </Else>
          </If>
        </div>
      </>
    )
  }

}

export default HistoryPage
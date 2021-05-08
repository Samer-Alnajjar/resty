import React, { component } from 'react'
import Form from '../Form/Form.js';
import Results from '../Results/Results.js';
import History from '../History/History.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      header: {},
      callback: {},
      loading: false,
      history: JSON.parse(localStorage.getItem("API data")) || []
    }
  }

  updateState = (results) => {
    console.log(results);
    this.setState({ header: results.header, count: results.count, results: results.data })
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  historyStorage = (data) => {
    let arr = this.state.history.filter((element) => {
      return data.method === element.method && data.url === element.url;
    });
    if (!arr.length) {
      this.setState({ history: [...this.state.history, data] });
      localStorage.setItem("API data", JSON.stringify(this.state.history));
    }
  }

  callback = (api) => {
    this.setState({ callback: api })
  }

  componentDidMount() {
    let memory = JSON.parse(localStorage.getItem("API data"));
    memory && this.setState({memory});
  }

  render() {

    return (
      <>
        <Form
          updateState={this.updateState}
          toggle={this.toggleLoading}
          storage={this.historyStorage}
          api={this.state.callback}
          reRun = {this.props.location?.state}
        />
        <Results APIData={this.state} Loading={this.state.loading} />
        <div id="history">
          <h3>History</h3>
          <History calls={this.state.history} callback={this.callback} />
        </div>
      </>
    );
  }

}


export default App;


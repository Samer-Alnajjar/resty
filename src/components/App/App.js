
import './App.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Form from '../Form/Form.js'
import React from 'react';
import Results from '../Results/Results';
import { logDOM } from '@testing-library/dom';
import History from "../History/History"

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
    this.setState({ history: [...this.state.history, data] });
    localStorage.setItem("API data", JSON.stringify(this.state.history));
  }

  callback = (api) => {
    this.setState({callback : api})
  }

  render() {
    return (
      <>
        <Header />
        <Form
          updateState={this.updateState}
          toggle={this.toggleLoading}
          storage={this.historyStorage}
          api = {this.state.callback}
          />
        <Results APIData={this.state} Loading={this.state.loading} />
        <div id="history">
          <h3>History</h3>
        <History calls={this.state.history} callback={this.callback}/>
        </div>
        <Footer />
      </>
    );
  }

}

export default App;

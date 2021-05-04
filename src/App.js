
import './App.scss';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js'
import React from 'react';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      header: {}
    }
  }

  updateState = (results) => {
    console.log(results);
    this.setState({ header: results.header, count: results.count, results: results.data })
  }
  render() {
    return (
      <>
        <Header />
        <Form updateState = {this.updateState}/>
        <Results APIData = {this.state} />
        <Footer />
      </>
    );
  }

}

export default App;

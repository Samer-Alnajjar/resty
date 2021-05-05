
import './App.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import React from 'react';
import Main from "../Main/Main.js"

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }

}

export default App;

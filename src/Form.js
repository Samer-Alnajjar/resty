import React from 'react'; 
import './Form.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
      method: ""
    }
  }
  handleClick = (e) => {
    e.preventDefault()
    const URL = e.target.URL.value;
    const method = e.target.method.value;
    this.setState({ URL, method })
  }
  render() {
    return (
      <main>
        <form onSubmit={this.handleClick}>
          <label htmlFor="url">URL : </label>
          <input type="text" name="URL" id="url" />
          <button type="submit">GO!</button>
          <br />
          <input type="radio" name="method" value="get" id="get" />
          <label htmlFor="get" className="method">GET</label>
          <input type="radio" name="method" value="post" id="post" />
          <label htmlFor="post" className="method">POST</label>
          <input type="radio" name="method" value="put" id="put" />
          <label htmlFor="put" className="method">PUT</label>
          <input type="radio" name="method" value="delete" id="delete" />
          <label htmlFor="delete" className="method">DELETE</label>
        </form>
        <section>
          <span>{this.state.method}</span>  <span>{this.state.URL}</span>
        </section>
      </main>
    )
  }
}

export default Main;
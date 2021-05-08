import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = async (e) => {
    e.preventDefault()
    const URL = e.target.URL.value;
    const method = e.target.method.value;
    const body = e.target.body.value;

    try {
      if (method === "GET") {
        this.props.toggle();
        let header;
        const raw = await fetch(URL);
        raw.headers.forEach((val, key) => { header = key + ' : ' + val });
        const data = await raw.json();
        this.props.updateState({ data, header, count: data.count })
        this.props.storage({ URL, method, data})
        this.props.toggle();
      } else {
        this.props.toggle();
        let header;
        const raw = await fetch(URL, {
          method: method,
          body: JSON.stringify(body)
        });
        raw.headers.forEach((val, key) => { header = key + ' : ' + val });
        const data = await raw.json();
        this.props.updateState({ data, header, count: data.count });
        this.props.storage({ URL, method, data})
        this.props.toggle();
      }
    } catch (error) {
      console.error(error);
    }
    // this.setState({ URL, method })
  }

  componentDidMount() {
    if( this.props.reRun) {
      let input = document.getElementById(this.props.reRun.method.toLowerCase());
      input.checked = true;
    }
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleClick}>
          <label htmlFor="url">URL : </label>
          <input type="url" name="URL" id="url" required defaultValue = {this.props.api.URL ||this.props.reRun?.URL} />
          <button type="submit">GO!</button>
          <br />
          <input type="radio" name="method" value={"GET" || this.props.api.method} id="get" defaultChecked />
          <label htmlFor="get" className="method">GET</label>
          <input type="radio" name="method" value="POST" id="post" />
          <label htmlFor="post" className="method">POST</label>
          <input type="radio" name="method" value="PUT" id="put" />
          <label htmlFor="put" className="method">PUT</label>
          <input type="radio" name="method" value="DELETE" id="delete" />
          <label htmlFor="delete" className="method">DELETE</label>
          <textarea name="body" id="" cols="30" rows="5"></textarea>
        </form>
      </main>
    )
  }
}

export default Form;


// const Form = (props) => {


//   const clickHandler = async (e) => {
//       e.preventDefault();
//       try {
//           console.log('method', e.target.method.value);
//           console.log('url', e.target.url.value);
//           superagent[(e.target.method.value.toLowerCase())](e.target.url.value).then(data => {
//               console.log(data.body.results);
//               console.log(data.headers);
//               props.updateState({ data: data.body.results, headers: data.headers, count: data.body.count , method : e.target.method.value , url:  e.target.url.value})
//           })

//       } catch (error) {
//           console.error(error)
//       }
//   }
// }
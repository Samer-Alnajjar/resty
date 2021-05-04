import React from 'react';
import './Form.scss';

function Form(props) {
  const handleClick = async (e) => {
    e.preventDefault()
    const URL = e.target.URL.value;
    // const method = e.target.method.value;

    try {
      let header;
      const raw = await fetch(URL);
      // console.log("raw", raw);
      raw.headers.forEach((val, key) => { header = key + ' : ' + val });
      const data = await raw.json();
      props.updateState({ data, header, count: data.count })
    } catch (error) {
      console.error(error);
    }
    // this.setState({ URL, method })
  }

  return (
    <main>
      <form onSubmit={handleClick}>
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
    </main>
  )
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
import ReactJson from 'react-json-view';
import "./Results.scss"

const Results = (props) => {
  console.log("my result", props );
  if(props.APIData.count === 0) {
    return (
      <div id="api"></div>
    )
  } else {
    return (
      <div id="api">
        <ReactJson src={{Headers : props.APIData.header}} name={false} theme="rjv-default" />
        <ReactJson src={props.APIData} name="Response" theme="rjv-default" />
      </div>
    );
  }
}
export default Results; 




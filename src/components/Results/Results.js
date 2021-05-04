import ReactJson from 'react-json-view';
import { If, Then, Else } from '../If'; //'react-if'
import "./Results.scss"

const Results = (props) => {
  return (
    <div id="api">
      <If condition={props.Loading}>
        <Then>
          <div>Loading... </div>
        </Then>
        <Else>
          <ReactJson src={{ Headers: props.APIData.headers }} name={false} theme="rjv-default" />
          <ReactJson src={props.APIData} name="Response" theme="rjv-default" />
        </Else>
        </If>
      </div>
    );
}
export default Results;




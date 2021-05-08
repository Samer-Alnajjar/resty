import { If, Else, Then } from "../If";

const History = (props) => {
  function handleAPI(e) {
    let [method, URL] = (e.target.innerText).split(" ");
    props.callback({ method, URL })
    // console.log(method, URL)
  }
  return (
    <If condition={props.calls.length}>
      <Then>
        {props.calls.map((api, index) => {
          console.log(api.method, api.URL);
          return (
            <div onClick={handleAPI} key={index}>
              {api.method} {api.URL}
             
            </div>
          )
        })}
      </Then>
    </If>
  )
}

export default History;
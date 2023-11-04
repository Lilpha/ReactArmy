import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// useEffect 는 2개의 argu를 가진다. 우선 render상황에서도 한번만 실행하게 도와주는 함수
//만약 App 함수안에 api호출이 있는데, 안에 state의 변경으로 인해 App을 재호출하게 되면 자연스레 느려짐.
//방지하기 위해 useEffect 사용하는것임
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <img  src= {require("./images/A.jpg")}/>
  );
}

export default App;

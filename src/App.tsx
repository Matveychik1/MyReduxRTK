import './App.css'
import {useSelector} from "react-redux";

function App() {
    const {value: counter} = useSelector(store => store.counter);

console.log("sore counter:"+ counter);
  return (
    <>
     <h1>(.)(.)(.)(.)(.)</h1>
        <h2>Counter: {counter}</h2>
    </>
  )
}

export default App

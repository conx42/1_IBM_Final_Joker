import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";

function App() {
  const data = JSON.parse(localStorage.getItem("userData"));
  console.log(data);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(<Route path="/" element={<Register />}></Route>)
  // );

  return (
    <div id="container">
      {data ? <Home /> : <Register />}
    </div>

    // <div className="App"></div>
  );
}

export default App;

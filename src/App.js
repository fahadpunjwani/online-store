import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstScreen from "./components/first screen/FirstScreen";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default App;

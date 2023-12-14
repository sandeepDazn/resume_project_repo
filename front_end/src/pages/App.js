import Apps from "../components/App";
import { Routes,Route} from "react-router-dom";
import Registration from "./RegistrationComponent";
import LogIn from "./LoginComponent";
import StepperUi from "./TestingStepper";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/resume" element={<Apps/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/stepper" element={<StepperUi/>}/>
      </Routes>
    </div>
  );
}

export default App;

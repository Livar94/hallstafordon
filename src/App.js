import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import SoldCar from "../src/components/SoldCar";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/salj" element={<SoldCar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

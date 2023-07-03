import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* Import Navbar.jsx */}
      <Navbar/>
      {/* Import AllRoutes.jsx */}
      <AllRoutes />
    </div>
  );
}

export default App;

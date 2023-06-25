import "./App.css";
import {Stack} from '@chakra-ui/react'
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

  return (
    <Stack spacing={5} p={5} className="App">
      <Navbar />
      <Dashboard />
    </Stack>
  );
}

export default App;

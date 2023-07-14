import Restaurants from "./pages/Restaurants"
import "./styles.css"
import { Routes, Route, Link } from "react-router-dom"
import AddRestaurant from "./pages/AddRestaurant"
import EditRestaurant from "./pages/EditRestaurant"

export default function App (){
  return (
    <div className="App">
      {/* Navbar Start */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">HOME</Link>
        <Link to="/addrestaurant">ADD RESTAURANT</Link>
      </div>
      {/* Navbar end */}
      {/*  */}

      {/*  All Routes  */}
      <Routes>
        <Route path="/" element={<Restaurants />} />  {/* HOME*/}
        <Route path="/addrestaurant" element={<AddRestaurant />} />
        <Route path="/restaurants/:id" element={<EditRestaurant />} />
      </Routes>
    </div>
  )
}

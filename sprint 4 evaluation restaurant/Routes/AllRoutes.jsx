import {Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import RestaurantPage from '../Pages/RestaurantPage';

const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/restaurant/:id' element={<RestaurantPage />} />
    </Routes>
  </div>;
};

export default AllRoutes;

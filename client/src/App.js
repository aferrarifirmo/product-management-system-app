import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
          >
        </Route>
        <Route
          path='/new'
          element={<NewProduct />}
          >
        </Route>
        <Route
          path='/farm/:trackId'
          element={<ProductDetails />}
          >
        </Route>
      </Routes>
    </div>
  );
}

export default App;

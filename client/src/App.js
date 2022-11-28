import { Route, Routes } from 'react-router-dom';
import { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import ProductDetails from './pages/ProductDetails';

function App() {

  const [trackId, setTrackId] = useState();

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home setTrackId={setTrackId}/>}
          >
        </Route>
        <Route
          path='/new'
          element={<NewProduct />}
          >
        </Route>
        <Route
          path='/farm'
          element={<ProductDetails trackId={trackId}/>}
          >
        </Route>
      </Routes>
    </div>
  );
}

export default App;

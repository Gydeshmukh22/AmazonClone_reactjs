
import './App.css';
import CheckOut from './Pages/CheckOut';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/checkOutPage' element={<CheckOut />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <CheckOut /> */}
    </div>
  );
}




export default App;

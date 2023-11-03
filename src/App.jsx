import './App.css'
import Header from './components/header/Header'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import New from './pages/news/New'
import Home from './pages/Home/Home'
import Checkout from './pages/checkout/Checkout'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (

      <Router>
        <div className='container'>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/new" element={<New />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </div>
      </Router>
  )
}

export default App
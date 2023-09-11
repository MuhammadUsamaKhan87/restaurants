import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Navbar'
import Main from './Components/Mainpage/Main';
import About from './Components/AboutUs/About';
import Menu from './Components/Menu/MainMenu'
import Contact from './Components/ContactUs/Contact';
import Footer from './Components/Footer';
import Order from './Components/Menu/Order';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/menu/order/:id' element={<Order />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NewVideo from './pages/NewVideo';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
     });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/novo-video' element={<NewVideo/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;

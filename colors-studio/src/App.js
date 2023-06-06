import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NewVideo from './pages/NewVideo';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
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

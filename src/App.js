import './App.css';
import Footer from './Componants/Footer/Footer';
import Home from './Componants/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Resume from './Componants/Resume/Resume';


function App() {
  return (
    <>

      <Routes>
         <Route path='/Home' element={<Home />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;

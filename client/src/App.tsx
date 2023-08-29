import './App.css';
import Coasters from './pages/coasters/Coasters';

import { Routes, Route } from 'react-router-dom';
import CoasterDetail from './pages/coasterDetail/CoasterDetail';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import ModalController from './modals/controller/ModalController';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <ModalProvider>
        <main>
          <Main />
          <Routes>
            <Route path='/coasters' element={<Coasters />} />
            <Route path='/coaster/:coaster_id' element={<CoasterDetail />} />
          </Routes>
          <ModalController />
        </main>
      </ModalProvider>
    </div>
  );
}

export default App;

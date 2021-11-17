import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'

function App() {
  const [isOpen, setOpen] = useState<boolean>(true);
  
  return (
    <div className="app">
      
      <Navbar setOpen={setOpen} />
      <Sidebar isOpen={isOpen} />

      <main className={`main-app ${!isOpen ? 'is-open' : ''}`}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged, User } from '@firebase/auth'

import { auth } from './firestore'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'

function App() {
  const [isOpen, setOpen] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser(null);
          }
      });
  }, [])
  
  return (
    <div className="app">
      
      <Navbar setOpen={setOpen} user={user} />
      <Sidebar isOpen={isOpen} user={user} />

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

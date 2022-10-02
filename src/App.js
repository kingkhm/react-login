import './App.css';
import Login from './components/Login';
import AddUser from './components/AddUser';
import Edit from './components/Edit';

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;


import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';
import UserContext from './Components/usercontext'; 

function App() {
  const [users, setUsers] = useState([{ name: 'Belinda', email: 'me@gmail.com', password: 'password', balance: 100 }]);
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UserContext.Provider value={{ users, setUsers, show, setShow, status, setStatus, name, setName, email, setEmail, password, setPassword }}>
      <Router>
        <Navbar/> 
        <Routes> {/* React Router v6 */}
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<AllData />} />
        </Routes>
      </Router>
      </UserContext.Provider>
  );
}

export default App;

// import React from 'react';
import React, { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import bankImage from './Assets/bank.png'; 
import UserContext from './usercontext';

function Home() {
  const { users, setUsers } = useContext(UserContext);
 

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', // Stack vertically
      alignItems: 'center', // Center horizontally
      justifyContent: 'center', // Center vertically
      minHeight: '100vh', // Full screen height
    }}>
      
      <Card bg="light" text="dark" style={{ width: '18rem' }}> 
        <Card.Header>Belinda'a Bad Bank </Card.Header>
        <Card.Body>
          <Card.Title>Welcome to the bank</Card.Title>
          <br></br>
          <Card.Text>
            Open a savings account today!
          </Card.Text>
          <img src={bankImage} className="img-fluid" alt="Responsive image" />
        </Card.Body>
      </Card>
      </div>
  );  

}

export default Home;
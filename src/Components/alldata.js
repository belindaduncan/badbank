import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import UserContext from './usercontext';

function AllData() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h2>All Data</h2>
      {users.length > 0 ? (
        users.map((user, index) => (
          <Card className="mb-3" key={index} style={{ width: '18rem', margin: 'auto', marginTop: '1rem' }}>
            <Card.Header>User {index + 1}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Email: {user.email}</ListGroup.Item>
              <ListGroup.Item>Name: {user.name}</ListGroup.Item>
              <ListGroup.Item>Password: {user.password}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))
      ) : (
        <Card style={{ width: '18rem', margin: 'auto', marginTop: '1rem' }}>
          <Card.Body>No users found.</Card.Body>
        </Card>
      )}
    </div>
  );
}

export default AllData;
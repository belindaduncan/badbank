import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import UserContext from './usercontext'; // Adjust the path as necessary

function Deposit() {
  const { users, setUsers } = useContext(UserContext);
  const [depositAmount, setDepositAmount] = useState('');
  const [error, setError] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    const amountToDeposit = parseFloat(depositAmount);
    if (isNaN(amountToDeposit)) {
      setError('Please enter a valid number.');
      return;
    } else if (amountToDeposit <= 0) {
      setError('Deposit amount must be greater than zero.');
      return;
    }

    // Assuming the first user is the one making the deposit
    const updatedUsers = users.map((user, index) => {
      if (index === 0) { // Assuming you're updating the first user
        return { ...user, balance: user.balance + amountToDeposit };
      }
      return user;
    });
    setUsers(updatedUsers);
    setDepositAmount(''); // Clear the deposit amount field
    setError(''); // Clear any error messages
  };

  // Assuming the first user's balance is what you want to display
  const balance = users[0] ? users[0].balance : 0;
  const isInputEmpty = depositAmount === '';

  return (
    <Card className="text-left" bg="warning" text='muted' style={{ width: '18rem', margin: 'auto', marginTop: '5rem'}}>
      <Card.Header>Deposit</Card.Header>
      <Card.Body>
        <Card.Title>Balance</Card.Title>
        <Card.Text>${balance.toFixed(2)}</Card.Text>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleDeposit}>
          <Form.Group>
            <Form.Label>Deposit Amount</Form.Label>
            <Form.Control
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter deposit amount"
            />
          </Form.Group>
          <Button variant="success" type="submit" disabled={isInputEmpty}>Deposit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Deposit;
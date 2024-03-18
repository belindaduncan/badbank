import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import UserContext from './usercontext'; // Make sure this path is correct

function Withdraw() {
  const { users, setUsers } = useContext(UserContext);
  const [withdraw, setWithdrawAmount] = useState('');
  const [error, setError] = useState('');

  const handleWithdraw = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    const amountToWithdraw = parseFloat(withdraw);
    if (!isNaN(amountToWithdraw) && amountToWithdraw > 0) {
      if (amountToWithdraw <= users[0].balance) {
        // Update the balance for the first user in the users array
        const updatedUsers = users.map((user, index) => {
          if (index === 0) { // Assuming you want to withdraw from the first user
            return { ...user, balance: user.balance - amountToWithdraw };
          } else {
            return user;
          }
        });
        setUsers(updatedUsers);
        setWithdrawAmount(''); // Clear the input field
        setError(''); // Clear any previous error
      } else {
        // Handle insufficient funds
        setError('Insufficient funds for this withdrawal.');
      }
    } else {
      // Handle invalid input
      setError('Please enter a valid withdrawal amount.');
    }
  };

  // Assuming you want to show the balance for the first user in the users array
  const balance = users[0].balance;
  const isInputEmpty = withdraw.trim() === '';

  return (
    <Card className="text-left" bg="info" text='muted' style={{ width: '18rem', margin: 'auto', marginTop: '5rem' }}>
      <Card.Header>Withdraw</Card.Header>
      <Card.Body>
        <Card.Title>Balance</Card.Title>
        <Card.Text>${balance.toFixed(2)}</Card.Text>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleWithdraw}>
          <Form.Group>
            <Form.Label>Withdraw Amount</Form.Label>
            <Form.Control
              type="number"
              value={withdraw}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Enter amount to withdraw"
            />
          </Form.Group>
          <Button variant="success" type="submit" disabled={isInputEmpty}>Withdraw</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Withdraw;
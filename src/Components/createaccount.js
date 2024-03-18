import React, { useState, useContext } from 'react';
import UserContext from './usercontext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateAccount() {
  const { users, setUsers } = useContext(UserContext) || { users: [], setUsers: () => console.warn('setUsers is not available') };
  
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label} is required`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (label === 'password' && field.length < 8) {
      setStatus('Error: Password must be at least 8 characters long');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name') || !validate(email, 'email') || !validate(password, 'password')) return;
  
    try {
      setUsers(prevUsers => [...prevUsers, {name, email, password, balance: 100}]);
      setShow(false);
    } catch (error) {
      console.error('Failed to set users:', error);
      setStatus('Failed to create account. Please try again.');
    }
  }   

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setStatus('')
    setShow(true);
  }

  const isFormIncomplete = name === '' || email === '' || password === '';

  return (
    <Card className="text-center" bg="primary" text= 'light' style={{ width: '18rem', margin: 'auto', marginTop: '5rem' }}>
      <Card.Header>Create Account</Card.Header>
      <Card.Body>
        {show ? (
          <>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="input" value={name}  placeholder="Enter name" onChange={e => setName(e.currentTarget.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="input" value={email}  placeholder="Enter email" onChange={e => setEmail(e.currentTarget.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="input" value={password} onChange={e => setPassword(e.currentTarget.value)} placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" onClick={handleCreate} disabled={isFormIncomplete}>Create Account</Button>
            {status && <div className="text-danger"><h5>{status}</h5></div>}
          </>
        ) : (
          <>
            <h5>Success</h5>
            <Button className="btn btn-primary" onClick={clearForm}>Add another account</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CreateAccount;
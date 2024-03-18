import React from 'react';


const UserContext = React.createContext({
  users: [],
  setUsers: () => {} 
});

export default UserContext;

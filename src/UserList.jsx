import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">List of Users <FontAwesomeIcon icon={faUser} /></h1>
      <div className="list-group">
        {listOfUsers.map(user => (
          <a href="#" className="list-group-item list-group-item-action" key={user.id}>
            <FontAwesomeIcon icon={faUser}  className="mr-2" />
            {user.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserList;


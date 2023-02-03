import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import DetailCard from '../components/DetailCard'

const UserDetails = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { id } = useParams();

  const rootURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(`${rootURL}/${id}`);
      setSelectedUser(result.data);
    };
    fetchUsers();
  }, [id]);

  if (!selectedUser) return null;
  return (
    <>
     <DetailCard key={selectedUser.id} selectedUser={selectedUser}/>
    </>
  );
};

export default UserDetails;

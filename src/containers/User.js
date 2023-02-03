import React from "react";
import Card from "../components/Card";

const User = ({ users }) => {
  return (
    <>
      <div className="row gutters-sm">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default User;

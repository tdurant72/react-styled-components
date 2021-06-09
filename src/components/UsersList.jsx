import React, { useEffect, useState } from "react";
import GridWrapper from "./GridWrapper";
import UserItem from "./UserItem";
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await (await fetch("https://api.github.com/users")).json();
        setUsers(data);
        console.log("users", users);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUsers();
  }, []);

  return (
    <GridWrapper>
      {users.map((user) => (
        <UserItem key={user.id} data={user} />
      ))}
    </GridWrapper>
  );
}
export default UsersList;

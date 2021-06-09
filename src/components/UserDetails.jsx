import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Avatar from "./Avatar";
export default function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await (
          await fetch(`https://api.github.com/users/${userId}`)
        ).json();
        setUser(data);
        console.log("user", user);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUser();
  }, [userId]);
  return (
    <>
      <Link to="/">Go back to Home</Link>
      {user ? (
        <div>
          <Avatar
            imageUrl={user.avatar_url}
            username={user.login}
            href={user.html_url}
          />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

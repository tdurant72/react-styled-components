import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Avatar from "./Avatar";
export default function UserItem({ data: { login, avatar_url, html_url } }) {
  return (
    <FadeIn>
      <Link to={`/user/${login}`}>
        <Avatar imageUrl={avatar_url} username={login} href={html_url} />
      </Link>
    </FadeIn>
  );
}

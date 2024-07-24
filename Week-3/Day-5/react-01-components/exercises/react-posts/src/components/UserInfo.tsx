import React from "react";

export default function UserInfo(props: any) {
  console.log("Props", props);
  return (
    <div className="user">
      <img
        className="user-image"
        src={props.props.author.avatarUrl}
        alt={props.props.author.name}
      />
      <div className="user-name">{props.props.author.name}</div>
    </div>
  );
}

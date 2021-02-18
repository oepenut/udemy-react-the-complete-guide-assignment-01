import React from 'react';

type Props = {
  username: string;
};

const UserOutput = (props: Props) => {
  const username = props.username;

  return (
    <div>
      <p>{username}</p>
      <p>P2</p>
    </div>
  );
};

export default UserOutput;

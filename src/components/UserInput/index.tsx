import React from 'react';

type Props = {
  username: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserInput = (props: Props) => {
  const { username, change } = props;

  return (
    <div>
      <input
        type="text"
        name="user"
        id="user"
        value={username}
        onChange={change}
      />
    </div>
  );
};

export default UserInput;

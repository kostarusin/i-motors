import React from 'react';

export interface UserNavProps {
  // Define any props for the component here, if needed.
}

const UserNav: React.FC<UserNavProps> = () => {
  return (
    <div>
      <ul className="flex text-transparent">
        <li>User</li>
        <li>Auth</li>
      </ul>
    </div>
  );
};

export default UserNav;

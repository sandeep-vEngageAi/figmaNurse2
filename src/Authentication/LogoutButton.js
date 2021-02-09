import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'devextreme-react/button';
function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Button 
    width={200}
    height={40}
    text="Logout"
    type="danger"
    // icon = {LogoutLogo}
    // stylingMode="text"
    onClick={() => {logout({ returnTo: window.location.origin });}} >Logout</Button>
    );
}

export default LogoutButton;
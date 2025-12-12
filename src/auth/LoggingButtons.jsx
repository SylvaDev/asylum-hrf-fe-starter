import { useAuth0 } from '@auth0/auth0-react';

/**
 * Ticket 3: Auth0 authentication implemented
 * - Login and logout functionality using Auth0 hooks
 */
export const LoggingButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  const handleLogging = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {buttonText}
    </button>
  );
};
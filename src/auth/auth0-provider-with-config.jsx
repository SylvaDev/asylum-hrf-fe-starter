import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWithConfig = ({ children, domain, clientId }) => {
  // For createBrowserRouter, we can't use useNavigate here since we wrap RouterProvider
  // Auth0 will redirect to the origin, and React Router will handle routing naturally
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        // Request user profile information
        scope: 'openid profile email'
      }}
      // Use localstorage for token caching
      cacheLocation="localstorage"
      // Use refresh tokens for better session management
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};
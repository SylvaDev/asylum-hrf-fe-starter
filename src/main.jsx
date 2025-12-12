import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProvideAppContext } from './context/AppContext.jsx';

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

/**
 * Ticket 3: Auth0 authentication implemented
 * - Wrapped ProvideAppContext with Auth0ProviderWithConfig (moved to App.jsx)
 * - Environment variables configured (VITE_AUTH_DOMAIN, VITE_AUTH_CLIENT_ID)
 * - Domain, clientId, and authorizationParams are set
 */
createRoot(document.getElementById('root')).render(
  <ProvideAppContext>
    <App domain={AUTH_DOMAIN} clientId={AUTH_CLIENT_ID} />
  </ProvideAppContext>
);

import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

/**
 * Ticket 3: Auth0 authentication implemented
 * - Gets user data from Auth0 using useAuth0 hook
 * - Styled component displaying user profile information
 * - Protected route (redirects to home if not authenticated)
 */
const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] p-8'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
        <div className='flex flex-col items-center mb-6'>
          {user.picture && (
            <img
              src={user.picture}
              alt={user.name || 'Profile'}
              className='w-32 h-32 rounded-full border-4 border-blue-500 mb-4'
            />
          )}
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>
            {user.name || 'User'}
          </h1>
          {user.email && (
            <p className='text-gray-600 text-lg'>{user.email}</p>
          )}
        </div>
        
        <div className='border-t border-gray-200 pt-6 mt-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Profile Information</h2>
          <div className='space-y-3'>
            {user.nickname && (
              <div className='flex justify-between'>
                <span className='text-gray-600 font-medium'>Nickname:</span>
                <span className='text-gray-800'>{user.nickname}</span>
              </div>
            )}
            {user.email_verified !== undefined && (
              <div className='flex justify-between'>
                <span className='text-gray-600 font-medium'>Email Verified:</span>
                <span className='text-gray-800'>
                  {user.email_verified ? '✓ Yes' : '✗ No'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

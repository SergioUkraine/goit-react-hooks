import { useContext } from 'react';
import ctx from '../../context/authContext';

function UserMenu() {
  const authContext = useContext(ctx);

  return (
    <div>
      <button type="button" onClick={authContext.logIn}>
        Log in
      </button>

      {authContext.user && (
        <>
          <button type="button" onClick={authContext.logOut}>
            Log out
          </button>
          <span>Welcome, {authContext.user} !</span>
        </>
      )}
    </div>
  );
}

export default UserMenu;

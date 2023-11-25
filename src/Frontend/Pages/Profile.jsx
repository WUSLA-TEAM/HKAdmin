import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser({
          uid: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Details</h2>
          <p>UID: {user.uid}</p>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          {user.photoURL && <img src={user.photoURL} alt="User" />}
        </div>
      ) : (
        <p>No user signed in</p>
      )}
    </div>
  );
}

export default Profile;

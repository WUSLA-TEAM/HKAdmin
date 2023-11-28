import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../Style/UseerDetails.scss";

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const unsubscribe = onSnapshot(collection(db, "user"), (snapshot) => {
      const userList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    });

    // Cleanup function to unsubscribe from the snapshot
    return () => unsubscribe();
  }, []);

  const deleteUser = (id) => {
    const db = getFirestore();
    deleteDoc(doc(collection(db, "user"), id))
      .then(() => console.log("User deleted"))
      .catch((error) => console.error("Error deleting user: ", error));
  };

  return (
    <div className="userDetails-box">
      <div className="wrapper">
        {users.map((user) => (
          <div key={user.id} className="container">
            <div className="content-item">
              <h2 className="userName">{user.name}</h2>
              <p className="userEmail">{user.email}</p>
              <p className="userPhone"> {user.phoneNumber}</p>
            </div>
            <Button
              onClick={() => deleteUser(user.id)}
              variant="outline-light"
              className="button-delete"
            >
              Delete User
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;

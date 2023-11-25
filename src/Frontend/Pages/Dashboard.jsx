import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  auth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "../../firebase";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        // Redirect to login if not logged in
        window.location.href = "/login";
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUsers = async () => {
    const db = getFirestore();
    const usersRef = collection(db, "user");
    const snapshot = await getDocs(usersRef);

    const fetchedUsers = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
      };
    });

    setUsers(fetchedUsers);
  };

  const handleAddUser = async () => {
    const db = getFirestore();
    const usersRef = collection(db, "user");

    const newUser = {
      name: newUserName,
      email: newUserEmail,
    };

    await addDoc(usersRef, newUser);
    fetchUsers();
    setShowAddUserModal(false);
    setNewUserName("");
    setNewUserEmail("");
  };

  const handleDeleteUser = async (userId) => {
    const db = getFirestore();
    const userRef = collection(db, "user", userId);

    await deleteDoc(userRef);
    fetchUsers();
  };

  const handleEditUser = async (userId, newName, newEmail) => {
    const db = getFirestore();
    const userRef = collection(db, "user", userId);

    await updateDoc(userRef, { name: newName, email: newEmail });
    fetchUsers();
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (!user) {
    return null; // Render nothing if the user is not authenticated
  }

  return (
    <>
      <h1>Admin Dashboard</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </Button>{" "}
                <Button
                  variant="info"
                  onClick={() => {
                    const newName = prompt("Enter new name:", user.name);
                    const newEmail = prompt("Enter new email:", user.email);
                    if (newName !== null && newEmail !== null) {
                      handleEditUser(user.id, newName, newEmail);
                    }
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => setShowAddUserModal(true)}>Add User</Button>
      <Button onClick={handleLogout}>Logout</Button>

      {/* Add User Modal */}
      <Modal show={showAddUserModal} onHide={() => setShowAddUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowAddUserModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dashboard;

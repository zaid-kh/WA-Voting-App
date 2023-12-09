import React, { useEffect, useState } from "react";
import { getUsers } from "../../APIs/users";

export const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Admin Page</h1>
      <section className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Voted</th>
            </tr>
          </thead>
          <tbody>
            {users ? (
              users.map((user) => {
                return <UserTableRow user={user} />;
              })
            ) : (
              <tr>
                <td colSpan="3">No users found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

function UserTableRow({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.voted ? "Voted" : "Not Voted"}</td>
    </tr>
  );
}

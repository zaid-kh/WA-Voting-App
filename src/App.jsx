import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./App.css";
import { getUsers } from "./APIs/users";
import { LogIn } from "./Pages/LogIn/LogIn";
import { Voting } from "./Pages/Voting/Voting";
import { Admin } from "./Pages/Admin/Admin";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "John Doe", isAdmin: true }); // Dummy user data for testing
  const [currentPage, setCurrentPage] = useState("");

  const handleLogout = () => {
    // Add logic for logging out
    setUser(null);
    setCurrentPage("");
  };

  // get users on page mount , to authenticate user
  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };
    fetchUsers();
  }, []);

  // todo: create components and display the main content using conditional rendering
  return (
    <>
      <Header
        user={user}
        isAdmin={user?.isAdmin}
        handleLogout={handleLogout}
        setCurrentPage={setCurrentPage}
      />
      {user ? (
        <>
          {currentPage === "voting" && <Voting />}
          {currentPage === "admin" && <Admin />}
        </>
      ) : (
        <LogIn />
      )}
      <Footer />
    </>
  );
}

export default App;

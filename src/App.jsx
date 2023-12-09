import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./App.css";
import { getUsers } from "./APIs/users";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState("");

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
      <Header setCurrentPage={setCurrentPage} />

      <Footer />
    </>
  );
}

export default App;

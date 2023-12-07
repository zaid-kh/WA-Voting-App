import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  // todo: create components and display the main content using conditional rendering
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      <Footer />
    </>
  );
}

export default App;

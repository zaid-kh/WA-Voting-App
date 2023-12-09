import React from "react";
import "./Header.css";

export const Header = ({ user, isAdmin, handleLogout, setCurrentPage }) => {
  const renderAdminLink = () => {
    if (isAdmin) {
      return (
        <button className="menu-item" onClick={() => setCurrentPage("admin")}>
          Admin
        </button>
      );
    }
    return null;
  };

  return (
    <header className="app-header">
      <div className="logo">
        <h1>Voter App</h1>
      </div>
      <nav className="main-nav">
        {user && (
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <div className="dropdown">
              <button className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <button
                  className="menu-item"
                  onClick={() => setCurrentPage("voting")}
                >
                  Vote
                </button>
                {renderAdminLink()}
                <button className="menu-item" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

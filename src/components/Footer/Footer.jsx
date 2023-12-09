import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="copyright">&copy; 2023 Zaid Khamis</section>
      <section className="mail-issues">
        <a href="mailto:zaidhkhamis@gmail.com?subject=Voting Site Issue">
          Having issues?
        </a>
      </section>
    </footer>
  );
};

import React from "react";

const NavBar = (setView) => {

  const ChangeToSalons = () => {
    setView('Salons');
  };

  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="styles.css" />
          <title>Barbershop App</title>
        </head>
        <body>
          <nav class="navbar">
            <div class="navbar-brand">
              <a href="#" class="logo">
                STYLE-SEAT
              </a>
            </div>
            <ul class="navbar-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href={ChangeToSalons}>Salons</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </nav>
        </body>
      </html>
    </div>
  );
};

export default NavBar;

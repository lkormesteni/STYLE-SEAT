import React from "react";

const Hero = () => {
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
          <nav class="navbar"></nav>

          <section class="hero">
            <div class="hero-content">
              <h1>Welcome to STYLESEAT</h1>
              <p>Save time and take an Appointment</p>
              <a href="#" class="cta-button">
                Go!
              </a>
            </div>
          </section>
        </body>
      </html>
    </div>
  );
};

export default Hero;

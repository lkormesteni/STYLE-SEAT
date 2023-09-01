import React, { useState } from "react";
import { useTheme } from "styled-components";
import emailjs from 'emailjs-com';
import Section from "@styled/Section";
import Icon from "@styled/Icon";
import Logo from "@components/Logo";
import Button from "@components/Button";

import * as S from "./footer.styled";

export default function Footer() {
  const theme = useTheme();

  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackError, setFeedbackError] = useState(false);

  // Function to handle form submission
  emailjs.init("F9-Upuzf0dxc80GKu")
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Send feedback using Email.js
    emailjs
      .send("service_z7nndkc", "template_modauag", {
        name,
        email,
        message,
      })
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFeedbackSent(true);
        setFeedbackError(false);
        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setFeedbackSent(false);
        setFeedbackError(true);
      });
  };

  return (
    <S.FooterSection background={theme.colors.dark} color={theme.colors.main}>
      <a name="contact" />
      <S.Footer>
        <S.Menu>
          <Logo />

          <S.Links>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </S.Links>
        </S.Menu>

        <S.Divider order={1} />

        <S.FeedbackForm id="feedback" onSubmit={handleFormSubmit}>
          <h2>Take an Appointment</h2>

          <S.Field>
            <label htmlFor="name" id="name">Name</label>
            <input
              type="text"
              placeholder="FullName"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </S.Field>

          <S.Field>
            <label htmlFor="email" id="email">E-mail</label>
            <input
              type="email"
              placeholder="Email address.."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Field>

          <S.Field>
            <label htmlFor="message" id="message">Message</label>
            <textarea
              rows="4"
              cols="22"
              name="message"
              form="feedback"
              placeholder="Text.."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </S.Field>

          <Button title="Welcome" />
        </S.FeedbackForm>

        <S.Divider order={-1} />

      </S.Footer>

      <S.Rights>
        <p className="rights">
          <span id="text-primary">StyleSeat</span> © {new Date().getFullYear()}{" "}
          All rights reserved.
        </p>

        <p className="developer">
		Developed by{" "}
          <a
            href="https://github.com/SoltaneKarim?tab=repositories"
            rel="noreferrer"
            target="_blank"
          >
            Karim Soltane

            <Icon sizes={24} src="/assets/icons/Github.svg" alt="github icon" />
          </a>
        </p>
      </S.Rights>
    </S.FooterSection>
  );
}
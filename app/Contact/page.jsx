"use client";

import React, { useState } from "react";
import {
  Container,
  FormPlaque,
  InputContainer,
  SendButton,
  WorkTogether,
} from "./pageStyle";
import validate from "./FormValidation";

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      name: "",
      phone: "",
      email: "",
      text: "",
    });
    alert("mail was created successfully!!");
  };

  return (
    <Container>
      <WorkTogether>¡I'm eager to work together!</WorkTogether>
      <FormPlaque>
        <InputContainer>
          <input
            id="inputname"
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
            title="name"
            placeholder="Name"
          />
        </InputContainer>
        <InputContainer>
          <input
            id="phone"
            type="text"
            value={input.phone}
            name="phone"
            onChange={(e) => handleChange(e)}
            title="phone"
            placeholder="Phone"
          />
        </InputContainer>
        <InputContainer>
          <input
            id="inputemail"
            type="text"
            value={input.email}
            name="email"
            onChange={(e) => handleChange(e)}
            title="email"
            placeholder="Email"
          />
        </InputContainer>
        <InputContainer>
          <textarea
            id="text"
            type="textarea"
            value={input.text}
            name="text"
            onChange={(e) => handleChange(e)}
            title="text"
            placeholder="Message me..."
          />
        </InputContainer>
        {input.name !== "" &&
      input.phone !== "" &&
      input.email !== "" &&
      input.text !== "" ? (
        <SendButton
          id="submitButton"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Send To Email
        </SendButton>
      ) : (
        <SendButton
          id="submitButton"
          disabled
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Send To Email
        </SendButton>
      )}
      </FormPlaque>
      
    </Container>
  );
}

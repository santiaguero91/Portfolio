"use client";

import React, { useState,useRef } from "react";
import {
  Container,
  FormPlaque,
  InputContainer,
  SendButton,
  WorkTogether,
} from "./pageStyle";
import validate from "./FormValidation";
import emailjs from '@emailjs/browser';



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



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
    'service_v64g5dl', 
    'template_px93v9a', 
    form.current, 
    'Ti-An7b8pQPTdvflG')
      .then((result) => {
          console.log(result.text);
          console.log("message send");

          setInput({
            name: "",
            phone: "",
            email: "",
            text: "",
          });

      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <Container>
      <WorkTogether>I&apos;m eager to work together!</WorkTogether>
      <FormPlaque>


      <form ref={form} onSubmit={sendEmail}>


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
          onClick={(e) => sendEmail(e)}
          type="submit"
        >
          Send To Email
        </SendButton>
      ) : (
        <SendButton
          id="submitButton"
          disabled
          onClick={(e) => sendEmail(e)}
          type="submit"
          value="Send"
        >
          Send To Email
        </SendButton>
      )}
    </form>



        
        
        
        
       
      </FormPlaque>

    </Container>
  );
}

'use client';
import { motion } from "framer-motion";

import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
width: 75%;
height: fit-content;
margin: 5% auto;

.margen{
  margin: auto;
}
.photo{
  border-radius: 9999px;
margin: auto;
}
`;

export const Hi = styled.div`
  display: flex;
flex-direction: column;
margin-top: 10px;
margin-left: 4rem;
font-size: 1.5rem;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
h3{
  margin-top: 0.75rem;
margin-bottom: 0.75rem;
}
`;


export const ContactMe = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: 10px;
width: fit-content;
padding: 10px;
background-color: #0d2f3c;
color: white;
font-weight: bold;
border-radius: 2rem;
cursor: pointer;
transition:  0.2s ease-in-out;

:hover{
  background-color: white;
}
`;


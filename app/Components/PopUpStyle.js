'use client';
import { motion } from "framer-motion";
import styled from 'styled-components';

export const PopUpDiv = styled(motion.div)`
margin: 0 auto;
padding: 10px 5px;
border-radius: 10px;
width: fit-content;
background-color: rgb(0,79,79);
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

position: absolute;
left: 25%;
  top: 80%;
  z-index: 3;
`;

export const PopUpMessage = styled(motion.h1)`
 font-size: 18px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 color: white;
`;
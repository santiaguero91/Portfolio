'use client';
import { motion } from "framer-motion";

import styled from 'styled-components';

export const Divider = styled(motion.div)`
margin: 10rem 0 5rem;
background-color: rgb(98,98,98);
width: 100%;
height:  5rem;
border: none;
box-shadow: rgba(250, 250, 193, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;


export const Hi = styled(motion.h2)`
`;

export const FullStack = styled(motion.h3)`
`;

export const ContactDiv = styled(motion.div)`
width: 100%;
`;

export const PdfDiv = styled(motion.div)`
background-color: gray;
padding: 5px;
border: 0;
border-radius: 15px;
box-shadow: rgba(250, 250, 193, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
display: flex;
font-size: 35px;
align-items: center;
justify-content: center;
transition: 1s;
:hover{
    background-color: rgb(0, 151, 167);
    box-shadow: rgba(0, 151, 167, 0.7) 0px 50px 100px -20px, rgba(0, 151, 167, 0.7) 0px 30px 60px -30px;

}
h3{
    font-size: 20px;

}
`;
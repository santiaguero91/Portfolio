'use client';
import { motion } from "framer-motion";
import styled from 'styled-components';

export const DivTecnologies = styled(motion.div)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
place-content: center;
margin: 25px 5rem 2rem 5rem;
gap: 30px;

`;

export const Ball = styled(motion.img)`
width: 80px;
border-radius: 999px;
background-color: white;
`;

export const MisTecnologias = styled(motion.h2)`
width: fit-content;
margin: 0 auto;
text-decoration: none;
font-size: 2.5rem;
color: rgb(0, 151, 167);
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

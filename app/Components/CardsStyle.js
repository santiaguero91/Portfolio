"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  place-content: center;
  padding: 1.5rem;
`;

export const CardDiv = styled(motion.div)`
  width: 90vw;
  display: block;
  padding: 3.5rem 0;
  background-color: transparent;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 1px 100px 2px rgba(100, 100, 100, 0.5);
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
`;

export const ImageContainer = styled(motion.div)`
position: relative;
width: 100%;
height: fit-content;
margin: 1rem 0 0 0;
scale: 0.8;
`;

export const CardStats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
`;



export const RightArrowStyles = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 10px;
  font-size: 60px;
  color: rgb(150, 150, 150);
  z-index: 1;
  cursor: pointer;
`;
export const LeftArrowStyles = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 10px;
  font-size: 60px;
  color: rgb(150, 150, 150);
  z-index: 1;
  cursor: pointer;
`;

export const ProyectsName = styled(motion.h1)`
  margin: 0 auto 0 5%;
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 30px;
`;

export const ProyDescrip = styled(motion.h1)`
  margin: 0.5rem auto 0.5rem 5%;
  border: 0;
`;

export const SeeButton = styled(motion.button)`
  display: flex;
  background-color: rgb(0, 145, 142);
  border: 0;
  margin: 0rem auto 0rem auto;
  padding: 5px;
  border-radius: 15px;
  transition: 1s;
  :hover{
    background-color: rgb(0, 160, 155);
    scale: 1.1;
    box-shadow: rgba(0, 160, 155, 0.5) 0px 3px 8px;
  }
`;

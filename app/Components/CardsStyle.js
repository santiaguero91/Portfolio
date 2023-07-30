"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  place-content: center;
  padding: 1.5rem, 0, 0, 0;
  @media (max-width: 770px) {
    flex-direction: column;
    width: fit-content;
  }
`;

export const CardDiv = styled(motion.div)`
  width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0;
  background-color: transparent;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 1px 100px 2px rgba(100, 100, 100, 0.5);
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  .subCardDiv {
    display: flex;
    flex-direction: row;

    @media (max-width: 770px) {
      flex-direction: column;
    }
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 50%;
  height: fit-content;
  margin: 1% 0 0 0;
  scale: 0.9;

  @media (max-width: 770px) {
    margin: 0 auto;
  }
  @media (max-width: 430px) {
    content {
      width: 100%;
      flex-direction: column;
    }
    width: 100%;
    flex-direction: column;
  }
`;

export const CardStats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media (max-width: 770px) {
    margin: 0 auto;
    padding: 0 1rem;
  }
  .statTitle {
    font-weight: 800;
    margin: 0.5rem 0;
  }
`;

export const ProyectsName = styled(motion.h1)`
  padding-top: 3rem;
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 770px) {
    margin: 0 auto;
  }
`;

export const ProyDescrip = styled(motion.h1)`
  margin: 0.5rem 0 0.5rem 0;
  border: 0;
  @media (max-width: 770px) {
    margin: 0 auto;
  }
`;

export const TechnologiesDiv = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 5rem;
  scale: 2;
  width: fit-content;
  @media (max-width: 770px) {
    margin: 1% auto;
    flex-direction: row;
  }
  @media (max-width: 430px) {
    margin: 1% auto;
    flex-wrap: wrap;
  }
`;

export const SeeButton = styled(motion.button)`
  display: flex;
  background-color: rgb(0, 145, 142);
  border: 0;
  margin: 0rem auto 0rem auto;
  padding: 5px;
  border-radius: 15px;
  transition: 1s;
  :hover {
    background-color: rgb(0, 160, 155);
    scale: 1.1;
    box-shadow: rgba(0, 160, 155, 0.5) 0px 3px 8px;
  }
`;

'use client';
import { motion } from "framer-motion";

import styled from 'styled-components';


export const EnglishPortfolio = styled(motion.div)`
  background-color: rgb(45, 55, 72);
width: 200px;
height: 200px;
margin: 30% auto;
display: flex;
align-items: center;
justify-content: center;
border: 0;
border-radius: 20px;
box-shadow: rgba(100, 100, 100, 0.5) 0px 3px 8px;
transition: 1s;
:hover{
    box-shadow: 0 1px 100px 2px rgba(100, 100, 100, 0.5);

}
`;

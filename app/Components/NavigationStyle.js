'use client';
import { motion } from "framer-motion";
import styled from 'styled-components';

export const ItemLista = styled(motion.li)`
position: relative;
text-decoration: none;
letter-spacing: 0.5px;
padding: 0 10px;
color: #a0a0a0;
:after{
    content: "";
    position: absolute;
    background-color: #ff3c78;
    height: 3px;
    width: 0%;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
}
:hover{
    color:#ffffff
}
:hover:after{
    width: 100%;
}

`;


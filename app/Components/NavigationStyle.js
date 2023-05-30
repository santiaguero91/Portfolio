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

export const DivLang = styled(motion.div)`
display: flex;
margin: 10px auto 0 20px;
align-items: center;
justify-content: center;
color: #a0a0a0;
scale: 0.8;
h1{
  font-size: 20px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0d2f3c;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`;

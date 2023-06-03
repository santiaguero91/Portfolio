'use client';
import { motion } from "framer-motion";

import styled from 'styled-components';

export const Container = styled(motion.div)`
display: flex;
flex-direction: row;
width: fit-content;
height: fit-content;
margin: 5% 5%;
.margen{
  margin: auto;
}
.photo{
border-radius: 9999px;
margin: auto;
}
`;

export const Hi = styled(motion.div)`
  display: flex;
flex-direction: column;
margin-top: 10px;
margin-left: 4rem;
font-size: 1.2rem;
font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
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
  color: #0d2f3c;
}
`;
export const DivParticles = styled(motion.div)`
  z-index: -2;
  position: absolute;
  margin-top: 0;
`;


export const ImageDiv = styled(motion.div)`
scale: 0.99;
`;







export const BorderRadiosDiv = styled(motion.div)`
	display: grid;
	place-items: center; 
  position: absolute;
  z-index: -2;


::before {
	animation: anim 30s infinite;
	background: radial-gradient(circle at 0% 0%, rgb(7,4,12), green);
	border-radius: 30% 70% 53% 47% / 26% 46% 54% 74%;
	box-shadow: 0 -2vmin 4vmin yellowgreen inset, 0 1vmin 4vmin darkgreen inset,
		0 -2vmin 7vmin darkgreen inset;
	content: "";
	filter: drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin rgb(7,4,12))
		drop-shadow(2vmin -2vmin 15vmin rgb(7,4,12))
		drop-shadow(0 0 7vmin rgb(7,4,12));
	height: 50vh;
	width: 50vh;
}

@keyframes anim {
	0%,
	100% {
		border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
		box-shadow: 0 -2vmin 4vmin LightPink inset, 0 -4vmin 4vmin MediumPurple inset,
			0 -2vmin 7vmin purple inset;
	}

	10% {
		border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
	}

	20% {
		border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
	}

	30% {
		border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
		box-shadow: 0 -4vmin 8vmin rgb(119,72,189) inset, -1vmin -2vmin 6vmin rgb(119,72,189) inset,
			-1vmin -2vmin 4vmin rgb(119,72,189) inset, 1vmin 4vmin 8vmin rgb(119,72,189) inset;
	}

	40% {
		border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
	}

	50% {
		border-radius: 100%;
		box-shadow: 0 4vmin 16vmin hotpink inset, 0 2vmin 5vmin LightPink inset, 0 4vmin 4vmin MediumPurple inset,
			0 6vmin 8vmin purple inset;
	}

	60% {
		border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
	}

	70% {
		border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
		box-shadow: 1vmin 1vmin 8vmin LightPink inset,
			2vmin -1vmin 4vmin MediumPurple inset, -1vmin -1vmin 16vmin purple inset;
	}

	80% {
		border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
	}

	90% {
		border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
	}
}
`;
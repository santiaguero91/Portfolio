'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
margin: 0 auto;
place-content: center;
padding: 2.5rem;
`;



export const CardDiv = styled.div`
margin: 2.5rem;
display: block;
padding: 1.5rem;
background-color: rgb(45,55,72);
border: none;
border-radius: 1rem;
box-shadow: 0 1px 100px 2px rgba(100, 100, 100, 0.5);
transition-duration: 0.3s;
transition-timing-function: ease-out;
:hover{
    background-color: rgb(145,145,132);
}
`;
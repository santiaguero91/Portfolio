'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;  
`;

export const WorkTogether = styled.h4`
   color: darkcyan;
   font-size: 30px;
   margin: 1rem auto 3rem auto;
`;

export const FormPlaque = styled.div`
background-color: rgb(40,40,40, 0.5);
width: 60%;
border-radius: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
box-shadow: rgba(0, 89, 89, 0.3) 8px 8px 30px;
//box-shadow: rgba(0, 89, 89, 0.3) 0px 50px 100px -20px, rgba(0, 89, 89, 0.3) 0px 30px 60px -30px;
//box-shadow: rgba(0, 172, 193, 0.2) 0px 50px 100px -20px, rgba(0, 172, 193, 0.2) 0px 30px 60px -30px, rgba(0, 172, 193, 0.2) 0px -2px 6px 0px inset;
//box-shadow: rgba(0, 172, 193, 0.2) 0px 54px 55px, rgba(0, 172, 193, 0.2) 0px -12px 30px, rgba(0, 172, 193, 0.2) 0px 4px 6px, rgba(0, 172, 193, 0.2) 0px 12px 13px, rgba(0, 172, 193, 0.2) 0px -3px 5px;
// 172, 193


form{
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
}
 
 `;

export const InputContainer = styled.div`
width: 60%;
margin: 1rem 0;
input{
    background-color: rgb(70,70,70);
    width: 100%;
    border: none;
    height: 4rem;
    border-radius: 15px;
    font-size: 20px;
    padding: 20px;

  }
  textarea {
  font-size: 16px;
  border-radius: 15px;
  border: none;
  padding: 10px;
  width: 100%;
  height: 40vh;
  background-color: rgb(70,70,70);
  resize: none;
  font-size: 16px;
}
`;

export const SendButton = styled.button`
  border:0;
  outline:none;
  border-radius:0;
  padding:10px 8px;
  font-size:2rem;
  font-weight:$bold;
  text-transform:uppercase;
  letter-spacing:.1em;
  color:white;
  transition:all.5s ease;
  background-color: rgb(0,89,89);
  margin: 1rem auto 2rem auto;
  :hover, :focus {
    background-color: rgb(0,111,111);
  }
  :disabled{
    color: gray;
    background-color: rgb(70,70,70, 0.5);
  }
`;



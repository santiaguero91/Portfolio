"use client";

import React from "react";
import {PopUpDiv,PopUpMessage} from "./PopUpStyle";
import { useAppSelector } from "../../Redux/hooks";


export default function PopUp() {
    const count = useAppSelector((state) => state.counterReducer.counter);

    return (
        <PopUpDiv
        initial={{ opacity: 0 , y: 50 }}
        animate={{ opacity: 1, y: 0, 
        transition: { duration: 0.8, delay: 2 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            {count === 1 ? 
            <PopUpMessage>Thank you for your message, I will contact you as soon as possible. </PopUpMessage> :
            <PopUpMessage>Gracias por tu mensaje, Me comunicaré contigo lo mas pronto que pueda.</PopUpMessage>}
        </PopUpDiv>
    )
}

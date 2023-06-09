"use client";
import React from "react";
import technologyList from "../utils/TechonolyList/technologyList";
import { DivTecnologies, Ball, MisTecnologias } from "./TecnologiesStyle";
import { useAppSelector } from "../../Redux/hooks";

export function Technologies() {
  const count = useAppSelector((state) => state.counterReducer.counter);

  return (
    <div>
      {count === 1 ? (
        <MisTecnologias>My Tools</MisTecnologias>
      ) : (
        <MisTecnologias>Mis Herramientas</MisTecnologias>
      )}

      <DivTecnologies
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        delay: 1.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      >
        {technologyList.map((el) => {
          return (
            <Ball
            drag
            dragConstraints={{left:0,top:0, right:0,bottom:0}}
              src={el.icon}
              key={el.name}
            />
          );
        })}
      </DivTecnologies>

    </div>
  );
}

"use client";
import React from "react";
import technologyList from "../utils/TechonolyList/technologyList";
import {DivTecnologies, Ball, MisTecnologias} from "./TecnologiesStyle";
import { useAppSelector} from "../../Redux/hooks"


export function Technologies() {
  const count = useAppSelector(state=>state.counterReducer.counter)

  return (
    <div>

{count === 1 ? <MisTecnologias>My Tools</MisTecnologias> : <MisTecnologias>Mis Herramientas</MisTecnologias>}      


<DivTecnologies>
          {technologyList.map((el) => {
            return (

              <Ball src={el.icon} key={el.name}/>

            );
          })}
        </DivTecnologies>

    </div>
  );
}

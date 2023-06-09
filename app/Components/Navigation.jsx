"use client";
import React from "react";
import Link from "next/link";
import { DivLang, ItemLista } from "./NavigationStyle";
import { useAppDispatch, useAppSelector} from "../../Redux/hooks"
import {increment} from "../../Redux/features/counter.slice"


export default function Navigation() {
  const count = useAppSelector(state=>state.counterReducer.counter)
  const dispatch= useAppDispatch()

  return (
    <div className="container flex flex-wrap items-center justify-end mx-auto font-serif">

<DivLang
initial={{ y: -100 }}
animate={{ y: 0, delay: 0.8,  duration: 1}}
>
<h1>Eng</h1>
<label className="switch">
  <input type="checkbox" onClick={()=>{
dispatch(increment())
  }}/>
  <span className="slider round"></span>
</label>
<h1>Esp</h1>
</DivLang> 
          <ul className="flex flex-col items-end pt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold ">
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.2, transition: { duration: 2 } }}
            > 
            {count === 1 ? <Link href="/">Home</Link> : <Link href="/">Inicio</Link>}
            </ItemLista>
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.6, transition: { duration: 2 } }}
            > {count === 1 ? <Link href="/About">About</Link> : <Link href="/About">Sobre mi</Link>}
              
            </ItemLista>
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 2, transition: { duration: 2 } }}
            > {count === 1 ? <Link href="/Works">Works</Link> : <Link href="/Works">Proyectos</Link>}
            </ItemLista>
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.4, transition: { duration: 2 } }}
            > {count === 1 ? <Link href="/Contact">Contact</Link> : <Link href="/Contact">Contacto</Link>}
              
            </ItemLista>
          </ul>
    </div>
  );
}

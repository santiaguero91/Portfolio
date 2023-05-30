"use client";

import React from "react";
import Image from "next/image";
import profilePic from "../img/foto.jpg";
import { Hi, Container, DivParticles } from "./pageStyle";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { Technologies } from "../Components/Tecnologies";
import { useAppSelector } from "../../Redux/hooks";

export default function About() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  return (
    <div>
      {count === 1 ? (
        <Container exit={{ scaleY: 0, transition: { duration: 2 } }}>
          <DivParticles>
            <ParticlesBackground />
          </DivParticles>

          <motion.div
            className="margen"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={profilePic}
              alt="FOTO"
              width={500}
              height={500}
              className="photo"
            />
          </motion.div>
          <Hi>
            <motion.h3
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, transition: { duration: 2 } }}
            >
              I&apos;m Santiago Aguero, a Full-Stack Developer located in Buenos
              Aires with great passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
            </motion.h3>
            <motion.h3
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, transition: { duration: 2 } }}
            >
              I&apos;m a well-organised person, problem solver, an employee with
              attention to detail and also a teamplayer with high communication
              skills and leadership.
            </motion.h3>
            <motion.h3
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, transition: { duration: 2 } }}
            >
              Interested in the entire programming spectrum and working on
              ambitious projects with a positive attitude.
            </motion.h3>
          </Hi>
        </Container>
      ) : (
        <Container>
          <DivParticles>
            <ParticlesBackground />
          </DivParticles>

          <motion.div
            className="margen"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ transition: { duration: 2 } }}
          >
            <Image
              src={profilePic}
              alt="FOTO"
              width={500}
              height={500}
              className="photo"
            />
          </motion.div>

          <Hi>
            <motion.h3
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, transition: { duration: 2 } }}
            >
              Soy Santiago Agüero, un desarrollador Full-Stack ubicado en Buenos
              Aires con una gran pasión por los efectos de interfaz de usuario,
              las animaciones y la creación de experiencias de usuario
              intuitivas y dinámicas.
            </motion.h3>
            <motion.h3
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, transition: { duration: 2 } }}
            >
              Soy una persona muy organizada, solucionador de problemas, un
              empleado con atención a los detalles y también un jugador de
              equipo con altas habilidades de comunicación y liderazgo.
            </motion.h3>
            <motion.h3
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, transition: { duration: 2 } }}
            >
              Interesado en todo el espectro de programación y trabajando en
              proyectos ambiciosos con una actitud positiva.
            </motion.h3>
          </Hi>
        </Container>
      )}

      <Technologies />
    </div>
  );
}

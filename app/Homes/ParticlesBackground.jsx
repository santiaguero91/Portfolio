"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config"
import { DivParticles } from "./pageStyle";

export default function ParticlesBackground() {
    const particlesInit = useCallback( engine => {
         loadFull(engine);
    }, []);

    return (
        <DivParticles>
        <div id='particle-background'
        height= "100px"
        width= "100px"
        >
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={particlesConfig}
      ></Particles>
    </div>
    </DivParticles>
    );
};
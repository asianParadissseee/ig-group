import Particles from 'react-tsparticles';
import particleConfig from '../config/particle-config.ts';
import { FC, ReactNode, useCallback, useMemo } from 'react';
import { loadSlim } from 'tsparticles-slim';
import { Container, Engine } from 'tsparticles-engine';
import { ParticleConfig } from '../config/particle-type.ts';

interface ParticleProps {
  children: ReactNode;
}

const Particle: FC<ParticleProps> = (props) => {
  const { children } = props;
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container;
  }, []);
  const config: ParticleConfig = useMemo(() => (
    particleConfig
  ), []);
  return (
    <Particles options={config as never} id="tsparticles" init={particlesInit} loaded={particlesLoaded}>
      {children}
    </Particles>
  );
};

export default Particle;

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Vector3, Color, DoubleSide, Matrix4 } from "three";

const WIND_PARTICLE_COUNT = 250;

// Define the Particle interface
interface Particle {
  pos: Vector3;
  len: number | null;
  speed: number | null;
  color: Color | null;
}

// Initialize particles as an array of Particle
let particles: Particle[] = [];

// Utility function to generate random numbers
const r = (min: number, max: number) => {
  const diff = Math.random() * (max - min);
  return min + diff;
};

// Function to reset particle properties
const resetParticle = (particle: Particle) => {
  particle.pos = new Vector3(r(-10, -15), r(-20, 20), r(7, -7));
  particle.len = r(90, 200);
  particle.speed = r(20, 45);
  particle.color = new Color("#ffffff")
    .convertSRGBToLinear()
    .multiplyScalar(1.3);

  return particle;
};

// Initialize particles
for (let i = 0; i < WIND_PARTICLE_COUNT; i++) {
  let particle: Particle = {
    pos: new Vector3(),
    len: null,
    speed: null,
    color: null,
  };

  particles.push(resetParticle(particle));
}

function WindParticles() {
  const meshRef = useRef(null);
  const texture = useTexture("/star.png"); // Replace with your wind particle texture

  useFrame((_, delta) => {
    particles.forEach((particle: Particle) => {
      particle.pos.x += particle.speed * delta; // Move the particle
      if (particle.pos.x > 0) resetParticle(particle); // Reset if out of bounds
    });

    // Update the instance positions and colors
    if (meshRef.current) {
      particles.forEach((particle: Particle, index) => {
        const matrix = new Matrix4().makeTranslation(particle.pos.x, particle.pos.y, particle.pos.z);
        meshRef.current.setMatrixAt(index, matrix);
        meshRef.current.setColorAt(index, particle.color);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, WIND_PARTICLE_COUNT]}>
      <planeGeometry args={[4, 0.1]} /> {/* Increase width and height */}
      <meshBasicMaterial side={DoubleSide} alphaMap={texture} transparent />
    </instancedMesh>
  );
}

export default WindParticles;
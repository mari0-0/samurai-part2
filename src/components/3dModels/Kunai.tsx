import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Shuriken4_Ninja_thingz_0: THREE.Mesh;
    Shuriken4Circled_Ninja_thingz_0: THREE.Mesh;
    Shuriken6_Ninja_thingz_0: THREE.Mesh;
    Shuriken3_Ninja_thingz_0: THREE.Mesh;
    Shuriken8_Ninja_thingz_0: THREE.Mesh;
    Object_19: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    Ninja_thingz: THREE.MeshStandardMaterial;
  };
};

export function Kunai({ setIsLoaded }: { setIsLoaded: (isLoaded: boolean) => void }) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF('/ninja_equipment.glb') as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const r = (min: number, max: number) => {
    const diff = Math.random() * (max - min);
    return min + diff;
  };

  const vibrationAmplitudeY = 0.08; 
  const vibrationAmplitudeX = r(0.08, 0.18); 
  const vibrationFrequencyY = 90; 
  const vibrationFrequencyX = r(30, 50);; 

  useEffect(() => {
    //@ts-ignore
    actions['Wind'].play().timeScale = 1.8;
  }, [actions]);

  useEffect(() => {
    if (group.current) {
      setIsLoaded(true);
    }
  }, [group, setIsLoaded]);

  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      const vibrationOffsetY = Math.sin(time * vibrationFrequencyY) * vibrationAmplitudeY;
      const vibrationOffsetX = Math.sin(time * vibrationFrequencyX) * vibrationAmplitudeX;

      group.current.position.y += vibrationOffsetY; 
      group.current.position.x += vibrationOffsetX; 
    }
  });

  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="09311ba74cc345b19ba82a433b9ef88efbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group ref={group} name="RootNode">
                <group
                  name="Kunai"
                  position={[0, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Chain"
                  position={[0, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_16">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.Ninja_thingz}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <group
                      name="Object_18"
                      position={[0, 664.924, -1289.906]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/ninja_equipment.glb');
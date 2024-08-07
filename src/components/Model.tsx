import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Group } from "three";

useGLTF.preload("/wado_ichimonji_2k.glb");

const Model = ({ setIsLoaded }: {setIsLoaded: (isLoaded: boolean) => void}) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/wado_ichimonji_2k.glb");

  useEffect(() => {
    if (group.current) {
      setIsLoaded(true);
    }
  }, [group, setIsLoaded]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;

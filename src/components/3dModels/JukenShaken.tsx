import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

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

export default function JukenShaken({
	setIsLoaded,
}: {
	setIsLoaded?: (isLoaded: boolean) => void;
}) {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials } = useGLTF("/ninja_equipment.glb") as GLTFResult;
	const shurikenRef = useRef<THREE.Group>(null);
	const [isHovered, setIsHovered] = useState(false);

	useFrame(() => {
		//@ts-ignore
		if (isHovered) shurikenRef.current.rotation.x += 0.04;
		//@ts-ignore
		else shurikenRef.current.rotation.x += 0.08;
	});

	useEffect(() => {
		if (group.current) {
			if (setIsLoaded) setIsLoaded(true);
		}
	}, [group, setIsLoaded]);

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
							<group name="RootNode">
                <group
									ref={shurikenRef}
									onPointerEnter={() => setIsHovered(true)}
									onPointerLeave={() => setIsHovered(false)}
									name="Shuriken6"
									position={[0, 0, 0]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}
								>
									<mesh
										name="Shuriken6_Ninja_thingz_0"
										castShadow
										receiveShadow
										geometry={nodes.Shuriken6_Ninja_thingz_0.geometry}
										material={materials.Ninja_thingz}
									/>
								</group>

								{/* <group
									ref={shurikenRef}
									onPointerEnter={() => setIsHovered(true)}
									onPointerLeave={() => setIsHovered(false)}
									name="Shuriken8"
									position={[0, 0, 0]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}
								>
									<mesh
										name="Shuriken8_Ninja_thingz_0"
										castShadow
										receiveShadow
										geometry={nodes.Shuriken8_Ninja_thingz_0.geometry}
										material={materials.Ninja_thingz}
									/>
								</group> */}

							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/ninja_equipment.glb");

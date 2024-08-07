import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Kunai } from "./3dModels/Kunai";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Group } from "three";
import WindParticles from "./3dModels/WindParticles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Shuriken from "./3dModels/Shuriken";
import Manji from "./3dModels/Manji";
import SanbanMitsubushi from "./3dModels/SanbanMitsubushi";
import JukenShaken from "./3dModels/JukenShaken";
import HappoShuriken from "./3dModels/HappoShuriken";

function Loader() {
	const { progress, active: _ } = useProgress();

	return (
		<Html center className="text-white text-2xl">
			{progress.toFixed(1)} %
		</Html>
	);
}

const ShurikenScene = () => {
	const [isLoaded1, setIsLoaded1] = useState(false);
	const [isLoaded2, setIsLoaded2] = useState(false);
	const [isLoaded3, setIsLoaded3] = useState(false);
	const [isLoaded4, setIsLoaded4] = useState(false);
	const [isLoaded5, setIsLoaded5] = useState(false);
	const [isLoaded6, setIsLoaded6] = useState(false);
	const group = useRef<Group>(null);
	const kunaiRef = useRef<Group>(null);
	const shurikenRef = useRef<Group>(null);
	const manjiRef = useRef<Group>(null);
	const sanbanMitsubushiRef = useRef<Group>(null);
	const jukenShakenRef = useRef<Group>(null);
	const happoShurikenRef = useRef<Group>(null);

	useGSAP(() => {
		if (isLoaded1 && isLoaded2 && isLoaded3 && isLoaded4 && isLoaded5 && isLoaded6) {
			const tl = gsap.timeline();

			//@ts-ignore
			tl.to(group.current?.rotation, {
				y: Math.PI / 4,
				scrollTrigger: {
					trigger: ".horComponnent1",
					start: "20% 60%",
					end: "top end",
					scrub: 1,
					// markers: true,
					onUpdate: (self) => {
						const progress = self.progress;
						gsap.to('.horComponnent1', {
							opacity: progress,
						})
					}
				},
			});

			// @ts-ignore
			tl.to(kunaiRef.current?.position, {
				z: -300,
				scrollTrigger: {
					trigger: ".horComponnent3",
					start: "top top",
					end: `${window.innerWidth + window.innerWidth * 0.25}px top`,
					scrub: 1,
				},
			});

			// @ts-ignore
			tl.to(shurikenRef.current?.position, {
				z: 4,
				scrollTrigger: {
					trigger: ".horComponnent3",
					start: "top top",
					end: `${(window.innerWidth + window.innerWidth * 0.20) * 1}px top`,
					scrub: 1,
					// markers: true,
					onUpdate: (self) => {
						const progress = self.progress;
						gsap.to('.horComponnent2', {
							opacity: progress,
						})
					}
				},
			}, 'shuriken')

			// @ts-ignore
			tl.to(manjiRef.current?.position, {
				z: 4,
				scrollTrigger: {
					trigger: ".horComponnent3",
					start: `${(window.innerWidth + window.innerWidth * 0.20) * 1}px top`,
					end: `${(window.innerWidth + window.innerWidth * 0.20) * 2}px top`,
					scrub: 1,
					// markers: true,
					onUpdate: (self) => {
						const progress = self.progress;
						gsap.to('.horComponnent3', {
							opacity: progress,
						})
						//@ts-ignore
						gsap.to(shurikenRef.current?.position, {
							z: gsap.utils.interpolate(4, -300, progress),
							ease: "power1.out", 
						},)
					}
				},
			});

			// @ts-ignore
			tl.to(sanbanMitsubushiRef.current?.position, {
				z: 4,
				scrollTrigger: {
					trigger: ".horComponnent3",
					start: `${(window.innerWidth + window.innerWidth * 0.20) * 2}px top`,
					end: `${(window.innerWidth + window.innerWidth * 0.20) * 3}px top`,
					scrub: 1,
					// markers: true,
					onUpdate: (self) => {
						const progress = self.progress;
						gsap.to('.horComponnent4', {
							opacity: progress,
						})
						//@ts-ignore
						gsap.to(manjiRef.current?.position, {
							z: gsap.utils.interpolate(4, -300, progress),
							ease: "power1.out",
						})
					}
				},
			});

			// @ts-ignore
			tl.to(jukenShakenRef.current?.position, {
				z: 4,
				scrollTrigger: {
					trigger: ".horComponnent3",
					start: `${(window.innerWidth + window.innerWidth * 0.20) * 3}px top`,
					end: `${(window.innerWidth + window.innerWidth * 0.20) * 4}px top`,
					scrub: 1,
					// markers: true,
					onUpdate: (self) => {
						const progress = self.progress;
						gsap.to('.horComponnent5', {
							opacity: progress,
						})
						//@ts-ignore
						gsap.to(sanbanMitsubushiRef.current?.position, {
							z: gsap.utils.interpolate(4, -300, progress),
							ease: "power1.out",
						})
					}
				},
			});

			// @ts-ignore
			tl.to(happoShurikenRef.current?.position, {
				z: 4,
				scrollTrigger: {
					trigger: ".horComponnent3",
					start: `${(window.innerWidth + window.innerWidth * 0.20) * 4}px top`,
					end: `${(window.innerWidth + window.innerWidth * 0.20) * 5}px top`,
					scrub: 1,
					// markers: true,
					onUpdate: (self) => {
						const progress = self.progress;
						gsap.to('.horComponnent6', {
							opacity: progress,
						})
						//@ts-ignore
						gsap.to(jukenShakenRef.current?.position, {
							z: gsap.utils.interpolate(4, -300, progress),
							ease: "power1.out",
						})
					}
				},
			});
		}
	}, [isLoaded1, isLoaded2, isLoaded3, isLoaded4, isLoaded5, isLoaded6]);

	return (
		<Canvas
			gl={{ antialias: true }}
			className="w-full h-full z-0 canvas-thorwables"
		>
			<directionalLight position={[-2.5, 3.2, 4]} intensity={4} />
			<directionalLight position={[-5, -5, 5]} intensity={4} />
			<directionalLight position={[-5, 5, -5]} intensity={4} />
			<directionalLight position={[5, -5, -5]} intensity={4} />

			<Suspense fallback={<Loader />}>
				<group
					ref={group}
					rotation={[0, 1.5, -0.3]}
					scale={window.innerWidth * 0.0002}
				>
					<group position={[0, 0, 4]}>
						<group ref={kunaiRef} position={[0, 0, 0]}>
							<Kunai setIsLoaded={setIsLoaded1} />
						</group>
						<group ref={shurikenRef} position={[0, 0, window.innerWidth * 0.1]}>
							<Shuriken setIsLoaded={setIsLoaded2} />
						</group>
						<group ref={manjiRef} position={[0, 0, window.innerWidth * 0.2]}>
							<Manji setIsLoaded={setIsLoaded3} />
						</group>
						<group ref={sanbanMitsubushiRef} position={[0, 0, window.innerWidth * 0.3]}>
							<SanbanMitsubushi setIsLoaded={setIsLoaded4} />
						</group>
						<group ref={jukenShakenRef} position={[0, 0, window.innerWidth * 0.4]}>
							<JukenShaken setIsLoaded={setIsLoaded5} />
						</group>
						<group ref={happoShurikenRef} position={[0, 0, window.innerWidth * 0.4]}>
							<HappoShuriken setIsLoaded={setIsLoaded6} />
						</group>
					</group>

					<group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
						<WindParticles />
					</group>
				</group>
			</Suspense>

			<OrbitControls
				enableRotate={false}
				enableZoom={false}
				enablePan={false}
				autoRotate={false}
				autoRotateSpeed={1.5}
			/>
		</Canvas>
	);
};

export default ShurikenScene;

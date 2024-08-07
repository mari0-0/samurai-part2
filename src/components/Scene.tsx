import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Model from "./Model";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Loader() {
	const { progress, active: _ } = useProgress();

	return (
		<Html center className="text-white text-2xl">
			{progress.toFixed(1)} %
		</Html>
	);
}

gsap.registerPlugin(ScrollTrigger);
const Scene = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [controlsEnabled, setControlsEnabled] = useState(true);
	const group = useRef<Group>(null);

	const handleMouseEnter = () => {
		setControlsEnabled(true); // Enable controls on mouse enter
	};

	const handleMouseLeave = () => {
		setControlsEnabled(false); // Disable controls on mouse leave
	};

	useGSAP(() => {
		if (isLoaded) {
			//@ts-ignore
			gsap.to(group.current?.rotation, {
				y: Math.PI * 2,
				scrollTrigger: {
					trigger: ".section1",
					endTrigger: ".section1 .heading",
					start: "-40% top",
					end: "bottom 30%",
					scrub: 1,
					// markers: true,
					onUpdate: (self) => {
						gsap.to(document.querySelector(".section1"), {
							opacity: self.progress,
						});
					},
				},
			});

			//@ts-ignore
			gsap.to(group.current?.rotation, {
				z: Math.PI,
				scrollTrigger: {
					trigger: ".section2",
					endTrigger: ".section2 .heading",
					start: "-50% top",
					end: "bottom 50%",
					scrub: 1,
					onUpdate: (self) => {
						gsap.to(document.querySelector(".section2"), {
							opacity: self.progress,
						});
					},
					// markers: true,
				},
			});

			//@ts-ignore
			gsap.to(group.current?.rotation, {
				y: Math.PI / 2,
				scrollTrigger: {
					trigger: ".section3",
					endTrigger: ".section3 .heading",
					start: "-50% top",
					end: "bottom 50%",
					scrub: 1,
					// markers: true,

					onUpdate: (self) => {
						gsap.to(document.querySelector(".section3"), {
							opacity: self.progress,
						});
					},
				},
			});

			ScrollTrigger.create({
				trigger: ".canvas",
				endTrigger: ".section3",
				start: "top top",
				end: "bottom bottom",
				// markers: true,
				scrub: 1,
				pin: true,
			});
		}
	}, [isLoaded]);

	return (
		<Canvas gl={{ antialias: true }} className="w-full h-full canvas">
			<directionalLight position={[-2.5, 3.2, 4]} intensity={4} />
			<directionalLight position={[-5, -5, 5]} intensity={4} />
			<directionalLight position={[-5, 5, -5]} intensity={4} />
			<directionalLight position={[5, -5, -5]} intensity={4} />

			<Suspense fallback={<Loader />}>
				<group
					ref={group}
					position={[0, 0, 0]}
					rotation={[0, 0, 1.5]}
					scale={window.innerWidth * 0.003}
				>
					<Model setIsLoaded={setIsLoaded} />
				</group>
			</Suspense>

			<OrbitControls
				enableRotate={true}
				enableZoom={false}
				autoRotate={false}
				autoRotateSpeed={1.5}
				enabled={controlsEnabled} // Control enabled state
				//@ts-ignore
				onMouseEnter={handleMouseEnter} // Enable controls on mouse enter
				onMouseLeave={handleMouseLeave} // Disable controls on mouse leave
			/>
		</Canvas>
	);
};

export default Scene;

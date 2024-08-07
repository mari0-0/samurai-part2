import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";
import ShurikenScene from "./ShurikenScene";
import { components } from "../utils/constants";

const HorScroll = () => {
	const horContainer = useRef<HTMLDivElement>(null);
	const horComponents = useRef<HTMLDivElement[]>([]); // Use an array to hold the component references

	// Array of content for horizontal scrolling

	useGSAP(() => {
		gsap.to(horComponents.current, {
			xPercent: -100 * (components.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: horContainer.current,
				pin: true,
				scrub: 1,
				// snap: 1 / (components.length - 1),
				end: () => "+=" + horContainer.current?.offsetWidth,
			},
		});
	}, []);

	return (
		<div
			id="hor-container"
			ref={horContainer}
			className={`flex w-[${(components.length) * 100}vw] overflow-x-hidden bg-neutral-900 text-white`}
		>
			{components.map((component) => (
				<div
					key={component.id}
					ref={(el) => (horComponents.current[component.id - 1] = el!)}
					className={`horComponnent${component.id} relative w-full h-screen flex flex-col justify-center pl-24`}
				>
					<div className="absolute z-10 flex flex-col justify-center gap-10">
						<h1 className="font-bold text-white text-6xl tracking-wider kunai-heading">
							{component.title}
						</h1>
						<p className="max-w-lg font-light text-gray-300 text-md leading-7">
							{component.text}
						</p>
					</div>
				</div>
			))}

			<div className="absolute w-screen h-screen z-[-1] top-0 left-0">
				<ShurikenScene />
			</div>
		</div>
	);
};

export default HorScroll;

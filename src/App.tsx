import { useGSAP } from "@gsap/react";
import HorScroll from "./components/HorScroll";
import Scene from "./components/Scene";
import ShurikenScene from "./components/ShurikenScene";
import gsap from "gsap/all";

function App() {
	useGSAP(() => {
		gsap.to(".horComp", {
			xPercent: -100 * (document.querySelectorAll(".horComp").length - 1),
			scrollTrigger: {
				trigger: ".horCont",
				// endTrigger: ".horComp3",
        end: () => "+=" + document.querySelector('horCont')?.offsetWidth,
				scrub: true,
				pin: true,
				// markers: true,
			},
		});
	}, [])

	return (
		<>
			<div className="w-full h-screen"></div>
			<div className="overflow-x-hidden">
				<HorScroll />
			</div>
			{/* <div className="horCont relative w-[300vw] h-screen bg-neutral-900 flex ">
				<div className="horComp w-full pl-24 h-full flex flex-col gap-10 justify-center">
					<h1 className="font-bold text-white text-6xl tracking-wider kunai-heading">
						Kunai
					</h1>
					<p className="max-w-lg font-light text-gray-300  text-md leading-7">
						A kunai is a traditional Japanese tool that has evolved into a
						popular weapon in martial arts and ninja folklore. Originally
						designed as a multi-purpose agricultural tool, the kunai features a
						pointed tip and a flat blade, making it effective for digging,
						prying, and throwing. In modern depictions, particularly in anime
						and video games, kunai are often portrayed as throwing knives used
						by ninjas for stealth attacks and precision strikes. Their
						lightweight design and aerodynamic shape allow for accurate throws,
						making them a favored choice among practitioners of various martial
						arts.
					</p>
				</div>
				<div className="horComp w-full pl-24 h-full flex flex-col gap-10 justify-center">
					<h1 className="font-bold text-white text-6xl tracking-wider kunai-heading">
						Manji
					</h1>
					<p className="max-w-lg font-light text-gray-300  text-md leading-7">
						A kunai is a traditional Japanese tool that has evolved into a
						popular weapon in martial arts and ninja folklore. Originally
						designed as a multi-purpose agricultural tool, the kunai features a
						pointed tip and a flat blade, making it effective for digging,
						prying, and throwing. In modern depictions, particularly in anime
						and video games, kunai are often portrayed as throwing knives used
						by ninjas for stealth attacks and precision strikes. Their
						lightweight design and aerodynamic shape allow for accurate throws,
						making them a favored choice among practitioners of various martial
						arts.
					</p>
				</div>
				<div className="horComp3 w-full pl-24 h-full flex flex-col gap-10 justify-center">
					<h1 className="font-bold text-white text-6xl tracking-wider kunai-heading">
						Shuriken
					</h1>
					<p className="max-w-lg font-light text-gray-300  text-md leading-7">
						A kunai is a traditional Japanese tool that has evolved into a
						popular weapon in martial arts and ninja folklore. Originally
						designed as a multi-purpose agricultural tool, the kunai features a
						pointed tip and a flat blade, making it effective for digging,
						prying, and throwing. In modern depictions, particularly in anime
						and video games, kunai are often portrayed as throwing knives used
						by ninjas for stealth attacks and precision strikes. Their
						lightweight design and aerodynamic shape allow for accurate throws,
						making them a favored choice among practitioners of various martial
						arts.
					</p>
				</div>
				<div className="absolute w-full h-full top-0">
					<ShurikenScene />
				</div>
			</div> */}
			<section className="bg-neutral-950">
				<h1 className="text-7xl py-10 text-white text-center font-extrabold tracking-widest">
					KATANA
				</h1>
				<div className="relative w-full bg-neutral-950 flex">
					<div
						id="hero"
						className="w-full text-white text-center flex flex-col justify-center items-center"
					>
						<div className="opacity-0 section1 h-screen flex justify-center items-start flex-col gap-10">
							<h1 className="text-3xl font-bold tracking-wide heading">
								Blade Design and Sharpness
							</h1>
							<p className="max-w-lg text-left leading-7">
								The katana is renowned for its distinctive, curved blade, which
								is traditionally around 60 to 80 centimeters in length. The
								blade is single-edged, with a sharpness that is achieved through
								meticulous forging and honing processes. The katana's blade is
								crafted from high-carbon steel, allowing for an exceptionally
								hard and sharp edge while maintaining flexibility to absorb
								impacts. The cutting edge, known as the ha, is finely polished,
								giving it a mirror-like finish. This sharpness and edge
								retention make the katana a formidable weapon, capable of
								precise and clean cuts.
							</p>
						</div>
						<div className="opacity-0 section2 h-screen flex justify-center items-start flex-col gap-10">
							<h1 className="text-3xl font-bold tracking-wide heading">
								Tsuba and Tsuka: Guard and Handle
							</h1>
							<p className="max-w-lg text-left leading-7">
								The katana features a handguard, known as the tsuba, which
								serves both as a functional and decorative element. The tsuba is
								usually made of metal and can be intricately designed with
								various motifs, often reflecting Japanese culture and
								craftsmanship. The handle, or tsuka, is traditionally wrapped
								with a material called tsuka-ito, providing a secure grip. The
								tsuka is also adorned with decorative elements such as menuki
								(ornamental figures) and fuchi and kashira (collar and pommel),
								which enhance the aesthetic appeal and balance of the weapon.
							</p>
						</div>
						<div className="opacity-0 section3 h-screen flex justify-center items-start flex-col gap-10">
							<h1 className="text-3xl font-bold tracking-wide heading">
								Hamon and Balance
							</h1>
							<p className="max-w-lg text-left leading-7">
								One of the most distinctive features of the katana is the hamon,
								a visible line that runs along the blade, created during the
								differential hardening process. The hamon not only adds to the
								visual beauty of the katana but also marks the boundary between
								the harder cutting edge and the softer spine of the blade. This
								differential hardening technique contributes to the katana's
								unique combination of hardness and flexibility, making it both
								resilient and capable of maintaining a sharp edge. The balance
								of the katana, with its weight distributed towards the hilt,
								allows for quick and agile movements, making it an ideal weapon
								for both offensive and defensive maneuvers in martial arts.
							</p>
						</div>
					</div>
					<div className="relative w-full h-screen flex justify-center items-center">
						<Scene />
					</div>
				</div>
			</section>
			<section className="w-full h-screen bg-blue-200"></section>
			{/* <section className="w-full h-screen bg-teal-300"></section> */}
		</>
	);
}

export default App;

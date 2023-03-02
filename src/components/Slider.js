import React from "react";
import images from "../components/images.js";
import "../components/Slider.css";
import { motion } from "framer-motion";

const Slider = () => {
	return (
		<div className="bg-accent pt-[54px] pb-[74px] min-h-[300px]">
			<div className="container mx-auto px-8 text-center">
				<h3 className="font-primary font-extrabold leading-[1.2] text-white text-[40px] mb-[12px]">
					"Nuestro Estudio"
				</h3>
				<motion.div className="slider-container">
					<motion.div
						className="slider"
						drag="x"
						dragConstraints={{ right: 0, left: -0 }}
					>
						{images.map((image) => (
							<motion.div className="item">
								<img src={image} alt="" />
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Slider;

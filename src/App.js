import React from "react";

// import components
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Team from "./components/Team";
/* import Slider from "./components/Slider"; */
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Swipers from "./components/swiper";

const App = () => {
	return (
		<div>
			<Banner />
			<Testimonials />
			<Skills />
			<Team />
			<Swipers />
			{/* <Slider /> */}
			<ContactUs />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default App;

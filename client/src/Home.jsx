import React , { useState } from "react";
import MediaQuery from "react-responsive";

import TopInfo from "@section/TopInfo";
import Banner from "@section/Banner";
import AboutUs from "@section/AboutUs";
import Services from "@section/Services";
import Team from "@section/Team";
import Gallery from "@section/Gallery";
import Location from "@section/Location";
import Footer from "@section/Footer";
import Appointment from "@section/Appointment";
import Login from "./components/sections/Login/Login.jsx";
import SignUp from "./components/sections/Signup/SignUp.jsx";
export default function Home() {
	const [view , setView]=useState('login')
	const changeToHome = () => {
		setView('home')
	  }
	
	  const changeToSignUp = () => {
		setView('signup')
	  }
	
	  const changeToLogin = () => {
		setView('login')
	  }
	return (
		<>
		  {view === 'login'  && <Login  changeToSignUp  ={changeToSignUp} changeToHome={changeToHome}/>} 
      {view === 'signup' && <SignUp changeToLogin   ={changeToLogin}  changeToHome={changeToHome}/>}
		{ view === 'home' && 	
		 (<>
		<MediaQuery minWidth={640}>
				<TopInfo />
			</MediaQuery>
			<Banner />
			<AboutUs />
			<Services />
			<Team />
			<Gallery />
			<Location />
			<Appointment />
			<Footer /> 
		 </>)
		}
		</>
	);
}

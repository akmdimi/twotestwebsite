import React from "react";
import NavBar from "./navbar";
import HeroSection from "./HeroSection"
import AppSection from "./AppSection";
import CardSection from "./CardSection"
import Footer from "./Footer";

const App = () =>{
    return(
        <div>
            <NavBar/>
            {/* <Footer/> we can change the section like in this case we can maove this footer section to upward*/}  
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
            

        </div>
    )
}
export default App;
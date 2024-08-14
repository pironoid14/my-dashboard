//import { Link } from "react-router-dom";

import Hero from "../Dash-components/Hero";
import Navbar from "../Dash-components/Navbar";
import Subhero from "../Dash-components/subhero";


export const Home = () => {
  return (
    <div className="grid gap-4 auto-rows-min grid-flow-row bg-white">
     <Navbar/>
     <Hero/>
     <Subhero />
    </div>
  )
}

export default Home;

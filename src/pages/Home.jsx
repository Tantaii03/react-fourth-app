//rfc , rfce , rafce

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import hero from "./../assets/hero.png";

export default function Home() {
  return (
    <>
      <NavBarMain />
      <Header />
        <h2 style={{textAlign:"center", color:"#3142de"}}>Home Page</h2>
        <p style={{textAlign:"center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam optio vel a, animi aperiam incidunt perferendis deserunt debitis quidem sapiente. Necessitatibus, obcaecati dolorem consectetur est laudantium quae reprehenderit ex.
        </p>
        <img src="iot1.png" alt="iot" style={{width:"100px"}}/>

        <img src={hero} alt="hero" style={{width:"200px"}} />
      <Footer />
    </>
  )
}


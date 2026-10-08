import Header from "./../components/Header";
import Footer from "./../components/Footer"
import Productlink from "../components/Productlink";
import NavBarMain from "../components/NavBarMain";


export default function Product() {
  return (
    <>
      <NavBarMain />
      <Header />
        <h2 style={{textAlign:"center", color:"#3142de"}}>Product Page</h2>
        <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
          <Productlink url="/product/computer" title="COMPUTER" bgcolor="#0eb643" />
          <Productlink url="/product/smartphone" title="SMARTPHONE" bgcolor="#b60e0e"/>
        </div>
        <p style={{textAlign:"center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non laboriosam eos a molestiae reiciendis unde, necessitatibus, rerum fugiat mollitia officiis odio odit consequatur ad vel accusantium corrupti! Quibusdam, quae!
        </p>
      <Footer />
    </>
  )
}

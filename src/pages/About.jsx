//rfc , rfce , rafce

import Header from "./../components/Header"
import Footer from "./../components/Footer"
import NavBarMain from "./../components/NavBarMain"

export default function About() {
  return (
    <>
      <NavBarMain />
      <Header />
        <h2 style={{textAlign:"center", color:"#3142de"}}>About Page</h2>
        <p style={{textAlign:"center"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam distinctio cumque praesentium quasi laborum iusto ipsa nulla consectetur repellendus minima, quibusdam ad pariatur, vel tempora libero culpa! Reprehenderit, iusto.
        </p>
      <Footer />
    </>
  )
}

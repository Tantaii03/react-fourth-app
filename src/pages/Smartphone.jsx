import ProductHeader from "./../components/ProductHeader"
import Footer from "./../components/Footer"

export default function Smartphone() {
  return (
    <>
     <a href="/product" style={{textDecoration:"none"}}>
      <ProductHeader />
      </a>
        <h2 style={{textAlign:"center", color:"#3142de"}}>Smartphone Page</h2>
        <p style={{textAlign:"center"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere nulla ab voluptates placeat minima obcaecati explicabo, doloremque deserunt totam dignissimos sunt repellendus vitae ad? Aliquam consequatur error repellat voluptas.
        </p>
      <Footer />
    </>
  )
}

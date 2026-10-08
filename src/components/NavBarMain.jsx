
export default function NavBarMain() {
    const a_stlye = {color:"white", textDecoration:"none"};

    const div_style = {display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#151185", color:"white", padding:"15px", marginBottom:"50px"};
  return (
    <div style={div_style}>
        <a href="/" style={{a_stlye}}>HOME</a>
        <a href="/about" style={{a_stlye}}>ABOUT</a>
        <a href="/contract" style={{a_stlye}}>CONTRACT</a>
        <a href="/product" style={{a_stlye}}>PRODUCT</a>
    </div>
  )
}

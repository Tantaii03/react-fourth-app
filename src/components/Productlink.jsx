
export default function Productlink({url, title}) {
    const a_link = {color:"white", textDecoration:"none", padding:"6px 10px", borderRadius:"5px", backgroundColor:"#3a7c19"};
  return (
    <>
        <a href={url} style={{a_link}}>
            {title}
        </a>
    </>
  )
}

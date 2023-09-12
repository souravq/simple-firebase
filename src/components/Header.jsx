import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{display:"flex", justifyContent:"center",gap:"40px", paddingBottom:"30px"}}>
        <Link to="/"><p>Home</p></Link>
        <Link to="/login"><p>Login</p></Link>
    </div>
  )
}

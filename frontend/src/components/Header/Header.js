import { Link } from "react-router-dom";
  
function Header() {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home </Link> |{" "}
        <Link to="dashboard">Dashboard </Link> 
        <Link to="train">Train </Link> 
        <Link to="contact">Contact us </Link>
      </nav>
    </div>
  );
}

export default Header;
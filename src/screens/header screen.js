import { Link } from "react-router-dom"
import "../App.css"



const HeaderScreen=()=>{




    return(
        <>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <Link to={"/"} className="fpkt">flipkart</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <Link to={"/menu"} className="fpkt">Menu</Link>
        </li>
        <li class="nav-item">
        <Link to={"/about"} className="fpkt">About</Link>
        </li>
        <li class="nav-item">
        <Link to={"/contact"} className="fpkt">Contact</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        </>
    )
}
export default HeaderScreen
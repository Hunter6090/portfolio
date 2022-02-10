import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function SideBar(){
	return(
		<div>
	      	<input type = "checkbox" id="openSidebarMenu" style={{display : 'none'}}></input>
	      	<label htmlFor="openSidebarMenu" className="sidebarIconToggle">
		        <div className="spinner diagonal part-1"></div>
		        <div className="spinner horizontal"></div>
		        <div className="spinner diagonal part-2"></div>
	      	</label>
	      	<div id="sidebarMenu">
		        <ul className="sidebarMenuInner">
		          	<li style ={{cursor : 'default'}}>HUN7 LEE <span>Web Developer</span></li>
		          	<li>
		          		<Link to="/">Home</Link>
		          	</li>
		          	<li>
		          		<Link to="/gmap">GMap</Link>
		          	</li>

		          	<li>
		          		<Link to="/products">Products</Link>
		          	</li>
		          	<li><a href="https://www.cakeresume.com/s--4EsN3y7EGEVxz2izmIS5lQ--/rockofsky1" target="_blank">Resume</a></li>
		          	{/*<li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>*/}
		        </ul>
	      	</div>
		</div>
	)
}

export default SideBar
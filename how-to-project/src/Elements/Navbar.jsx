import Logo from "../Images/Logo.png";
import Down_arrow from "../Images/down-arrow.png";
import LoginIcon from "./login";
import {auth } from "../Firebase/firebase";
import { UserAuth } from "../Firebase/AuthContext";
import { NavLink } from "react-router-dom";

function Navbar () {

    const {user, logOut} = UserAuth(auth);
    
    const handleSignOut = async()=>{
        try{
          await logOut()
        }catch(error){
          console.log(error)
        }
    }

    return ( 
        <div class="bar">
            <nav>
                <img class="Logo" src={Logo} alt="Logo" />
                <input type="checkbox" id="check"/>
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
                
                <ul class="navbar-options">
                    <li>
                        <NavLink exact to="/" activeclassName="active-page">Home</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/SearchPage" activeclassName="active-page">Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contribute" activeclassName="active-page">Publish</NavLink>
                    </li>
                    
                    {
                        // (user.providerData[0].providerId === 'google.com')
                        // ? <li><a href="/my-activity">Dashboard</a></li>
                        // : <li><a href="/admin">Dashboard</a></li>
                        //<li><a href="/my-activity">Dashboard</a></li>
                    }
                    
                    
                    {/*<li>
                    <div class="dropdown">
                    <button class="dropbtn"><img src={Down_arrow}></img></button>
                    <ul class="dropdown-content">
                        <li>Publish <span></span><span></span><span></span><span></span></li>
                        <li>Invite <span></span><span></span><span></span><span></span></li>
                        <li>Feedback <span></span><span></span><span></span><span></span></li>
                    </ul>
                    </div>
                    </li>*/}
                    
                </ul>
                
                <div class="dropdown">
                    <LoginIcon/>
                    <ul class="dropdown-content">
                        <li>Dashboard <span></span><span></span><span></span><span></span></li>
                        <li>Feedback <span></span><span></span><span></span><span></span></li>

                        {
                    user? <li onClick={handleSignOut}>Logout <span></span><span></span><span></span><span></span></li> 
                        : <li><a href="/loginpage">Login <span></span><span></span><span></span><span></span></a></li>
                        }

                        
                    </ul>
                </div>


            </nav>
            <hr/>
        </div>
    );
}

export default Navbar ;
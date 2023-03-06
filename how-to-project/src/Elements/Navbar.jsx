import Logo from "../Images/Logo.png";
import Down_arrow from "../Images/down-arrow.png";
import LoginIcon from "./login";
import {auth } from "../Firebase/firebase";
import { UserAuth } from "../Firebase/AuthContext";

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
                
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a class="active-page" href="/feed">My Feed</a></li>
                    <li><a href="/searchpage">Search</a></li>
                    {
                        // (user.providerData[0].providerId === 'google.com')
                        // ? <li><a href="/my-activity">Dashboard</a></li>
                        // : <li><a href="/admin">Dashboard</a></li>
                        <li><a href="/my-activity">Dashboard</a></li>
                    }
                    
                    
                    <li>
                    <div class="dropdown">
                    <button class="dropbtn"><img src={Down_arrow}></img></button>
                    <ul class="dropdown-content">
                        {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#">Publish</button> */}
                        <li>Publish <span></span><span></span><span></span><span></span></li>
                        <li>Invite <span></span><span></span><span></span><span></span></li>
                        <li>Feedback <span></span><span></span><span></span><span></span></li>
                    </ul>
                    </div>
                    </li>
                    
                </ul>
                
                {
                    user? <LoginIcon/>
                        : <a class="login-icon" href="/loginpage"><i class="fa-regular fa-3x fa-circle-user"></i></a>
                }


            </nav>
            <hr/>
        </div>
    );
}

export default Navbar ;
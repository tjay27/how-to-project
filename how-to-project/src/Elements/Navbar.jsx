import Logo from "../Images/Logo.png";
import Down_arrow from "../Images/down-arrow.png";
import LoginIcon from "./login";

function Navbar () {
    return ( 
        <div class="bar">
            <nav>
                <img class="Logo" src={Logo} alt="Logo" />
                
                <ul>
                    <li class="active-page"><a href="/">Home</a></li>
                    <li><a href="/">Library</a></li>
                    <li><a href="/">Activities</a></li>
                    <li><a href="/">Search</a></li>
                    {/* <li><a href="feed">Feed</a></li>
                    <li><a href="My-Activity">My Activity</a></li>
                    <li><a href="SearchPage">Search</a></li> */}
                    
                    <li>
                    <div class="dropdown">
                    <button class="dropbtn"><img src={Down_arrow}></img></button>
                    <div class="dropdown-content">
                        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#">Publish</button>
                        <a href="#">Invite</a>
                        <a href="#">Feedback</a>
                    </div>
                    </div>
                    </li>
                    
                </ul>
                

                <button type="button" class="b2">Get Chrome Extension</button>
                <LoginIcon/>

            </nav>
            <hr/>
        </div>
    );
}

export default Navbar ;
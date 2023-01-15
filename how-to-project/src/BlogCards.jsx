import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState ,useEffect} from "react";
import { collection, query, where ,onSnapshot,arrayUnion,arrayRemove,doc,updateDoc} from "firebase/firestore";
import { auth, db } from "./Firebase/firebase";
import useAuthState from "./Firebase/hooks";
import { UserAuth } from "./Firebase/AuthContext";
import TransitionModal from './Elements/Modal';
import { Link } from "react-router-dom";
import Comment from "./Elements/Comment";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton  } from "react-share";

function LikeArticle({id,likes,Title}){
  const {user} = useAuthState(auth);

  const likesRef = doc(db,"Blogs",id);
  const handleLike = ()=>{
      if(likes?.includes(user.uid)){
          updateDoc(likesRef,{
              likes:arrayRemove(user.uid),
          }).then(()=>{
              console.log("unliked");
          }).catch((e)=>{
              console.log(e);
          });
      }
      else{
          updateDoc(likesRef,{
              likes:arrayUnion(user.uid)
          }).then(()=>{
              console.log("liked");
          }).catch((e)=>{
              console.log(e);
          });
      }
  
  }
  return(
      <div>
         <Button
          size="small"
          sx={{ backgroundColor: "none", color: "#c69af6" }}
        >
          <i class="fas fa-2x fa-heart"  onClick={handleLike}></i>
        </Button>
      </div>
  )
}
export default function BlogCard() { 
   // const classes = useStyles();

   const [searchInput, setSearchInput] = useState("");
   const [updated, setUpdated] = useState('');

   const [articles,setArticles]=useState([]);
   const {user} = useAuthState(auth);

  const searchBlog = () => {
    const articleRef=collection(db,"Blogs")
    var q;
      
      console.log(searchInput);
      if (searchInput.length > 0) {
        q=query(articleRef, where("title_lower", "==" , searchInput.toLowerCase()));
      }

      else {
        q=query(articleRef);
      }

      onSnapshot(q,(snapshot)=>{
        const articles = snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data(),
        }));
        setArticles(articles);
        console.log(articles);
     })
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUpdated(searchInput);
      searchBlog();
    }
  };


  
   useEffect(()=>{
       const articleRef=collection(db,"Blogs")
       const q=query(articleRef);
       onSnapshot(q,(snapshot)=>{
           const articles = snapshot.docs.map((doc)=>({
               id:doc.id,
               ...doc.data(),
           }));
           setArticles(articles);
           console.log(articles);
       })
   },[]);

  return (
  <>
    <div>
        <input
          class="search-bar"
          type="text"
          placeholder="Search"
          id="searchBar"
          onChange={(e)=>{setSearchInput(e.target.value);}}
          onKeyDown = {handleKeyDown}
          value={searchInput}
        ></input>
        <button class="search-icon" type="submit" onClick={searchBlog}><i class="fas fa-search"></i></button>
      </div>


    <div>
             {
    articles.length === 0 ?(
        <p>no articles found</p>
    ):(
    articles.map(({id,Title,Topic,userId,likes,comment,imgURL,})=><div class="BlogCard" key={id}>
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white",
      }}
    >
      <CardMedia component="img" height="140" image={`${imgURL}`} alt="media" />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/article/${id}`}>{Title}</Link>
        </Typography>
        <Typography variant="body2" color="white">
          {Topic}
        </Typography>
        
      </CardContent>
      
      <CardActions>
        <div className="mt-20">
        {user?<LikeArticle
            id={id}
            likes={likes}
            />: <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
          >
             <i class="fa-2x fa-regular fa-heart"></i>
          </Button>}
            <p>{likes?<span>{likes.length}</span>:""}</p></div>

        <Button size="small" sx={{ backgroundColor: "none", color: "#c69af6" }}>
          <i class="fas fa-2x fa-comments"></i>
          <TransitionModal>
                      
              <Comment id={id} currentlyLoggedInUser={user}/>
            
          </TransitionModal>
        </Button>
        {/* <p>{comments?<span>{comments.length}</span>:""}</p> */}
       
        
        <Button
          size="small"
          sx={{ backgroundColor: "none", color: "#c69af6" }}
        >
          <i class="fas fa-2x fa-share"></i>
          <TransitionModal 
            title="Share via"
            >
              <FacebookShareButton
              url={Link}>
                <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton
              title="sharing content"
              url={Link}>
                <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
              </WhatsappShareButton>
              <TwitterShareButton
              url={Link}>
                <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
              </TwitterShareButton>
              <LinkedinShareButton
              url={Link}>
              <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
              </LinkedinShareButton>
          </TransitionModal>
        </Button>
      </CardActions>
    </Card>
    
  </div>)
    )
}
</div>
</>
)}
 
 
    

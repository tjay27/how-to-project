import React from "react";
import Img1 from "../Images/6.png";
import Img2 from "../Images/7.png";
import Img3 from "../Images/image 2.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TransitionModal from '../Elements/Modal';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton  } from "react-share";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import { useEffect } from "react";
import { collection, query, where ,onSnapshot,arrayUnion,arrayRemove,doc,updateDoc} from "firebase/firestore";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Comment from "../Elements/Comment";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function BlogPost() {
  const {id}=useParams();
  const [article,setArticle]=useState(null);
  const{user}=useAuthState(auth);

  useEffect(()=>{
    const docRef=doc(db,"Blogs",id);
    onSnapshot(docRef,(snapshot)=>{
      setArticle({...snapshot.data(),id:snapshot.id});
    });
  },[]);


  const [likeState, setLikeState] = useState(false);
  const [savedState, setSavedState] = useState(false);

  // const handleLike = () => {
  //   const likesRef = doc(db,"Blogs",id);
  //   const likes = likesRef.get(likes);
  //   console.log(likes);
  //   const userRef = doc(db,"users", user.email);

  //   if(likeState)
  //   {

  //     // updating users collection
  //     updateDoc(userRef,{
  //       Liked:arrayRemove(id),
  //   }).then(()=>{
  //     console.log("Unliked");
  //   }).catch((e)=>{
  //       console.log(e);
  //   });

  //   // updating blog collection
  //   // if(likesRef.likes?.includes(user.uid)){
  //   //   updateDoc(likesRef,{
  //   //       likes:arrayRemove(user.uid),
  //   //   }).then(()=>{
  //   //       console.log("unliked");
  //   //   }).catch((e)=>{
  //   //       console.log(e);
  //   //   });
    
  //   // }

  // }
  //   else{
  //     updateDoc(userRef,{
  //       Liked:arrayUnion(id),
  //   }).then(()=>{
  //     console.log("liked");
  //   }).catch((e)=>{
  //       console.log(e);
  //   });


  //   // updating blog collection
  // //   updateDoc(likesRef,{
  // //     likes:arrayUnion(user.uid)
  // // }).then(()=>{
  // //     console.log("liked");
  // // }).catch((e)=>{
  // //     console.log(e);
  // // });
      
  //   }
  // };

  const handleBookmark = () => {

    const userRef = doc(db,"users", user.email);
    if(savedState)
    {
      updateDoc(userRef,{
        Bookmark:arrayRemove(id),
    }).then(()=>{
        console.log("removed blog");
    }).catch((e)=>{
        console.log(e);
    });
    }

    else{
      updateDoc(userRef,{
        Bookmark:arrayUnion(id),
    }).then(()=>{
        console.log("saved blog");
    }).catch((e)=>{
        console.log(e);
    });
    }
  };


  return (

    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />
      
      


     {article && (
      <>
      <Button size="large"  disableTouchRipple>
      <i class="arrow fa-solid fa-3x fa-circle-arrow-left"></i></Button>
      <Button disableTouchRipple>
      <i class="arrow fa-solid fa-3x fa-circle-arrow-right"></i></Button>
      
      
      
      <div class="right-bar">

        <Button size="large" sx={{color:"white",margin:2}}>
          <i class="fa fa-3x fa-check-square-o"  aria-hidden="true"></i> 
          <Typography variant="h6" align="center" >In This Article</Typography>
        </Button>
         <Typography variant="body1" align="center">{article.category}</Typography>
         
      </div>
     <div className="container-head">
        <Typography align="center">{article.Title}</Typography>
        <Button  size="large" disableTouchRipple>
          <i class="user-icon fa-3x fa-solid fa-user" ></i>
          <Typography variant="h6" align="center" color="white" marginLeft={5}>{article.author.name}</Typography>
        </Button>
      </div>     
       <img class="img3" src={`${article.imgURL}`} alt="" />
       

      <div class="container-content">

      <Typography variant="h6" align="center">{article.description}</Typography>
      </div>
      {
        (user)
        ? <div class="footer">
        <Checkbox   sx={{ '& .MuiSvgIcon-root': { fontSize: 54 } , color: "white",
  '&.Mui-checked': {
    color: "white"}}}
{...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
// onChange={ (event) => {setLikeState(event.target.checked);}} onClick={handleLike}
/>

        <Button size="large">
          <i class="footer-icon fa fa-3x fa-share-alt"></i>
          <TransitionModal 
          title="Share via"
          >
            <FacebookShareButton
            url="ok">
              <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton
            title="sharing content"
            url="ok">
              <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <TwitterShareButton
            url="ok">
              <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
            </TwitterShareButton>
            <LinkedinShareButton
            url="ok">
            <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
            </LinkedinShareButton>
        </TransitionModal>
        </Button>
        <Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 54 } , color: "white",
  '&.Mui-checked': {
    color: "white"}}} {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} onChange={ (event) => {setSavedState(event.target.checked);
}} onClick={handleBookmark} />
        
    </div>

    : null
      }
      

      </>)}


      
    </>
  );
}

export default BlogPost;

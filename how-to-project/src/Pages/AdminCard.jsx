import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState ,useEffect} from "react";
import { collection, query, where ,onSnapshot,arrayUnion,arrayRemove,doc,updateDoc,addDoc} from "firebase/firestore";
import { auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import { UserAuth } from "../Firebase/AuthContext";
import { Link } from "react-router-dom";
import DeleteArticle from "../Elements/DeleteArticle";

function ApprovePost({id}){
  const  approvePost = async () =>{
    await updateDoc(doc(db,"Admin",id),{status:true})
    console.log("hello");
  }
    return(
      <div>
          <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
            onClick={approvePost}
          >
            <i class="fas fa-2x fa-pen-to-square"></i>
          </Button>
      </div>
    )
}

export default function BlogCard() { 

   const [articles,setArticles]=useState([]);
   const [approve,setApproved]=useState([])
   const {user} = useAuthState(auth);


   useEffect(()=>{
       const articleRef=collection(db,"Admin")
       const q=query(articleRef,where("status","==",false));
       onSnapshot(q,(snapshot)=>{
           const articles = snapshot.docs.map((doc)=>({
               id:doc.id,
               ...doc.data(),
           }));
           setArticles(articles);
           console.log(articles);
       })

       const approveRef=collection(db,"Admin")
       const a=query(approveRef,where("status","==",true));
       onSnapshot(a,(snapshot)=>{
           const approve = snapshot.docs.map((doc)=>({
               id:doc.id,
               ...doc.data(),
           }));
           setApproved(approve);
           console.log(approve);
       })
   },[]);

  return (
  <>

    <div>
    <Typography variant="h5" color="white">Pending</Typography>
    {
    articles.length === 0 ?(
        <p style={{margin: 20, fontSize: 22}}>No articles found</p>
    ):(

    articles.map(({id,Title,Topic,imgURL,author})=><div class="ApproveCard" key={id}>

    <Card class="cards"
      // sx={{
      //   maxWidth: 345,
      //   backgroundColor: "rgb(70, 43, 136, 0.4)",
      //   color: "white",
      // }}
    >
      <CardMedia component="img" height="140" image={`${imgURL}`} alt="media" />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/article/${id}`}>{Title}</Link>
        </Typography>
        <Typography variant="body2" color="white">
          Author: {author.name}
        </Typography>
        <Typography variant="body2" color="white">
          Field: {Topic}
        </Typography>
        
      </CardContent>
      <CardActions>
      <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
          >
            <i class="fas fa-2x fa-file-circle-plus"></i>
          </Button>
      <ApprovePost id={id}/>
      <DeleteArticle id={id}/>
      </CardActions>
    </Card>
    
  </div>)
    )
}
</div>


<div>
<Typography variant="h5" color={"white"}>Approved</Typography>
  {
    approve.length === 0 ?(
        <p style={{margin: 20, fontSize: 22}}>No articles found</p>
    ):(

    approve.map(({id,Title,Topic,imgURL,author})=><div class="ApproveCard" key={id}>

    <Card class="cards"
      // sx={{
      //   maxWidth: 345,
      //   backgroundColor: "rgb(70, 43, 136, 0.4)",
      //   color: "white",
      // }}
    >
      <CardMedia component="img" height="140" image={`${imgURL}`} alt="media" />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/article/${id}`}>{Title}</Link>
        </Typography>
        <Typography variant="body2" color="white">
          Author: {author.name}
        </Typography>
        <Typography variant="body2" color="white">
          Field: {Topic}
        </Typography>
        
      </CardContent>
      <CardActions>
      <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
          >
            <i class="fas fa-2x fa-file-circle-plus"></i>
          </Button>
      <ApprovePost id={id}/>
      <DeleteArticle id={id}/>
      </CardActions>
    </Card>
    
  </div>)
    )
}
</div>
</>
)}
 
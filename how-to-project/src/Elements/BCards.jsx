import React ,{useState,useEffect} from "react";
import Card from "@mui/material/Card";
import { auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { collection, doc,query,onSnapshot, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import DeleteArticle from "./DeleteArticle";


export default function BCards({user}) {
  const [articles,setArticles]=useState([]);
  //  const {user} =  useAuthState(auth);

   useEffect(()=>{
    const reportRef= collection(db,"users",user.email,"My submission");
    const q= query(reportRef);

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

    <div>
      {
        articles.length === 0 ?( 
          <p>no articles found</p>
        ):(
          articles.map(({id,Title,link,Topic,userId,likes,comment, imgURL})=><div class="BlogCard" key={id}>
            <Card class="cards"
        // sx={{
        //   maxWidth: 700,
        //   backgroundColor: "rgb(148, 207, 250, 0.4)",
        //   color: "white",
        //   display:"flex",
        //   borderRadius:7
        // }}
      >
        <CardMedia component="img" height="120" width="250"
        sx={{width:150,display:"flex",padding:3}}  alt="media" src={imgURL}/>
        <CardContent sx={{display:"inline" }}>
          <Link to={`/article/${id}`} style={{color: "white"}}>{Title}</Link>
          <DeleteArticle size="small"
            id={id}/>
          <Button
            size="small"
            sx={{color: "#40F4FF" }}>    
            <i class="fa-solid fa-2x fa-eye"></i>     
 </Button>
          <Button
            size="small"
            sx={{color: "#40F4FF" }}>         
<i class="fa-solid fa-2x fa-pen-to-square"></i>         
 </Button>

        </CardContent>
      </Card>
      </div>
      ))}
      
    
    </div>
  );
}

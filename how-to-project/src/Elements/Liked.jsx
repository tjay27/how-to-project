import React ,{useState,useEffect} from "react";
import Card from "@mui/material/Card";
import { auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { collection, doc,query,onSnapshot, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";


export default function Liked() {
  const [articles,setArticles]=useState([]);
   const {user} = useAuthState(auth);

   useEffect(()=>{
    const reportRef=collection(db,"users","deepanshi.chourasia@gmail.com","My submission");
    const q=query(reportRef);
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

    <div >
       {
    articles.length === 0 ?(
        <p>no articles found</p>
    ):(
    articles.map(({id,Title})=><div class="BlogCard" key={id}>
    <Card
        sx={{
          maxWidth: 900,
          backgroundColor: "rgb(148, 207, 250, 0.4)",
          color: "white",
          display:"flex",
          borderRadius:7
        }}
      >
        <CardMedia component="img" height="120" 
        sx={{width:80,display:"flex",padding:3}}  alt="media" />
        <CardContent sx={{display:"flex" }}>
          <Link to={`/article/${id}`} sx={{color:"white"}}>{Title}</Link>
          <Button></Button>

        </CardContent>
      </Card>
      </div>
      ))}
      
    
    </div>
  );
}
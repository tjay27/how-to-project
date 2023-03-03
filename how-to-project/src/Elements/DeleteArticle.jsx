import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import {  auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import { Button } from "@mui/material";


export default function DeleteArticle({ id }) {
    const {user}=useAuthState(auth)
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Admin", id));
        alert("Article deleted successfully", { type: "success" });
        await deleteDoc(doc(db,"users",user.email,"My submission",id));        
      } catch (error) {
        alert("Error deleting article", { type: "error" });
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Button
            size="small"
            sx={{color: "#c69af6" ,
                 }}>         
            <i class="fa-solid fa-2x fa-trash"
            onClick={handleDelete}
        style={{ cursor: "pointer" }}></i>     
 </Button>
      
    </div>
  );
}
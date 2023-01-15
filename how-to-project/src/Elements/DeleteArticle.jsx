import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import {  auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";


export default function DeleteArticle({ id }) {
    const {user}=useAuthState(auth)
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Blogs", id));
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
      <i
        className="fa fa-trash"
        onClick={handleDelete}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
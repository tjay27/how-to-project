import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <i class="fas fa-times-circle"></i>
        </button>
        <Typography
          variant="h5"
          marginRight="50px"
          display="block"
          color="black"
          marginBottom="30px"
        >
          {props.title}
        </Typography>
        <Typography marginBottom="30px" color="black">
          {props.content}
        </Typography>
        {props.children}

        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "20px" }}
          onClick={() => props.setTrigger(false)}
        >
          {props.submitText}
        </Button>
        
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} size="small" sx={{ backgroundColor: "none", color: "#c69af6" }} disableTouchRipple>
        {props.button}
      </Button>
      <Dialog
        sx={{backgroundColor:"rgba(255, 255, 255, 0.6)"}}
        PaperProps={{
          style:{
            backgroundColor:"black",
            boxShadow:"none"
            
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{color:'white'}} >
          <h2>{props.title}</h2>
        </DialogTitle>
        <DialogContent id="alert-dialog-description" sx={{color:'white'}} >
          <h6>{props.content}</h6>
        </DialogContent>
        <DialogContent sx={{color:'white',marginLeft:1}}>
          {props.children}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
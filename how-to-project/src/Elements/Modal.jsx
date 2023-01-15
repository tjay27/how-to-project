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
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          <h2>{props.title}</h2>
        </DialogTitle>
        <DialogContent id="alert-dialog-description" >
          <h4>{props.content}</h4>
        </DialogContent>
        <DialogContent>
          {props.children}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
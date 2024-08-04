import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function AlertDeleteAccount({ isOpen, children }) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={close}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className="!font-bold">Delete Account?</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          className="!font-semibold !text-neutral-500"
        >
          This action is not reversible. All information related to this account
          will be deleted permanently. Are you sure you want to continues?
        </DialogContentText>
      </DialogContent>
      {children}
    </Dialog>
  );
}

export default AlertDeleteAccount;

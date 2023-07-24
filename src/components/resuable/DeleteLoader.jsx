import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const DeleteLoader = ({deletePopup, hideDeletePopup, handleDeleteConfrim}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={deletePopup}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="text-[red]">
          {"Delete Client"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to delete this client ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="px-3 py-2 bg-[red]" onClick={hideDeletePopup}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleDeleteConfrim}>
            Confrim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteLoader;

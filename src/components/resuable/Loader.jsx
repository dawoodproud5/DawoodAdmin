import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ open, message }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="flex flex-col justify-center item-center gap-2">
          <div className="loader mx-auto">
            <CircularProgress color="inherit" />
          </div>
          <div className="message">
            <p>{message}</p>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default Loader;

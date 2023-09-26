import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertLayout } from "@/app/redux/features/layoutSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

interface CreatNewLayoutProps {
  openPopUp: boolean;
  setOpenPopUp: (open: boolean) => void;
}

export default function CreatNewLayout({
  openPopUp,
  setOpenPopUp,
}: CreatNewLayoutProps) {
  const [layoutName, setLayoutName] = useState("");
  const { layoutList } = useSelector((state: RootState) => state.layouts);
  const dispatch = useDispatch();

  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
    setLayoutName("");
  };

  const handleCreateLayout = () => {
    // Simulasi penyimpanan data ke database atau API
    const newLayoutList = [
      ...layoutList,
      {
        id: Date.now(),
        name: layoutName,
      },
    ];

    // Simulasi dispatch untuk menyimpan data ke Redux
    dispatch(insertLayout(newLayoutList));

    // Tutup dialog
    handlePopUp();
  };

  return (
    <div>
      <Dialog
        open={openPopUp}
        onClose={handlePopUp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack sx={{ pt: 1 }} spacing={2}>
              <Typography textAlign="center">Layout Name</Typography>
              <TextField
                id="outlined-basic"
                label="name"
                variant="outlined"
                value={layoutName}
                onChange={(e) => setLayoutName(e.target.value)}
              />
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopUp}>cancel</Button>
          <Button
            onClick={() => {
              handleCreateLayout();
            }}
            autoFocus
          >
            create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// RootState adalah tipe state dari Redux
interface RootState {
  layouts: {
    layoutList: any[]; // Ganti dengan tipe data yang sesuai dengan data layout
  };
}

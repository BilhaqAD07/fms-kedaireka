'use client'

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";


export default function NewGroup({ openDialog, setOpenDialog }) {
  const [groupName, setGroupName] = useState("");
  const [checked, setChecked] = useState([]);

  const creatGroup = () => {
    const path = `users/${currentUserId}/groupDevices`;
    const data = { name: groupName, id: Date.now(), devices: checked };
  };

  const handleSubmit = () => {
    if (groupName === "") return;
    if (checked.length === 0) {
      alert("please select device");
      return;
    }
    creatGroup();
    // updateListAllDevice()
    setOpenDialog(!openDialog);
    setGroupName("");
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <div className="bg-white dark:bg-secondary_dark text-black dark:text-white">
      <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)}>
        <DialogTitle className="bg-white dark:bg-secondary_dark  text-black dark:text-white">Group</DialogTitle>
        <DialogContent className="bg-white dark:bg-secondary_dark  text-black dark:text-white" sx={{ minWidth: "400px" }}>
          <TextField
            className="bg-white dark:bg-secondary_dark  text-black dark:text-white"
            autoFocus
            margin="dense"
            id="group name"
            label="group name"
            type="text"
            fullWidth
            variant="standard"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </DialogContent>
        <DialogActions className="bg-white dark:bg-secondary_dark  text-black dark:text-white">
          <Button onClick={() => setOpenDialog(!openDialog)}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
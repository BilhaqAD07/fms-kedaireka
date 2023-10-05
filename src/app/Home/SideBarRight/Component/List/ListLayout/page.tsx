'use client'

import React, { useEffect, useState } from "react";
import { Divider, Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

const ListLayout = ({ onOpen, open }) => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [dragItems, setDragItems] = useState([]);
    
    return(
<>
<div className="flex cursor-pointer px-4 py-4 hover:bg-gray-200 hover:bg-opacity-60 w-auto min-h-[min-height]" onClick={onOpen}>
    <ListItemIcon>
        <FormatListBulletedIcon/>
    </ListItemIcon>
    <ListItemText primary="Layout"/>
    { open ? <ExpandLess/> : <ExpandMore/> }
</div>
<Collapse in={open} timeout='auto' unmountOnExit>
    <List>
        <Stack>
            <div className="ml-2 mb-2 mt-2 mr-2">
                Daftar Layout akan dibuat disini
            </div>
        </Stack>
    </List>
</Collapse>
</>

    )
}
export default ListLayout;
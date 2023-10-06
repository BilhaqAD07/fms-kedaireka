'use client'
import React, { useState } from "react";
import { Divider } from "@mui/material";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

import NewGroup from "../NewGroup/page";
import NewDevices from "../NewDevices/page";

import ListDevices from "../List/ListDevices/page";
import ListGroups from "../List/ListGroups/page";
import { useSelector } from "react-redux";
import ListLayout from "../List/ListLayout/page";

const Devices = () => {
  const [openListGroups, setOpenListGroups] = useState(false);
  const [openListDevices, setOpenListDevices] = useState(false);
  const [openListLayout, setOpenListLayout] = useState(false);

  const [openPopUpNewGroup, setOpenPopUpNewGroup] = useState(false);
  const [openPopUpNewDevices, setOpenPopUpNewDevices] = useState(false);

  return (
    <main className="bg-white dark:bg-neutral-700  min-h-screen">

        <NewGroup
        openDialog={openPopUpNewGroup}
        setOpenDialog={setOpenPopUpNewGroup}
      />

      <NewDevices
        openDialog={openPopUpNewDevices}
        setOpenDialog={setOpenPopUpNewDevices}
      />

      <ListDevices
        onOpen={() => setOpenListDevices(!openListDevices)}
        open={openListDevices}
      />

      <ListGroups
        onOpen={() => setOpenListGroups(!openListGroups)}
        open={openListGroups}
      />

      <ListLayout
        onOpen={() => setOpenListLayout(!openListLayout)}
        open={openListLayout}
      />


      <Divider />
      <ListItemButton
        onClick={() => setOpenPopUpNewDevices(!openPopUpNewDevices)}
      >
        <ListItemIcon>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText primary="New Devices" />
      </ListItemButton>

      <ListItemButton onClick={() => setOpenPopUpNewGroup(!openPopUpNewGroup)}>
        <ListItemIcon>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText primary="New Group" />
      </ListItemButton>
    </main>
  );
};

export default Devices;
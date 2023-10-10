import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { colors, IconButton, Stack, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

interface Device {
  id: number;
  name: string;
  macAddress: string;
  sendDataInterval: number;
  properties: Array<{
    ID: number;
    modularIO: string;
    IOType: string;
    sensorType: string;
  }>;
  position: {
    top: string;
    left: string;
  };
}

interface DeviceProperties {
  ID: number;
  modularIO: string;
  IOType: string;
  sensorType: string;
}

interface FormNewDeviceProps {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormNewDevice: React.FC<FormNewDeviceProps> = ({
  openDialog,
  setOpenDialog,
}) => {
  const [deviceName, setDeviceName] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const { allDevice, publicDevice } = useSelector((state: any) => state.devices);

  const publicMacAddress = Object.keys(publicDevice);

  const [sendDataInterval, setSendDataInterval] = useState(0);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [isError, setIsError] = useState({ error: false, message: "" });
  const [deviceProperties, setDeviceProperties] = useState<DeviceProperties[]>([
    { ID: Date.now(), modularIO: "", IOType: "", sensorType: "" },
  ]);

  const handleSubmit = () => {
    const oldDevices = allDevice;

    if (deviceName === "" || macAddress === "") {
      setIsError({ error: true, message: "Mac Address tidak boleh kosong" });
      return;
    }

    const isMacAddressAlreadyUsed = oldDevices.find(
      (device: any) => device.macAddress === macAddress
    );

    if (isMacAddressAlreadyUsed) {
      setIsError({ error: true, message: "Mac Address sudah digunakan" });
      return;
    }

    if (!publicMacAddress.includes(macAddress)) {
      setIsError({ error: true, message: "Mac Address belum terdaftar" });
      return;
    }

    deviceProperties.forEach((device) => {
      if (
        device.modularIO === "" ||
        device.IOType === "" ||
        device.sensorType === ""
      ) {
        setIsError({ error: true, message: "Device properties tidak boleh kosong" });
        return;
      }
    });

    const newDevice: Device = {
      id: Date.now(),
      name: deviceName,
      macAddress,
      sendDataInterval,
      properties: deviceProperties,
      position: { top: "", left: "" },
    };

    // Simpan data newDevice atau lakukan operasi lainnya

    setOpenDialog(false);
    setDeviceName("");
    setMacAddress("");
    setDeviceProperties([
      { ID: Date.now(), modularIO: "", IOType: "", sensorType: "" },
    ]);
    setSendDataInterval(0);
  };

  const handleDeleteProperties = (ID: number) => {
    if (deviceProperties.length <= 1) return;
    const newProperties = deviceProperties.filter((data) => data.ID !== ID);
    setDeviceProperties(newProperties);
    setOpenDeleteModal(false);
  };

  return (
    <div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)} fullWidth>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between">
          <DialogTitle>Add Device</DialogTitle>
        </Stack>
        <DialogContent>
          <TextField
            error={isError.error}
            helperText={isError.message}
            autoFocus
            margin="dense"
            id="device name"
            label="device name"
            type="text"
            fullWidth
            variant="standard"
            value={deviceName}
            onChange={(e) => {
              setDeviceName(e.target.value);
              setIsError({ error: false, message: "" });
            }}
          />
          <TextField
            error={isError.error}
            helperText={isError.message}
            autoFocus
            margin="dense"
            id="Mac Address"
            label="Mac Address"
            type="text"
            fullWidth
            variant="standard"
            value={macAddress}
            onChange={(e) => {
              setMacAddress(e.target.value);
              setIsError({ error: false, message: "" });
            }}
          />

          <Stack direction="row" mt={5} spacing={2}>
            <Typography className="font-bold w-[300px]">Send data interval :</Typography>
            <Slider
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(_, newValue) => setSendDataInterval(newValue as number)}
            />
            <Typography>{sendDataInterval} minute</Typography>
          </Stack>

          {deviceProperties.map((data, index) => (
            <div key={data.ID}>
              <Modal
                open={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div 
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    backgroundColor: "#FFF",
                    padding: "20px",
                    borderRadius: "5px",
                    minHeight: "200px",
                    display: "flex",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                      variant="outlined"
                      onClick={() => setOpenDeleteModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleDeleteProperties(data.ID);
                      }}
                    >
                      delete
                    </Button>
                  </Stack>
                </div>
              </Modal>
              <DevicePropertiesComponent
                handleDelete={() => {
                  if (deviceProperties.length <= 1) return;
                  setOpenDeleteModal(true);
                }}
                setDeviceProperties={setDeviceProperties}
                deviceProperties={deviceProperties}
                index={index}
              />
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(!openDialog)}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

interface DevicePropertiesComponentProps {
  handleDelete: () => void;
  setDeviceProperties: React.Dispatch<React.SetStateAction<DeviceProperties[]>>;
  deviceProperties: DeviceProperties[];
  index: number;
}

const DevicePropertiesComponent: React.FC<DevicePropertiesComponentProps> = ({
  handleDelete,
  setDeviceProperties,
  deviceProperties,
  index,
}) => {
  const [expandModularIO, setExpandModularIO] = useState<boolean | null>(null);
  const [expandIOType, setExpandIOType] = useState<boolean | null>(null);
  const [showExpandIcon, setShowExpandIcon] = useState(false);
  const [modularIO, setModularIO] = useState("");
  const [IOType, setIOType] = useState("");
  const [sensorType, setSensorType] = useState("");

  const newDeviceProperties: DeviceProperties = {
    ID: Date.now(),
    modularIO,
    IOType,
    sensorType,
  };

  const handleAddProperties = () => {
    setDeviceProperties([...deviceProperties, newDeviceProperties]);
  };

  useEffect(() => {
    deviceProperties[index] = newDeviceProperties;
    setDeviceProperties(deviceProperties);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modularIO, IOType, sensorType]);

  const handleChangeModularIO = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModularIO(event.target.value as string);
  };

  const handleChangeIOType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setIOType(event.target.value as string);
  };

  const handleChangeSensorType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSensorType(event.target.value as string);
  };

  const handleOpenAndCloseExpand = () => {
    if (modularIO === null) return;
    setExpandIOType(!expandIOType);
    setExpandModularIO(!expandModularIO);
  };

  return (
    <Stack
      mt={2}
      p={1}
      style={{
        border: "1px solid #e3e3e3",
        borderRadius: "10px",
      }}
    >
      <Stack spacing={1} direction="row" alignItems="center">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">modular type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={modularIO}
            label="modular type"
            onChange={handleChangeModularIO}
          >
            <MenuItem value={"Input"}>Input</MenuItem>
            <MenuItem value={"Output"}>Output</MenuItem>
          </Select>
        </FormControl>

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <IconButton
            onClick={() => {
              handleOpenAndCloseExpand();
              setShowExpandIcon(!showExpandIcon);
            }}
          >
            {showExpandIcon ? (
              <ExpandMoreOutlinedIcon />
            ) : (
              <ExpandLessOutlinedIcon />
            )}
          </IconButton>
          <IconButton onClick={handleAddProperties} sx={{ color: colors.blue[500] }}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={handleDelete} sx={{ color: colors.red[500] }}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>

      {expandModularIO && (
        <Stack spacing={1} direction="row" mt={2} alignItems="center">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">IO Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={IOType}
              label="IO Type"
              onChange={handleChangeIOType}
            >
              <MenuItem value={"Digital"}>Digital</MenuItem>
              <MenuItem value={"Analog"}>Analog</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      )}

      {expandIOType && (
        <Stack spacing={1} direction="row" mt={2} alignItems="center">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">sensor type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sensorType}
              label="Sensor Type"
              onChange={handleChangeSensorType}
            >
              <MenuItem value={"Temperature"}>Temperature</MenuItem>
              <MenuItem value={"Humidity"}>Humidity</MenuItem>
              <MenuItem value={"Vibration"}>Vibration</MenuItem>
              <MenuItem value={"Presure"}>Presure</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      )}
    </Stack>
  );
};

export default FormNewDevice;

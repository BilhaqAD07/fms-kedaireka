import React, { useState, useRef, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Divider, ListItemIcon, ListItemText, Stack, Switch } from "@mui/material";
import { Slider } from "@mui/material";
import DeviceComponent from "../deviceComponent/page";

interface CardDropProps {
  item: any; // Sesuaikan dengan bentuk data item Anda
  onClick?: () => void;
  onDoubleClick?: () => void;
  layoutId: any;
  isActive: boolean;
  isDraging: boolean;
}

const CardDrop: React.FC<CardDropProps> = ({ item, onClick, onDoubleClick, isActive }) => {
  const divOverlay = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState<[number, number]>([100, 100]);
  const [isDown, setIsDown] = useState(false);
  const [deviceData, setDeviceData] = useState<any | null>(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [rangeTimer, setRangeTimer] = useState<number>(10);
  const [rangeLog, setRangeLog] = useState<number>(10);
  const [showSensorValue, setShowSensorValue] = useState(false);

  const defaultRangeTimer = parseInt(item?.control?.rangeTimer) || 10;
  const defaultRangeLog = parseInt(item?.control?.rangeLog) || 10;

  const openPopUpSettingDevice = Boolean(anchorEl);

  const handleOpenPopUpSettingDevice = (event: React.MouseEvent<HTMLElement>) => {
    if (event.button === 2) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleSaveSettingToDataBase = () => {
    // Gantilah ini dengan fungsi penyimpanan data yang sesuai
    console.log("Saving settings to database...");
  };

  const handleClosePopUpSettingDevice = () => {
    setAnchorEl(null);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    setIsDown(true);
    if (divOverlay.current) {
      setOffset([
        divOverlay.current.offsetLeft - e.clientX,
        divOverlay.current.offsetTop - e.clientY,
      ]);
    }
  };

  const handleMouseUp = () => {
    if (!isActive) return;
    setIsDown(false);
  };

  const savePositionToLocalStorage = (left: string, top: string) => {
    localStorage.setItem(
      item.macAddress,
      JSON.stringify({
        position: {
          left: left,
          top: top,
        },
      })
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isActive) return;

    if (
      e.clientY + offset[1] > window.innerHeight - 300 ||
      e.clientX + offset[0] > window.innerWidth * 0.6
    )
      return;
    if (e.clientX + offset[0] < 0 || e.clientY + offset[1] < 0) return;

    if (isDown && divOverlay.current) {
      divOverlay.current.style.left = e.clientX + offset[0] + "px";
      divOverlay.current.style.top = e.clientY + offset[1] + "px";
    }
    savePositionToLocalStorage(
      divOverlay.current?.style.left || "100px",
      divOverlay.current?.style.top || "100px"
    );
  };

  const downloadLogFileTxt = () => {
    if (deviceData) {
      const element = document.createElement("a");
      const file = new Blob(
        [Object.values(deviceData.sensor[0].log).join("\n")],
        {
          type: "text/plain",
        }
      );
      element.href = URL.createObjectURL(file);
      element.download = "log.txt";
      document.body.appendChild(element);
      element.click();
    }
  };

  const handleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    const path = `devices/${item.macAddress}/control/TX`;
    const data = isSwitchOn ? 0 : 1;
    // Gantilah ini dengan fungsi penyimpanan data yang sesuai
    console.log("Updating switch state to database...");
  };

  useEffect(() => {
    const storedData = localStorage.getItem(item.macAddress);
  
    if (storedData !== null) {
      const result = JSON.parse(storedData);
  
      if (result.position && divOverlay.current) {
        divOverlay.current.style.left = result.position.left;
        divOverlay.current.style.top = result.position.top;
      }
    } else {
      if (divOverlay.current) {
        divOverlay.current.style.left = "100px";
        divOverlay.current.style.top = "100px";
      }
    }
  }, [item.macAddress]);
  

  useEffect(() => {
    // Gantilah ini dengan cara untuk mendapatkan data perangkat dari database
    const fakeDeviceData = {
      // Isi dengan data perangkat yang sesuai
    };
    setDeviceData(fakeDeviceData);
  }, []);

  useEffect(() => {
    setIsSwitchOn(item?.control?.TX || false);
    setRangeTimer(item?.control?.rangeTimer || 10);
    setRangeLog(item?.control?.rangeLog || 10);
  }, [item?.control?.TX, item?.control?.rangeLog, item?.control?.rangeTimer]);

  return (
    <>
      <div
        ref={divOverlay}
        onMouseDown={(e) => {
          handleMouseDown(e);
          handleOpenPopUpSettingDevice(e);
        }}
        onMouseOver={() => setShowSensorValue(true)}
        onDoubleClick={onDoubleClick}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setShowSensorValue(false)}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        style={{ position: "absolute" }}
      >
        <DeviceComponent
          deviceStyle={{ border: isActive ? "2px solid dodgerblue" : "none" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            minHeight: "150px",
            minWidth: "250px",
          }}
        >
          {showSensorValue &&
            deviceData?.sensor.map((data: any, index: number) => (
              <small
                key={index}
                style={{
                  color: isSwitchOn ? (false ? "white" : "gray") : "red", // Ganti ini dengan nilai sesuai kebutuhan Anda
                }}
              >
                {data.sensorName} : {data.value}
              </small>
            ))}
        </div>
      </div>

      {/* device settings */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openPopUpSettingDevice}
        onClose={handleClosePopUpSettingDevice}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack>
          <MenuItem>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={5}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <ListItemText>{isSwitchOn ? "on" : "off"}</ListItemText>
                <Switch
                  checked={Boolean(isSwitchOn)}
                  onChange={handleSwitch}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Stack>

              <Button variant="outlined" onClick={downloadLogFileTxt}>
                log.txt
              </Button>
            </Stack>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Stack>
              <ListItemText>send data interval</ListItemText>
              <ListItemIcon>
                <Slider
                  sx={{ width: "200px" }}
                  defaultValue={defaultRangeTimer}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  max={24}
                  min={1}
                  onChange={(e, value) => setRangeTimer(value as number)}
                  marks={[{ value: 58, label: "hours" }]}
                  key={1}
                />
              </ListItemIcon>
            </Stack>
          </MenuItem>
          <MenuItem>
            <Stack>
              <ListItemText>log range</ListItemText>
              <ListItemIcon>
                <Slider
                  sx={{ width: "200px" }}
                  defaultValue={defaultRangeLog}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={10}
                  max={100}
                  onChange={(e, value) => setRangeLog(value as number)}
                />
              </ListItemIcon>
            </Stack>
          </MenuItem>
          <Stack direction="row" justifyContent="space-between" mt={5}>
            <Button onClick={handleClosePopUpSettingDevice}>cancel</Button>
            <Button
              onClick={() => {
                handleSaveSettingToDataBase();
                handleClosePopUpSettingDevice();
              }}
            >
              save
            </Button>
          </Stack>
        </Stack>
      </Menu>
    </>
  );
};

export default CardDrop;

'use client'


import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ExportLayout from "../ExportLayout/page";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Design = ({ printComponentRef })=>{
    const {
        rectangles,
        setRectangles,
        circles,
        setCircles,
        images,
        setImages,
        zoomSquare,
        setZoomSquare,
    } = useState();
    const [shapeProperties, setShapProperties] = useState(null);

    const handleChangeProperties = () => {
        switch (shapeProperties ? .name) {
            case "rectangle":
                const rectangleId = rectangles.map((rect) => rect.id);
                const newReactAngle = rectangles.find(
                    (rect) => rect.id === shapeProperties.id
                );
                if (!newReactAngle) return;
                const indexOfRectangle = rectangleId.indexOf(newReactAngle.id);
                rectangles[indexOfRectangle] = shapeProperties;
                setRectangles(rectangles);
                break;

            case "circle":
                const circleId = circles.map((rect) => rect.id);
                const newCircle = circles.find(
                    (rect) => rect.id === shapeProperties.id
                );
                if (!newCircle) return;
                const indexOfcircle = circleId.indexOf(newCircle.id);
                circles[indexOfcircle] = shapeProperties;
                setCircles(circles);
                break;

            default:
                break;
        }
    };
    const handleChange = (event) => {
        setZoomSquare(event.target.value);
    };


    useEffect(() => {
        if (!printComponentRef) return
        switch (zoomSquare) {
            case 0.1:
                printComponentRef.current.style.transform = "scale(0.1)";
                break;
            case 0.5:
                printComponentRef.current.style.transform = "scale(0.5)";
                break;
            case 1:
                printComponentRef.current.style.transform = "scale(1)";
                break;
            case 1.5:
                printComponentRef.current.style.transform = "scale(1.5)";
                break;
            case 2:
                printComponentRef.current.style.transform = "scale(2)";
                break;
            default:
                break;
        }
    }, [zoomSquare]);

    return (
      <div className="dark:bg-secondary_dark dark:text-white min-h-screen">
        <>
        <FormControl sx={{ mt: "20px", ml: "5px", mr: "5px", width: "150px" }}>
        <InputLabel className="dark:bg-secondary_dark dark:text-white" id="demo-simple-select-label">zoom</InputLabel>
        <Select labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          value={zoomSquare}
          label="100%"
          onChange={handleChange}
        >
          <MenuItem value={0.1}>10%</MenuItem>
          <MenuItem value={0.5}>50%</MenuItem>
          <MenuItem value={1}>100%</MenuItem>
          <MenuItem value={1.5}>150%</MenuItem>
          <MenuItem value={2}>200%</MenuItem>
        </Select>
        </FormControl> { (
        <div style ={{ paddingLeft: "10px", paddingRight: "10px" }}>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
            mb={2}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <p>{shapeProperties?.fill}</p>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
            mb={2}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <p>{shapeProperties?.color}</p>
            </Stack>
          </Stack>
        </div>
        )
        } < ExportLayout componentRef = { printComponentRef }
<<<<<<< HEAD
    /> </>
    </div>
=======
    /> 
    </>
>>>>>>> 9a5950c2e36f8f0e7f81aa7906127f4cf0097ef4
    )

}
export default Design;
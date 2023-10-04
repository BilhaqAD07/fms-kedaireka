'use client'
import React from "react";
import {
    Button,
    Typography,
    Container,
    Box,
    TextField,
    LinearProgress,
} from '@mui/material'
import BaseLayout from "@/components/baseLayout";
import SideBarRight from "./Components/SideBarRight";


const Home = () => {
    return (
       
    <div onContextMenu={(e) => e.preventDefault()}>
      {/* content */}

<CreatNewLayout
        openPopUp={openScreenCreatNewLayout}
        setOpenPopUp={setOpenScreenCreatNewLayout}
/>
      {/* tool bar */}
<Stack
        mt={2}
        mb={2}
        direction="row"
        flexWrap="wrap"
        ml={1}
        alignItems="center"
        sx={{
border : "1px solid #e3e3e3",
padding: "2px",
width: { xs: "280px", sm: "600px" },
maxWidth: "600px",
        }}
>
        <IconButton onClick={() => setOpenScreenCreatNewLayout(true)}>
<AddRoundedIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <FormControl>
        <Select
            value={""}
            onChange={handleSelectDropDownShape}
            sx={{ height: "30px" }}
            displayEmpty
            startAdornment={
              <InputAdornment>
                <CropSquareOutlinedIcon />
              </InputAdornment>
            }
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"square"}>
              <ListItem>
                <CropSquareOutlinedIcon />
                <ListItemText>Square</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={"circle"}>
              <ListItem>
                <CircleOutlinedIcon />
                <ListItemText>Circle</ListItemText>
              </ListItem>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select
            value={""}
            onChange={handleSelectLineDropDown}
            sx={{ height: "30px", ml: 1 }}
            displayEmpty
            startAdornment={
              <InputAdornment>
                <BorderColorRoundedIcon />
              </InputAdornment>
            }
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"pencil"}>
              <ListItem>
                <BrushIcon />
                <ListItemText>Pencil</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={"stright"}>
              <ListItem>
                <BorderColorRoundedIcon />
                <ListItemText>Line</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={"eraser"}>
              <ListItem>
                <AutoFixNormalOutlinedIcon />
                <ListItemText>Eraser</ListItemText>
              </ListItem>
            </MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={drawImage}>
          <InsertPhotoIcon />
        </IconButton>
        <IconButton onClick={addText}>
          <TextFieldsIcon />
        </IconButton>
        <IconButton onClick={undo}>
          <UndoIcon />
        </IconButton>
        <IconButton onClick={redo}>
          <RedoIcon />
        </IconButton>
        <IconButton onClick={handleDeleteDevice}>
          <DeleteIcon sx={{ color: deviceDelete ? "dodgerblue" : "" }} />
        </IconButton>
        <IconButton onClick={saveShapes}>
          <SaveIcon />
        </IconButton>
        {layoutList.length !== 0 && (
          <Stack justifyContent="space-between" direction="row" ml={1}>
            <Select
              value={selecIndexOfLayout}
              onChange={handleSetIndexLayout}
              sx={{ height: "30px" }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {layoutList.map((layout, index) => (
                <MenuItem key={index} value={index}>
                  {layout.name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        )}
      </Stack>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileUploadEl}
        onChange={addImage}
      />

      {/* content */}
      <div ref={printComponentRef}>
        {layoutList.length === 0 && <EmptyLayoutAnimation />}
        {layoutList.length !== 0 && (
          <DeviceWrapper>
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              ref={stageEl}
              style={{ backgroundColor: changeThem ? "#001e3c" : "#FFF" }}
              onMouseDown={(e) => {
                const clickedOnEmpty = e.target === e.target.getStage();
                if (clickedOnEmpty) {
                  handleSelecShape(null);
                }
              }}
            >
              <Layer ref={layerEl}>
                {textDraw.map((text, index) => {
                  return (
                    <TextDraw
                      key={index}
                      textProps={text}
                      isSelected={text.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(text);
                        setSelectShapeDelete(text);
                      }}
                      onChange={(newAttrs) => {
                        const texts = textDraw.slice();
                        texts[index] = newAttrs;
                        setTextDraw(texts);
                      }}
                    />
                  );
                })}
                {rectangles.map((rect, index) => {
                  return (
                    <DrawRectangle
                      strokeColor={rect.color}
                      key={index}
                      shapeProps={rect}
                      isSelected={rect.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(rect);
                        localStorage.setItem(
                          "DELETE-SHAPE",
                          JSON.<div onContextMenu={(e) => e.preventDefault()}>
      {/* content */}

      <CreatNewLayout
        openPopUp={openScreenCreatNewLayout}
        setOpenPopUp={setOpenScreenCreatNewLayout}
      />
      {/* tool bar */}
      <Stack
        mt={2}
        mb={2}
        direction="row"
        flexWrap="wrap"
        ml={1}
        alignItems="center"
        sx={{
          border: changeThem ? "none" : "1px solid #e3e3e3",
          padding: "2px",
          width: { xs: "280px", sm: "600px" },
          maxWidth: "600px",
        }}
      >
        <IconButton onClick={() => setOpenScreenCreatNewLayout(true)}>
          <AddRoundedIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <FormControl>
          <Select
            value={""}
            onChange={handleSelectDropDownShape}
            sx={{ height: "30px" }}
            displayEmpty
            startAdornment={
              <InputAdornment>
                <CropSquareOutlinedIcon />
              </InputAdornment>
            }
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"square"}>
              <ListItem>
                <CropSquareOutlinedIcon />
                <ListItemText>Square</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={"circle"}>
              <ListItem>
                <CircleOutlinedIcon />
                <ListItemText>Circle</ListItemText>
              </ListItem>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select
            value={""}
            onChange={handleSelectLineDropDown}
            sx={{ height: "30px", ml: 1 }}
            displayEmpty
            startAdornment={
              <InputAdornment>
                <BorderColorRoundedIcon />
              </InputAdornment>
            }
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"pencil"}>
              <ListItem>
                <BrushIcon />
                <ListItemText>Pencil</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={"stright"}>
              <ListItem>
                <BorderColorRoundedIcon />
                <ListItemText>Line</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={"eraser"}>
              <ListItem>
                <AutoFixNormalOutlinedIcon />
                <ListItemText>Eraser</ListItemText>
              </ListItem>
            </MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={drawImage}>
          <InsertPhotoIcon />
        </IconButton>
        <IconButton onClick={addText}>
          <TextFieldsIcon />
        </IconButton>
        <IconButton onClick={undo}>
          <UndoIcon />
        </IconButton>
        <IconButton onClick={redo}>
          <RedoIcon />
        </IconButton>
        <IconButton onClick={handleDeleteDevice}>
          <DeleteIcon sx={{ color: deviceDelete ? "dodgerblue" : "" }} />
        </IconButton>
        <IconButton onClick={saveShapes}>
          <SaveIcon />
        </IconButton>
        {layoutList.length !== 0 && (
          <Stack justifyContent="space-between" direction="row" ml={1}>
            <Select
              value={selecIndexOfLayout}
              onChange={handleSetIndexLayout}
              sx={{ height: "30px" }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {layoutList.map((layout, index) => (
                <MenuItem key={index} value={index}>
                  {layout.name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        )}
      </Stack>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileUploadEl}
        onChange={addImage}
      />

      {/* content */}
      <div ref={printComponentRef}>
        {layoutList.length === 0 && <EmptyLayoutAnimation />}
        {layoutList.length !== 0 && (
          <DeviceWrapper>
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              ref={stageEl}
              style={{ backgroundColor: changeThem ? "#001e3c" : "#FFF" }}
              onMouseDown={(e) => {
                const clickedOnEmpty = e.target === e.target.getStage();
                if (clickedOnEmpty) {
                  handleSelecShape(null);
                }
              }}
            >
              <Layer ref={layerEl}>
                {textDraw.map((text, index) => {
                  return (
                    <TextDraw
                      key={index}
                      textProps={text}
                      isSelected={text.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(text);
                        setSelectShapeDelete(text);
                      }}
                      onChange={(newAttrs) => {
                        const texts = textDraw.slice();
                        texts[index] = newAttrs;
                        setTextDraw(texts);
                      }}
                    />
                  );
                })}
                {rectangles.map((rect, index) => {
                  return (
                    <DrawRectangle
                      strokeColor={rect.color}
                      key={index}
                      shapeProps={rect}
                      isSelected={rect.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(rect);
                        localStorage.setItem(
                          "DELETE-SHAPE",
                          JSON.stringify(rect)
                        );
                      }}
                      onChange={(newAttrs) => {
                        const rects = rectangles.slice();
                        rects[index] = newAttrs;
                        setRectangles(rects);
                      }}
                    />
                  );
                })}
                {circles.map((circle, index) => {
                  return (
                    <DrawCircle
                      key={index}
                      strokeColor={circle.color}
                      shapeProps={circle}
                      isSelected={circle.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(circle);
                        setSelectShapeDelete(circle);
                      }}
                      onChange={(newAttrs) => {
                        const circs = circles.slice();
                        circs[index] = newAttrs;
                        setCircles(circs);
                      }}
                    />
                  );
                })}
                {images.map((image, index) => {
                  return (
                    <ImgPicker
                      key={index}
                      imageUrl={image.content}
                      isSelected={image.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(image);
                        setSelectShapeDelete(image);
                      }}
                      onChange={(newAttrs) => {
                        const imgs = images.slice();
                        imgs[index] = newAttrs;
                      }}
                    />
                  );
                })}
              </Layer>
            </Stage>
          </DeviceWrapper>
        )}
      </div>

      {/* alert messages */}
      <Box sx={{ position: "absolute", bottom: "20px" }}>
        <Collapse in={isDisplayAlert.isError}>
          <Alert severity={isDisplayAlert.type}>{isDisplayAlert.message}</Alert>
        </Collapse>
      </Box>

      {/* Side bar rught */}

      <SideBarRight printComponentRef={printComponentRef} />
    </div>stringify(rect)
                        );
                      }}
                      onChange={(newAttrs) => {
                        const rects = rectangles.slice();
                        rects[index] = newAttrs;
                        setRectangles(rects);
                      }}
                    />
                  );
                })}
                {circles.map((circle, index) => {
                  return (
                    <DrawCircle
                      key={index}
                      strokeColor={circle.color}
                      shapeProps={circle}
                      isSelected={circle.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(circle);
                        setSelectShapeDelete(circle);
                      }}
                      onChange={(newAttrs) => {
                        const circs = circles.slice();
                        circs[index] = newAttrs;
                        setCircles(circs);
                      }}
                    />
                  );
                })}
                {images.map((image, index) => {
                  return (
                    <ImgPicker
                      key={index}
                      imageUrl={image.content}
                      isSelected={image.id === shapesSelected?.id}
                      onSelect={() => {
                        handleSelecShape(image);
                        setSelectShapeDelete(image);
                      }}
                      onChange={(newAttrs) => {
                        const imgs = images.slice();
                        imgs[index] = newAttrs;
                      }}
                    />
                  );
                })}
              </Layer>
            </Stage>
          </DeviceWrapper>
        )}
      </div>

      {/* alert messages */}
      <Box sx={{ position: "absolute", bottom: "20px" }}>
        <Collapse in={isDisplayAlert.isError}>
          <Alert severity={isDisplayAlert.type}>{isDisplayAlert.message}</Alert>
        </Collapse>
      </Box>

      {/* Side bar rught */}

      <SideBarRight printComponentRef={printComponentRef} />
    </div>
    )
}

export default Home;
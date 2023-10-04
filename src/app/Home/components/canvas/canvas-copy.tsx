import React, { useState, useRef, useEffect } from 'react'
import {
  Alert,
  Box,
  FormControl,
  IconButton,
  ListItem,
  ListItemText,
  InputAdornment,
  Stack,
  MenuItem,
  Select,
  Collapse
} from '@mui/material'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
// import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import BrushIcon from '@mui/icons-material/Brush'
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import AutoFixNormalOutlinedIcon from '@mui/icons-material/AutoFixNormalOutlined'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
// import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { Stage, Layer } from 'react-konva'

import { useDispatch, useSelector } from 'react-redux'

import DeviceWrapper from '../DeviceWrapper/page'
import DrawCircle from '../Drawer/DrawCircle'
import PencilDraw from '../Drawer/PencilDraw'
import DrawRectangle from '../Drawer/DrawRectangle'
import ImgPicker from '../ImagePicker/page'
import TextDraw from '../Drawer/TextDraw'
import EmptyLayoutAnimation from '../EmptyLayoutAnimation/page'

const CanvasC = () => {
  const [isDisplayAlert, setIsDisplayAlert] = useState({
    isError: false,
    message: '',
    type: 'error'
  })
  const [rectangles, setRectangles] = useState([])
  const [circles, setCircles] = useState([])
  const [images, setImages] = useState([])
  const [textDraw, setTextDraw] = useState([])
  const [selecIndexOfLayout, setSelecIndexOfLayout] = useState(0)
  const [undoShapes, setUndoShapes] = useState([])
  const [redoShapes, setRedoShapes] = useState([])
  const [shapesSelected, setShapesSelected] = useState(null)

  const { layoutList } = useSelector((state) => state.layouts)

  const stageEl = useRef()
  const layerEl = useRef()
  const fileUploadEl = useRef()
  const printComponentRef = useRef(null)

  const getRandomInt = (max: any) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const addRectangle = () => {
    const shapeId = Date.now().toString()
    const rectangleProperties = {
      name: 'rectangle',
      x: getRandomInt(100),
      y: getRandomInt(100),
      width: 100,
      height: 100,
      fill: 'transparent',
      id: shapeId,
      color: '#000'
    }
    setRectangles([...rectangles, rectangleProperties])
    setUndoShapes([...undoShapes, rectangleProperties])
  }

  const addCircle = () => {
    const shapeId = Date.now().toString()
    const circelProperties = {
      name: 'circle',
      x: getRandomInt(100),
      y: getRandomInt(100),
      width: 100,
      height: 100,
      fill: 'transparent',
      id: shapeId,
      color: '#000'
    }
    setCircles([...circles, circelProperties])
    setUndoShapes([...undoShapes, circelProperties])
  }

  const addText = () => {
    const textId = Date.now() + ''
    const textProperties = {
      name: 'text',
      x: getRandomInt(100),
      y: getRandomInt(100),
      fontSize: 20,
      id: textId,
      color: '#000',
      text: 'hello worlds',
      wrap: 'char',
      align: 'center'
    }
    setTextDraw([...textDraw, textProperties])
    setUndoShapes([...undoShapes, textProperties])
  }

  const drawImage = () => {
    fileUploadEl.current.click()
  }

  const addImage = (event: any) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        const generateId = Date.now() + ''
        const imageProperties = {
          content: reader.shapesSelected,
          id: generateId,
          name: 'image'
        }
        setImages([...images, imageProperties])
        setUndoShapes([...undoShapes, imageProperties])
        fileUploadEl.current.value = null
      },
      false
    )
    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const drawLine = async ({ isStright }) => {
    try {
      await PencilDraw({
        name: 'pencil',
        stage: stageEl.current.getStage(),
        layer: layerEl.current,
        color: '#000',
        mode: 'brush',
        stright: isStright
      })
    } catch (error) {
      // Handle errors here
      console.error('An error occurred:', error)
    }
  }

  const eraserLine = async () => {
    try {
      await PencilDraw({
        stage: stageEl.current.getStage(),
        layer: layerEl.current,
        color: '#000',
        mode: 'erase'
      })
    } catch (error) {
      // Handle errors here
      console.error('An error occurred:', error)
    }
  }

  const handleSelectDropDownShape = (event: any) => {
    switch (event.target.value) {
      case 'square':
        addRectangle()
        break
      case 'circle':
        addCircle()
        break
      case 'pencil':
        drawLine({ isStright: false })
        break
      case 'stright':
        drawLine({ isStright: true })
        break
      case 'eraser':
        eraserLine()
        break
      default:
        break
    }
  }

  const handleSelectLineDropDown = (event: any) => {
    switch (event.target.value) {
      case 'pencil':
        drawLine({ isStright: false })
        break
      case 'stright':
        drawLine({ isStright: true })
        break
      case 'eraser':
        eraserLine()
        break
      default:
        break
    }
  }

  const undo = () => {
    if (undoShapes.length === 0) return
    const previousShape = undoShapes.pop()
    switch (previousShape.name) {
      case 'rectangle':
        const newRect = rectangles.filter(
          (rect) => rect.id !== previousShape.id
        )
        setRectangles(newRect)
        setRedoShapes([...redoShapes, rectangles[rectangles.length - 1]])
        break
      case 'circle':
        const newCircle = circles.filter(
          (circle) => circle.id !== previousShape.id
        )
        setCircles(newCircle)
        setRedoShapes([...redoShapes, circles[circles.length - 1]])
        break
      case 'image':
        const newImage = images.filter((img) => img.id !== previousShape.id)
        setImages(newImage)
        setRedoShapes([...redoShapes, images[images.length - 1]])
        break
      default:
        break
    }
  }

  const redo = () => {
    if (redoShapes.length === 0) return
    const previousShape = redoShapes.pop()
    switch (previousShape.name) {
      case 'rectangle':
        setRectangles([...rectangles, previousShape])
        break
      case 'circle':
        setCircles([...circles, previousShape])
        break
      case 'image':
        setImages([...images, previousShape])
        break
      default:
        break
    }
    setUndoShapes([...undoShapes, previousShape])
  }

  const handleSelecShape = (shape) => {
    setShapesSelected(shape)
  }

  const clearShapes = () => {
    setCircles([])
    setRectangles([])
    setImages([])
  }

  const saveShapes = () => {
    setIsDisplayAlert({
      isError: true,
      message: 'berhasil disimpan',
      type: 'success'
    })
    setTimeout(
      () => { setIsDisplayAlert({ isError: false, message: '', type: 'error' }) },
      2000
    )
  }

  const handleSetIndexLayout = (event: any) => {
    setSelecIndexOfLayout(event.target.value)
    clearShapes()
  }

  return (
    <div onContextMenu={(e) => { e.preventDefault() }}>
      {/* content */}
      <div ref={printComponentRef}>
        {layoutList.length === 0 && <EmptyLayoutAnimation />}
        {layoutList.length !== 0 && (
          <DeviceWrapper>
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              ref={stageEl}
              style={{ backgroundColor: '#FFF' }}
              onMouseDown={(e) => {
                const clickedOnEmpty = e.target === e.target.getStage()
                if (clickedOnEmpty) {
                  handleSelecShape(null)
                }
              }}
            >
              <Layer ref={layerEl}>
                {textDraw.map((text, index) => {
                  return (
                    <TextDraw
                      key={index}
                      textProps={text}
                      isSelected={text === shapesSelected}
                      onSelect={() => { handleSelecShape(text) }}
                      onChange={(newAttrs) => {
                        const texts = [...textDraw]
                        texts[index] = newAttrs
                        setTextDraw(texts)
                      }}
                    />
                  )
                })}
                {rectangles.map((rect, index) => {
                  return (
                    <DrawRectangle
                      strokeColor={rect.color}
                      key={index}
                      shapeProps={rect}
                      isSelected={rect === shapesSelected}
                      onSelect={() => { handleSelecShape(rect) }}
                      onChange={(newAttrs) => {
                        const rects = [...rectangles]
                        rects[index] = newAttrs
                        setRectangles(rects)
                      }}
                    />
                  )
                })}
                {circles.map((circle, index) => {
                  return (
                    <DrawCircle
                      key={index}
                      strokeColor={circle.color}
                      shapeProps={circle}
                      isSelected={circle === shapesSelected}
                      onSelect={() => { handleSelecShape(circle) }}
                      onChange={(newAttrs) => {
                        const circs = [...circles]
                        circs[index] = newAttrs
                        setCircles(circs)
                      }}
                    />
                  )
                })}
                {images.map((image, index) => {
                  return (
                    <ImgPicker
                      key={index}
                      imageUrl={image.content}
                      isSelected={image === shapesSelected}
                      onSelect={() => { handleSelecShape(image) } }
                      onChange={(newAttrs) => {
                        const imgs = [...images]
                        imgs[index] = newAttrs
                        setImages(imgs)
                      } } shapeProps={{
                        x: undefined,
                        y: undefined,
                        width: undefined,
                        height: undefined
                      }} />
                  )
                })}
              </Layer>
            </Stage>
          </DeviceWrapper>
        )}
      </div>

      {/* alert messages */}
      <Box sx={{ position: 'absolute', bottom: '20px' }}>
        <Collapse in={isDisplayAlert.isError}>
          <Alert severity={isDisplayAlert.type}>{isDisplayAlert.message}</Alert>
        </Collapse>
      </Box>

      {/* tool bar */}
      <Stack
        mt={2}
        mb={2}
        direction="row"
        flexWrap="wrap"
        ml={1}
        alignItems="center"
        sx={{
          border: '1px solid #e3e3e3',
          padding: '2px',
          width: { xs: '280px', sm: '600px' },
          maxWidth: '600px'
        }}
      >
        <IconButton onClick={addRectangle}>
          <CropSquareOutlinedIcon />
        </IconButton>
        <IconButton onClick={addCircle}>
          <CircleOutlinedIcon />
        </IconButton>
        <FormControl>
          <Select
            value={''}
            onChange={handleSelectDropDownShape}
            sx={{ height: '30px' }}
            displayEmpty
            startAdornment={
              <InputAdornment>
                <BorderColorRoundedIcon />
              </InputAdornment>
            }
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={'pencil'}>
              <ListItem>
                <BrushIcon />
                <ListItemText>Pencil</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={'stright'}>
              <ListItem>
                <BorderColorRoundedIcon />
                <ListItemText>Line</ListItemText>
              </ListItem>
            </MenuItem>
            <MenuItem value={'eraser'}>
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
        <IconButton onClick={saveShapes}>
          <SaveIcon />
        </IconButton>
        <Stack justifyContent="space-between" direction="row" ml={1}>
          <Select
            value={selecIndexOfLayout}
            onChange={handleSetIndexLayout}
            sx={{ height: '30px' }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {layoutList.map((layout, index) => (
              <MenuItem key={index} value={index}>
                {layout.name}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={fileUploadEl}
        onChange={addImage}
      />
    </div>
  )
}

export default CanvasC

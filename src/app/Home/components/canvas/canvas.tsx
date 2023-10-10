import React, { useEffect, useState, useRef } from 'react'
import { Stage, Layer, Rect, Circle, Image as KonvaImage, Line } from 'react-konva'
import { Button } from '@mui/material'
import type Konva from 'konva'

interface LineType {
  points: number[]
}

function downloadURI (uri: any, name: any) {
  const link = document.createElement('a')
  link.download = name
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function Canvas () {
  const width = window.innerWidth
  const height = window.innerHeight

  const [image, setImage] = useState<HTMLImageElement | undefined>(undefined)
  const [drawLine, setDrawLine] = useState<LineType | undefined>()
  const [lines, setLines] = useState<LineType[]>([])

  // Saat gambar di-load, set image state
  useEffect(() => {
    const URL =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinrXdnE3zzQdKnvY1eXy8LLCgKBh6h5Al_g&usqp=CAU'

    const newImage = new window.Image()
    newImage.src = URL

    newImage.addEventListener('load', () => {
      setImage(newImage)
    })

    // Hapus event listener saat komponen unmount
    return () => {
      newImage.removeEventListener('load', () => {
        setImage(newImage)
      })
    }
  }, [])

  // Saat tombol mouse ditekan, mulai menggambar
  const handleOnMouseDown = (e: any) => {
    const position = e.target.getStage().getPointerPosition()
    const { x, y } = position
    setDrawLine({
      points: [x, y]
    })
  }

  // Saat mouse digerakkan, gambar jalur
  const handleOnMouseMove = (e: any) => {
    if (!drawLine) return
    const position = e.target.getStage().getPointerPosition()
    const { x, y } = position
    setDrawLine({
      points: [...drawLine.points, x, y]
    })
  }

  // Saat tombol mouse dilepas, selesaikan gambar dan tambahkan ke array garis
  const handleMouseUp = () => {
    if (!drawLine) return
    setDrawLine(undefined)
    setLines([...lines, { points: drawLine.points }])
  }

  const stageRef = useRef<Konva.Stage>(null)

  const handleOnSubmit = () => {
    const uri = stageRef.current?.toDataURL()
    downloadURI(uri, 'stage.jpg')
  }

  return (
    <div className='border overflow-scroll bg-white border-black dark:border-white'>
      <Button onClick={handleOnSubmit}>Simpan</Button>
      <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              ref={stageRef}
              style={{ backgroundColor: '#FFF' }}
              onMouseDown={handleOnMouseDown}
              onMouseMove={handleOnMouseMove}
              onMouseUp={handleMouseUp}
            >
              <Layer>
          {/* Circle yang dapat di-drag */}
          <Circle
            x={100}
            y={200}
            radius={50}
            fill='red'
            draggable
          />

          <Rect x={0} y={0} width={80} height={80} fill="red" draggable />
          <Rect x={width - 80} y={0} width={80} height={80} fill="red" draggable />
          <Rect
            x={width - 80}
            y={height - 80}
            width={80}
            height={80}
            fill="red" draggable
          />
          <Rect x={0} y={height - 80} width={80} height={80} fill="red" draggable />

          {lines.map((line, index) => (
            <Line
              key={index}
              points={line.points}
              fill='black'
              stroke='black'
              lineCap='round'
              draggable
            />
          ))}

          {drawLine && (
            <Line
              points={drawLine.points}
              fill='black'
              stroke='black'
              lineCap='round'
              draggable
            />
          )}
        </Layer>
            </Stage>
    </div>
  )
}

export default Canvas

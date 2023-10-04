import React, { useEffect, useState, useRef } from 'react'
import { Stage, Layer, Circle, Image as KonvaImage, Line } from 'react-konva'
import { Button } from '@mui/material'
import type Konva from 'konva'

interface LineType {
  points: number[]
}

function Canvas () {
  const [image, setImage] = useState<HTMLImageElement | undefined>(undefined)
  const [drawLine, setDrawLine] = useState<LineType | undefined>()
  const [lines, setLines] = useState<LineType[]>([])

  // Definisikan variabel yang dibutuhkan untuk toDataURL
  const mimeType = 'image/png' // Ganti sesuai kebutuhan Anda
  const pixelRatio = 1 // Ganti sesuai kebutuhan Anda
  const width = window.innerWidth // Ganti sesuai kebutuhan Anda
  const height = window.innerHeight
  const x = 0
  const y = 0

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
    const temp = stageRef.current

    // Dapatkan URL data
    const result = temp.toDataURL({
      mimeType,
      pixelRatio,
      width,
      height,
      x,
      y
    })

    // Tampilkan URL data di console (untuk pengujian)
    console.log('URL data:', result)

    // Di sini Anda dapat menyimpan atau menggunakannya sesuai kebutuhan Anda
    // Contoh: Simpan gambar ke sistem file
    const a = document.createElement('a')
    a.href = result
    a.download = 'canvas_image.png' // Ganti nama file sesuai kebutuhan Anda
    a.click()
  }

  return (
    <>
      <Button onClick={handleOnSubmit}>Simpan</Button>
      <Stage
        className='border overflow-scroll border-black dark:border-white'
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleOnMouseDown}
        onMouseMove={handleOnMouseMove}
        onMouseUp={handleMouseUp}
        ref={stageRef}
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

          {/* Gambar yang dapat di-drag */}
          {image && (
            <KonvaImage
              image={image}
              x={100}
              y={200}
              width={200}
              height={150}
              draggable
            />
          )}

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
    </>
  )
}

export default Canvas

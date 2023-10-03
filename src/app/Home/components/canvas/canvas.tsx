/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stage, Layer, Circle, Star, Text } from 'react-konva'
import { type ReactNode } from 'react'
import React from 'react'

function generateShapes () {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false
  }))
}

const INITIAL_STATE = generateShapes()

function Canvas (Props: any) {
  const [stars, setStars] = React.useState(INITIAL_STATE)
  const handleDragStart = (e: any) => {
    const id = e.target.id()
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id
        }
      })
    )
  }
  const handleDragEnd = (e: any) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false
        }
      })
    )
  }

  return (
    <Stage className='bg-white border border-black dark:border-white dark:bg-secondary_dark overflow-x-hidden' width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try to drag a star" />
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={star.rotation}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  )
}

export default Canvas

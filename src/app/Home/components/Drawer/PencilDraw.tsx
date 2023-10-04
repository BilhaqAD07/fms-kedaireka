import Konva from 'konva'
import type React from 'react'
import { useState, useEffect } from 'react'

interface PencilDrawProps {
  stage: Konva.Stage | null
  layer: Konva.Layer
  mode: 'brush' | 'eraser'
  color: string
  straight?: boolean
}

const PencilDraw: React.FC<PencilDrawProps> = ({
  stage,
  layer,
  mode,
  color,
  straight = false
}) => {
  const [isPaint, setIsPaint] = useState(false)
  const [lastLine, setLastLine] = useState<Konva.Line | null>(null)
  const [straightLine, setStraightLine] = useState<Konva.Line | null>(null)
  const [stopDraw, setStopDraw] = useState(false)

  useEffect(() => {
    if (!stage) return

    const handleMouseDown = () => {
      if (!stopDraw) {
        setIsPaint(true)
        const pos = stage.getPointerPosition()

        if (pos && (straight || lastLine)) {
          if (straight) {
            const newStraightLine = new Konva.Line({
              stroke: mode === 'brush' ? color : 'white',
              strokeWidth: mode === 'brush' ? 2 : 20,
              globalCompositeOperation:
                mode === 'brush' ? 'source-over' : 'destination-out',
              points: [pos.x, pos.y],
              draggable: mode === 'brush'
            })

            setStraightLine(newStraightLine)
            layer.add(newStraightLine)
          } else {
            const newLastLine = new Konva.Line({
              stroke: mode === 'brush' ? color : 'white',
              strokeWidth: mode === 'brush' ? 2 : 20,
              globalCompositeOperation:
                mode === 'brush' ? 'source-over' : 'destination-out',
              points: [pos.x, pos.y],
              draggable: mode === 'brush'
            })

            setLastLine(newLastLine)
            layer.add(newLastLine)
          }
        }
      }
    }

    const handleMouseUp = () => {
      setIsPaint(false)
    }

    const handleMouseMove = () => {
      if (!isPaint) return
      const pos = stage.getPointerPosition()

      if (pos) {
        if (straight && straightLine) {
          const points = [
            straightLine.points()[0],
            straightLine.points()[1],
            pos.x,
            pos.y
          ]
          straightLine.points(points)
          layer.batchDraw()
        } else if (lastLine) {
          const newPoints = lastLine.points().concat([pos.x, pos.y])
          lastLine.points(newPoints)
          layer.batchDraw()
        }
      }
    }

    const handleDblClick = () => {
      setStopDraw(true)
    }

    stage.on('mousedown touchstart', handleMouseDown)
    stage.on('mouseup touchend', handleMouseUp)
    stage.on('mousemove touchmove', handleMouseMove)
    stage.on('dblclick', handleDblClick)

    return () => {
      stage.off('mousedown touchstart', handleMouseDown)
      stage.off('mouseup touchend', handleMouseUp)
      stage.off('mousemove touchmove', handleMouseMove)
      stage.off('dblclick', handleDblClick)
    }
  }, [stage, layer, mode, color, straight, isPaint, stopDraw, lastLine, straightLine])

  return null
}

export default PencilDraw

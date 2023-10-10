import React, { useEffect, useRef } from 'react'
import { Circle, Transformer } from 'react-konva'
import type Konva from 'konva'

interface DrawCircleProps {
  shapeProps: Konva.CircleConfig
  isSelected: boolean
  onSelect: () => void
  onChange: (newProps: Konva.CircleConfig) => void
  strokeColor?: string
  stageEl: React.MutableRefObject<any> // Add stageEl prop
  layerEl: React.MutableRefObject<any> // Add layerEl prop
  shapesSelected: React.MutableRefObject<any> // Add shapesSelected prop
  selectShapeDelete: React.MutableRefObject<any> // Add selectShapeDelete prop
}

const DrawCircle: React.FC<DrawCircleProps> = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  strokeColor
}) => {
  const shapeRef = useRef<Konva.Circle | null>(null)
  const trRef = useRef<Konva.Transformer | null>(null)

  useEffect(() => {
    if (isSelected && shapeRef.current && trRef.current) {
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer()?.batchDraw()
    }
  }, [isSelected])

  return (
    <>
      <Circle
        fill="transparent"
        stroke={strokeColor ?? '#000'}
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          if (shapeRef.current) {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y()
            })
          }
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            // transformer is changing scale
            const scaleX = shapeRef.current.scaleX()
            const scaleY = shapeRef.current.scaleY()
            shapeRef.current.scaleX(1)
            shapeRef.current.scaleY(1)
            onChange({
              ...shapeProps,
              x: shapeRef.current.x(),
              y: shapeRef.current.y(),
              width: shapeRef.current.width() * scaleX,
              height: shapeRef.current.height() * scaleY
            })
          }
        }}
      />
      {isSelected && (
        <Transformer ref={trRef} />
      )}
    </>
  )
}

export default DrawCircle

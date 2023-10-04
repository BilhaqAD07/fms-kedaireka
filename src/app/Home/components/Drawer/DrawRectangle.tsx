import React, { useEffect, useRef } from 'react'
import { Rect, Transformer } from 'react-konva'
import type Konva from 'konva'

interface DrawRectangleProps {
  shapeProps: Konva.RectConfig
  isSelected: boolean
  onSelect: () => void
  onChange: (newProps: Konva.RectConfig) => void
  strokeColor?: string
}

const DrawRectangle: React.FC<DrawRectangleProps> = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  strokeColor
}) => {
  const shapeRef = useRef<Konva.Rect>(null)
  const trRef = useRef<Konva.Transformer>(null)

  useEffect(() => {
    if (isSelected) {
      // attach transformer manually
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current])
        trRef.current.getLayer()?.batchDraw()
      }
    }
  }, [isSelected])

  return (
    <>
      <Rect
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        stroke={strokeColor ?? '#000'}
        onDragEnd={(e) => {
          const node = shapeRef.current
          if (node) {
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y()
            })
          }
        }}
        onTransformEnd={() => {
          // transformer is changing scale
          const node = shapeRef.current
          if (node) {
            const scaleX = node.scaleX()
            const scaleY = node.scaleY()
            node.scaleX(1)
            node.scaleY(1)
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              width: node.width() * scaleX,
              height: node.height() * scaleY
            })
          }
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // Limit the transformer to not scale too small
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox
            }
            return newBox
          }}
        />
      )}
    </>
  )
}

export default DrawRectangle

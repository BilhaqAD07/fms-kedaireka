/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react'
import { Image, Transformer } from 'react-konva'
import useImage from 'use-image'

interface ImgPickerProps {
  shapeProps: {
    x: any
    y: any
    width: any
    height: any
  }
  isSelected: any
  onSelect: () => void
  onChange: (newProps: any) => void
  imageUrl: any
}

const ImgPicker: React.FC<ImgPickerProps> = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  imageUrl
}) => {
  const shapeRef = useRef<Image | null>(null)
  const trRef = useRef<Transformer | null>(null)

  const [image] = useImage(imageUrl)

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.setNode(shapeRef.current)
      trRef.current.getLayer()?.batchDraw()
    }
  }, [isSelected])

  const handleDragEnd = (e: any) => {
    if (shapeRef.current) {
      onChange({
        ...shapeProps,
        x: e.target.x(),
        y: e.target.y()
      })
    }
  }

  const handleTransformEnd = () => {
    if (shapeRef.current) {
      const node = shapeRef.current
      const scaleX = node.scaleX()
      const scaleY = node.scaleY()
      onChange({
        ...shapeProps,
        x: node.x(),
        y: node.y(),
        width: node.width() * scaleX,
        height: node.height() * scaleY
      })
    }
  }

  return (
    <>
      <Image
        onClick={onSelect}
        image={image}
        ref={shapeRef}
        draggable
        onDragEnd={handleDragEnd}
        onTransformEnd={handleTransformEnd}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  )
}

export default ImgPicker

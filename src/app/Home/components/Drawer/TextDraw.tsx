/* eslint-disable multiline-ternary */
import React, { useEffect, useRef, useState } from 'react'
import { Text, Transformer } from 'react-konva'
import type Konva from 'konva'

interface TextDrawProps {
  textProps: Konva.TextConfig
  isSelected: boolean
  onSelect: () => void
  onChange: (newProps: Konva.TextConfig) => void
}

const TextDraw: React.FC<TextDrawProps> = ({
  textProps,
  isSelected,
  onSelect,
  onChange
}) => {
  const textRef = useRef<Konva.Text>(null)
  const trRef = useRef<Konva.Transformer>(null)
  const [showTextArea, setShowTextArea] = useState(false)
  const [text, setText] = useState<string>(textProps.text ?? '')

  useEffect(() => {
    if (isSelected) {
      // attach transformer manually
      if (trRef.current && textRef.current) {
        trRef.current.nodes([textRef.current])
        trRef.current.getLayer()?.batchDraw()
      }
    }
  }, [isSelected])

  const handleOnDoubleClick = () => {
    setShowTextArea(!showTextArea)
  }

  return (
    <>
      {isSelected && <Transformer ref={trRef} />}
      {showTextArea ? (
        <input
          type="text"
          value={text}
          onChange={(e) => { setText(e.target.value) }}
        />
      ) : (
        <Text
          onDblClick={handleOnDoubleClick}
          draggable
          onClick={onSelect}
          ref={textRef}
          {...textProps}
          onDragEnd={(e) => {
            const node = textRef.current
            if (node) {
              onChange({
                ...textProps,
                x: node.x(),
                y: node.y()
              })
            }
          }}
          onTransformEnd={() => {
            // transformer is changing scale
            const node = textRef.current
            if (node) {
              const scaleX = node.scaleX()
              const scaleY = node.scaleY()
              node.scaleX(1)
              node.scaleY(1)
              onChange({
                ...textProps,
                x: node.x(),
                y: node.y(),
                width: node.width() * scaleX,
                height: node.height() * scaleY
              })
            }
          }}
        />
      )}
    </>
  )
}

export default TextDraw

import React, { useEffect, useRef, useState } from "react";
import { Text, Transformer } from "react-konva";

interface TextDrawProps {
  textProps: any; // Replace 'any' with the appropriate type for textProps
  isSelected: any;
  onSelect: () => void;
  onChange: (newProps: any) => void; // Replace 'any' with the appropriate type for newProps
}

const TextDraw: React.FC<TextDrawProps> = ({
  textProps,
  isSelected,
  onSelect,
  onChange,
}) => {
  const textRef = useRef<Text | null>(null);
  const trRef = useRef<Transformer | null>(null);
  const [showTextArea, setShowTextArea] = useState(false);
  const [text, setText] = useState<string>(textProps.text);
  const [fontSize, setFontSize] = useState<number>(textProps.fontSize || 20);

  useEffect(() => {
    if (isSelected && textRef.current && trRef.current) {
      // Attach transformer manually
      trRef.current.setNode(textRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleOnDoubleClick = () => {
    setShowTextArea(!showTextArea);
  };

  return (
    <>
      {isSelected && <Transformer ref={trRef} />}
      {showTextArea ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <Text
          onDblClick={handleOnDoubleClick}
          draggable
          onClick={onSelect}
          ref={textRef}
          {...textProps}
          fontSize={fontSize} // Use fontSize for scaling
          onDragEnd={(e) => {
            onChange({
              ...textProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={(e) => {
            // Calculate the new font size based on scale
            const node = textRef.current;
            if (node) {
              const newFontSize = fontSize * node.scaleX();
              node.scaleX(1);
              node.scaleY(1);
              setFontSize(newFontSize); // Update the font size state
              onChange({
                ...textProps,
                fontSize: newFontSize, // Update font size in props
              });
            }
          }}
        >
          {text}
        </Text>
      )}
    </>
  );
};

export default TextDraw;

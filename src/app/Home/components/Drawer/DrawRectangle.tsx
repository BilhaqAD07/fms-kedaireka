import React, { useEffect, useRef } from "react";
import { Rect, Transformer } from "react-konva";

interface DrawRectangleProps {
  x: any;
  y: any;
  width: any;
  height: any;
  isSelected: any;
  onSelect: () => any;
  onChange: (newProps: { x: any; y: any }) => void;
  strokeColor?: any;
}

const DrawRectangle: React.FC<DrawRectangleProps> = ({
  x,
  y,
  width,
  height,
  isSelected,
  onSelect,
  onChange,
  strokeColor = "#000",
}) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  useEffect(() => {
    if (isSelected) {
      // attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        onClick={onSelect}
        ref={shapeRef}
        x={x}
        y={y}
        width={width}
        height={height}
        draggable
        stroke={strokeColor}
        onDragEnd={(e) => {
          onChange({
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            x: node.x(),
            y: node.y(),
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  );
};

export default DrawRectangle;

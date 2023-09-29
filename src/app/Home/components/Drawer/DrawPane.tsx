import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Line, Transformer } from "react-konva";

const getScaledPoint = (stage: any, scale: number) => {
  const { x, y } = stage.getPointerPosition();
  return { x: x / scale, y: y / scale };
};

const DrawPane: React.FC<{ width?: number; height?: number }> = (props) => {
  const [color, setColor] = useState("DARK");
  const [scale, setScale] = useState(1);
  const [currentLine, setCurrentLine] = useState<{ points: number[] | null; color: string | null }>({
    points: null,
    color: null,
  });
  const [lines, setLines] = useState<Array<{ points: number[]; color: string }>>([]);
  const stageRef = useRef<any>(null);
  const transformerRef = useRef<any>(null);

  const onMouseDown = () => {
    const stage = stageRef.current;
    if (stage && currentLine) {
      const { x, y } = getScaledPoint(stage, scale);
      setCurrentLine({ points: [x, y], color });
    }
  };

  const onMouseMove = () => {
    const stage = stageRef.current;
    if (stage && currentLine && currentLine.points) {
      const { x, y } = getScaledPoint(stage, scale);
      const [x0, y0] = currentLine.points;
      setCurrentLine({
        ...currentLine,
        points: [x0, y0, x, y],
      });
    }
  };

  const onMouseUp = () => {
    const stage = stageRef.current;
    if (stage && currentLine && currentLine.points) {
      const { x, y } = getScaledPoint(stage, scale);
      setCurrentLine({ points: null, color: null });
      setLines([
        ...lines,
        { points: [...currentLine.points, x, y], color: currentLine.color || "" },
      ]);
    }
  };

  return (
    <Stage
      width={props.width || window.innerWidth}
      height={props.height || window.innerHeight}
      onMouseDown={onMouseDown}
      onMousemove={onMouseMove}
      onMouseUp={onMouseUp}
      ref={stageRef}
    >
      <Layer>
        {lines.map((line, index) => (
          <Line
            key={index}
            points={line.points}
            stroke={line.color}
            strokeWidth={1}
            tension={0.5}
            lineCap="round"
            globalCompositeOperation="source-over"
          />
        ))}
        {currentLine.points && (
          <Line
            points={currentLine.points}
            stroke={currentLine.color || "DARK"}
            strokeWidth={1}
            tension={0.5}
            lineCap="round"
            globalCompositeOperation="source-over"
          />
        )}
      </Layer>
    </Stage>
  );
};

DrawPane.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default DrawPane;

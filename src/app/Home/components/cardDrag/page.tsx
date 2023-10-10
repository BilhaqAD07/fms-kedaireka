import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Card, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeviceComponent from "../deviceComponent/page";

interface CardDragProps {
  data: {
    id: string;
    name: string;
    // Add more properties as needed
  };
  size: number;
  onDoubleClick?: () => void;
  onClick?: () => void;
}

const CardDrag: React.FC<CardDragProps> = ({
  data,
  size,
  onDoubleClick = () => null,
  onClick = () => null,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    item: { id: data?.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className="card-drag-container m-2 flex flex-col justify-center items-center"
      onDoubleClick={() => {
        onDoubleClick();
        handleActive();
      }}
    >
      {isActive && (
        <IconButton className="absolute -top-5 z-[2]"
          onClick={onClick}
        >
          <RemoveCircleIcon className="text-xl text-red-600" />
        </IconButton>
      )}
      <DeviceComponent />

      <small className="text-center">{data?.name}</small>
    </div>
  );
};

export default CardDrag;

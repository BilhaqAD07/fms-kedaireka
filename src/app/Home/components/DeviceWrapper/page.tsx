import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import CardDrop from "../cardDrop/page";
import { useDispatch, useSelector } from "react-redux";
import { addDeviceDelete, addDeviceInLayout } from "@/app/redux/features/deviceSlice";

interface Item {
  id: number;
  macAddress: string;
}

interface DeviceWrapperProps {
    children: React.ReactNode;
}

const DeviceWrapper: React.FC<DeviceWrapperProps> = ({ children }) => {
  const dispatch = useDispatch();

  const [dropItems, setDropItems] = useState<Item[]>([]);
  const [selectIndexDropItem, setSelectIndexDropItem] = useState<number | null>(null);
  const { layoutIndexSelected } = useSelector((state: any) => state.layouts); // Gunakan "any" di sini

  const dragItems: Item[] = [
    // Data dummy sebagai gantinya databaseCRUD
    { id: 1, macAddress: "macAddress1" },
    { id: 2, macAddress: "macAddress2" },
    { id: 3, macAddress: "macAddress3" },
  ];

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: (item: Item) => addItemToDropList(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToDropList = (id: number) => {
    const result = dragItems.find((item) => id === item.id);
    if (result) {
      setDropItems((items) => [...items, result]);
    }
  };

  useEffect(() => {
    if (Array.isArray(dropItems) && dropItems.length > 0) {
      // Data dummy sebagai gantinya databaseCRUD
      dispatch(addDeviceInLayout(dropItems[dropItems.length - 1]));
    }
  }, [dispatch, dropItems]);

  const handleAddDeleteItemInRedux = (index: number) => {
    setSelectIndexDropItem(index);
    dispatch(addDeviceDelete({ layoutId: layoutIndexSelected, device: dropItems[index] }));
  };

  const handleOnDoubleClick = () => {
    setSelectIndexDropItem(null);
    dispatch(addDeviceDelete(null));
  };

  return (
    <div ref={dropRef} style={{ position: "relative" }}>
      {children}
      {dropItems !== undefined &&
        dropItems.map((item, index) => {
          return (
            <CardDrop
              key={index}
              item={item}
              layoutId={layoutIndexSelected}
              onClick={() => handleAddDeleteItemInRedux(index)}
              isActive={selectIndexDropItem === index}
              onDoubleClick={handleOnDoubleClick}
              isDraging={isOver}
            />
          );
        })}
    </div>
  );
};

export default DeviceWrapper;

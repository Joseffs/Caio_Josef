import { motion, Reorder } from "framer-motion";
import { Ingredient } from "./ItemsTab";

interface Props {
  item: Ingredient;
  isSelected: boolean;
  onClick: () => void;
}

export const Tab = ({ item, onClick }: Props) => {
  return (
    <Reorder.Item
      value={item}
      id={item.label}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.15 }
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: "rgb(2, 6, 23)" }}
      className='w-1/4 h-full flex justify-center items-center text-xs border-x border-slate-900 text-slate-500'
      onPointerDown={onClick}
    >
      <motion.span layout="position">{`${item.label}`}</motion.span>
    </Reorder.Item>
  );
};

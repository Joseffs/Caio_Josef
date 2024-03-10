// Dependências
import { motion, Reorder } from "framer-motion";
// Component About
import { ItemsTab } from "./ItemsTab";
// Tailwind
const TabStyle = 'w-1/4 h-[80%] cursor-pointer flex justify-center items-center text-xs border-x border-slate-900 rounded-t-xl text-slate-500'
interface Props {
  item: ItemsTab;
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
      className={TabStyle}
      onPointerDown={onClick}
    >
      <motion.span layout="position">{`${item.label}`}</motion.span>
    </Reorder.Item>
  );
};

// Dependências
import { motion, Reorder } from "framer-motion";
// Component About
import { ItemsTab } from "./ItemsTab";
// Tailwind
const TabStyle = 'w-1/4 h-full cursor-pointer flex justify-center items-center text-[12px] border-x border-slate-950 text-slate-950'
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
      whileDrag={{ backgroundColor: "rgb(71 85 105)" }}
      className={TabStyle}
      onPointerDown={onClick}
    >
      <motion.span layout="position">{`${item.label}`}</motion.span>
    </Reorder.Item>
  );
};

// Dependências
import * as React from "react";
import { useState } from "react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
// Import
import { Tab } from "./Tab";
import { initialTabs } from "./ItemsTab";
import { ItemsTab } from "./ItemsTab"; 
import {BioComponent} from "./BioComponent";
import {EducationComponent} from "./EducationComponent";
import {ProfessionalComponent} from "./ProfessionalComponent";
import TecnologiasComponent from "./TecnologiasComponent";
// Tailwind
const Container = "w-full h-full flex flex-col border-b border-slate-900"
const Nav = 'w-full h-[7%] flex justify-around items-center border-b border-slate-900 overflow-hidden'
const ReorderTab = 'w-full h-full flex justify-center items-center flex-grow flex-nowrap bg-slate-500'
const Main = 'w-full h-[93%] flex justify-center items-center text-sm flex-grow'


export default function App() {
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  const [
    selectedComponent, 
    setSelectedComponent
  ] = useState<React.ReactNode>(null);

  const handleTabClick = (item: ItemsTab) => {
    setSelectedTab(item);
    switch (item.label) {
      case "Bio":
        setSelectedComponent(<BioComponent />);
        break;
      case "Education":
        setSelectedComponent(<EducationComponent />);
        break;
      case "Professional":
        setSelectedComponent(<ProfessionalComponent />);
        break;
      case "Tecnologias":
        setSelectedComponent(<TecnologiasComponent />);
        break;
      default:
        setSelectedComponent(null);
    }
  };

  return (
    <div className={Container}>
      <nav className={Nav}>
        <Reorder.Group
          as="ul"
          axis="x"
          onReorder={setTabs}
          className={ReorderTab}
          values={tabs}
        >
          <AnimatePresence initial={false}>
            {tabs.map((item) => (
              <Tab
                key={item.label}
                item={item}
                isSelected={selectedTab === item}
                onClick={() => handleTabClick(item)} 
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </nav>
      <main className={Main}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {selectedComponent ? selectedComponent : <BioComponent />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

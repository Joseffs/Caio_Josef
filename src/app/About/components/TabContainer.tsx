import * as React from "react";
import { useState } from "react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { Tab } from "./Tab";
import { initialTabs } from "./ItemsTab";

export default function App() {
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-full h-full flex flex-col border-b border-slate-900">
      <nav className='w-full h-[7%] flex justify-around items-center border-b border-slate-900 overflow-hidden'>
        <Reorder.Group
          as="ul"
          axis="x"
          onReorder={setTabs}
          className='w-full h-full flex justify-center items-center flex-grow flex-nowrap'
          values={tabs}
        >
          <AnimatePresence initial={false}>
            {tabs.map((item) => (
              <Tab
                key={item.label}
                item={item}
                isSelected={selectedTab === item}
                onClick={() => setSelectedTab(item)}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </nav>
      <main className='flex justify-center items-center text-sm flex-grow'>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ? selectedTab.label : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

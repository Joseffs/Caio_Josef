export interface ItemsTab {
    label: string;
  }
  
  export const allIngredients = [
    { label: "Bio" },
    { label: "Education" },
    { label: "Professional" },
    { label: "Tecnologias" }
  ];
  
  const [Bio, Education, Professional, Tecnologias] = allIngredients;
  export const initialTabs = [Bio, Education, Professional, Tecnologias];
  
  export function getNextIngredient(
    itemsTab: ItemsTab[]
  ): ItemsTab | undefined {
    const existing = new Set(itemsTab);
    return allIngredients.find((itemsTab) => !existing.has(itemsTab));
  }
  
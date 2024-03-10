export interface ItemsTab {
    label: string;
  }
  
  export const allIngredients = [
    { label: "Bio" },
    { label: "Education" },
    { label: "Professional" }
  ];
  
  const [Bio, Education, Professional] = allIngredients;
  export const initialTabs = [Bio, Education, Professional];
  
  export function getNextIngredient(
    itemsTab: ItemsTab[]
  ): ItemsTab | undefined {
    const existing = new Set(itemsTab);
    return allIngredients.find((itemsTab) => !existing.has(itemsTab));
  }
  
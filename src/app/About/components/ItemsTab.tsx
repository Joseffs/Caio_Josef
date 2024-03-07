export interface Ingredient {
    label: string;
  }
  
  export const allIngredients = [
    { label: "Bio" },
    { label: "Education" },
    { label: "Professional" },
    { label: "Hobbies" }
  ];
  
  const [Bio, Education, Professional, Hobbies] = allIngredients;
  export const initialTabs = [Bio, Education, Professional, Hobbies];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  
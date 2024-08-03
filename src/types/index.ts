export interface Ingredient {
    id: string;
    name: string;
    image: string;
  }
  
  export interface RecipeIngredient {
    ingredientId: string;
    amount: string;
  }
  
  export interface Recipe {
    id: string;
    name: string;
    image: string;
    ingredients: RecipeIngredient[];
    method: string;
    instructions: string;
  }
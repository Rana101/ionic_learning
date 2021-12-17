import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageurl:
        // eslint-disable-next-line max-len
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['french Fries', 'pork', 'salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageurl:
        // eslint-disable-next-line max-len
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg?crop=1xw:1xh;center,top&resize=768:*',
      ingredients: ['Spaghetti', 'meat', 'Tomatoes'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Mocorrones con gambas', 'Sabroso', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Gambas con mocorrones', 'Sobrosisimo', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];
  
  public recipeSelected:EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}

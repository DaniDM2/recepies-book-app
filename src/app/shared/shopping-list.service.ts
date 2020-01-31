import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient("carrot", 2),
    new Ingredient("meat", 3),
    new Ingredient("potatoes", 2)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(name: string, amount: number){
    const ingredient = new Ingredient(name, amount);
    this.ingredients.push(ingredient);
  }
}

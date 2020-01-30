import { Component, OnInit } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("carrot", 2),
    new Ingredient("meat", 3),
    new Ingredient("potatoes", 2)
  ];

  constructor() {}

  ngOnInit() {}

  addIngedient(ingredient: Ingredient){
    console.log("addinf inggredient");
    
    this.ingredients.push(ingredient);
  }
}

import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "../shared/recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;

  constructor(private recipesService: RecipeService) {}

  ngOnInit() {
    //Suscribe to obtain the emitter
      this.recipesService.recipeSelected.subscribe(
        recipe => {
          this.currentRecipe = recipe;
        }
      );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //Using input cause allows to use an external variable
  @Input() recipe: Recipe;
  //Using @Output() to send it to recipe-details
  //@Output() recipeDetails = new EventEmitter<void>();

  constructor(private serviceRecipe: RecipeService) { }

  ngOnInit() {
  }

  recipeSelected(){
    //this.recipeDetails.emit();
    this.serviceRecipe.recipeSelected.emit(this.recipe);
    
  }

}

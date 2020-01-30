import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //Using input cause allows to use an external variable
  @Input() recipe: Recipe;
  //Using @Output() to send it to recipe-details
  @Output() recipeDetails = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(){
    this.recipeDetails.emit();
  }

}

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // Takes the whole element, so we indicate the type 'ElemenRef'
  @ViewChild('nameInput', { static: false }) ingName: ElementRef;
  @ViewChild('amountInput', { static: false }) ingAmount: ElementRef;

  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  takeIngredient() {
    console.log("taking ingredient");
    
    //  CReate a new elementer and share it 
    const newIngredient = new Ingredient(
      this.ingName.nativeElement.value,
      this.ingAmount.nativeElement.value
    );
    this.ingredientCreated.emit(newIngredient);
  }
}

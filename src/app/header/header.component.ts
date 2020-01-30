import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Declares a parameter which is an EventEmitter with a str parameter
  // Adding @Ouput() because has to be shared with the whole app (whith the root in tis case, app.component)
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  //Passing a str type feature 
  onSelect(feature: string){
    //Emits an event with 'feature' parameter
    this.featureSelected.emit(feature);
  }

}

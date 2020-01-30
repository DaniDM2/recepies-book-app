import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //by default is recipe
  loadedFuture = 'recipe';

  //Method
  onNavigate(featrue: string) {
    this.loadedFuture = featrue;
  }
}

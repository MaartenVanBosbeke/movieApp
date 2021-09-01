import {Component, OnInit, Output} from '@angular/core';
import {Movie} from "./models/movie";
import {MoviesService} from "./services/movies.service";

@Component({
  selector: 'media-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //zoekt in routeroutlet
}


// title = 'MediaApp';
// imageUrl: string = "";
// isClicked = false;
//
// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//
// changeTitle(): void{
//   this.title = 'other title';
// }
//
// ngOnInit(): void{
//   this.imageUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.539aHt_okB1RvODtmIHC7gHaEK%26pid%3DApi&f=1";
// }
//
// changeImageUrl(): void{
//   this.imageUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nRauRhD2AIHCLrjJwjtJEAHaD5%26pid%3DApi&f=1"
// }
//
// changeButton(): void{
//   this.isClicked = !this.isClicked;
// }
//
// deleteNumber(num: number): void{
//   const index = this.numbers.indexOf(num); //index van nummers opzoeken
//   if(index >= 0){
//   this.numbers.splice(index, 1); //splice= remove *indexnumer*, deletecount (aantal) = 1
// }
// }
//
// removeHeader():void{
//   this.isClicked = !this.isClicked;
// }

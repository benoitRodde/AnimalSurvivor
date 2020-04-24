import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.page.html',
  styleUrls: ['./show-modal.page.scss'],
})

export class ShowModalPageComponent {

  @Input() responseServePyhton: any;
  
  public modalFirstPartOfGeneration = [];
  public modalSecondPartOfGeneration = [];

  public readonly modalAnimalsTab: any[] = ["Dogs","Mouses","Monkeys","Snakes"];

  public modalAnimalSelected = this.modalAnimalsTab[0];

  public modalFirstGeneration = 0;
  public modalSecondGeneration = 0;

  constructor() {
  for(let i = 0; i < environment.nbrGeneration; i++){
      if(i<environment.nbrGeneration /2) {
        this.modalFirstPartOfGeneration.push(i);
      } else {
        this.modalSecondPartOfGeneration.push(i);
      }
    }
    this.modalFirstGeneration = this.modalFirstPartOfGeneration[0];
    this.modalSecondGeneration = this.modalSecondPartOfGeneration[this.modalSecondPartOfGeneration.length - 1];
  }

  public addOneToNumber(num: number): number {
    return Number(num) + 1;
  }

 public convertAnimalToNumber(animalName: string): number {
    switch(animalName){
      case 'Dogs' :
        return 0;
      case 'Mouses' :
        return 1;
      case 'Monkeys' :
        return 2;
      case 'Snakes' :
        return 3;
      default : 
       return 0;
    }
  }

}

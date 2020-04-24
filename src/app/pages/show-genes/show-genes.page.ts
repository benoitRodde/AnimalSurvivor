import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-genes',
  templateUrl: './show-genes.page.html',
  styleUrls: ['./show-genes.page.scss'],
})

export class ShowGenesPageComponent {
  
    @Input() animal1: any;
    @Input() animal2: any;

  constructor() { }

  public returnUrlPhoto(race, nbAnimal): string {
    let url = ""
    switch(race){
      case 'Dogs':
        url = './../../../assets/dog.jpg';
        break;
      case 'Monkeys':
        url = './../../../assets/monkey.jpg';
        break;
      case 'Mouses':
        url = './../../../assets/rat.jpg';
        break;
      case 'Snakes':
        url = './../../../assets/snake.jpg';
        break;
    }
    return url;
  }

  public fixed(num) {
    return num.toFixed(2);
  }
}

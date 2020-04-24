import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-gene',
  templateUrl: './show-gene.page.html',
  styleUrls: ['./show-gene.page.scss'],
})

export class ShowGenePageComponent {

  @Input() animal: any;
  @Input() ecosysteme: any;

  constructor() {

  }

  public returnUrlPhoto(animal): string {
    let url = ""
    switch(animal.race){
      case 'Dogs':
        if(animal.nb === 0){
          url = './../../../assets/dog_dead.jpg'
          break;
        }
        if(animal.agressiveness < 25) {
          url = './../../../assets/dog_ville.jpg';
          break;
        }
        url = './../../../assets/dog.jpg';
      break;
      case 'Monkeys':
          if(animal.nb === 0){
            url = './../../../assets/monkey_dead.jpg'
            break;
          }
          if(this.ecosysteme === 'Foret' && animal.need_water < 11) {
            url = './../../../assets/snake_foret.jpg';
            break;
          }
        url = './../../../assets/monkey.jpg';
      break;
      case 'Mouses':
          if(animal.nb === 0){
            url = './../../../assets/rat_dead.jpg'
            break;
          }
        url = './../../../assets/rat.jpg';
      break;
      case 'Snakes':
          if(animal.nb === 0){
            url = './../../../assets/snake_dead.jpg'
            break;
          }
          if(this.ecosysteme === 'Desert' && animal.need_water < 11) {
            url = './../../../assets/snake_desert.jpg';
            break;
          }
        
        url = './../../../assets/snake.jpg';
      break;
    }
    return url;
  }
}

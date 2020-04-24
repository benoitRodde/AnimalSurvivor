import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsMethodesService {
  constructor() { }

  public static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private assertNotEquals(methode: any, value: any): boolean {
    return methode !== value;
  }

  private assertEquals(methode: any, value: any): boolean {
    return methode === value;
  }
}

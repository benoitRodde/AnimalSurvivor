import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {

  public tabPopulationToDisplay = [];

  constructor() { }

  public getTabPopulationToDisplay(): any[] {
    return this.tabPopulationToDisplay;
  }

  public setTabPopulationToDisplay(tabPopulationToDisplay) {
    this.tabPopulationToDisplay = tabPopulationToDisplay;
  }

}

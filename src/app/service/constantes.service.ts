import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantesService {

  constructor() { }

  private mutationPercentage = 0.5;
  private crossOverPercentage = 0.5;

  public get getmutationPercentage() {
    return this.mutationPercentage;
  }

  public set setMutationPercentage(mutationPercentage) {
    this.mutationPercentage = mutationPercentage;
  }
  public get getCrossOverPercentage() {
    return this.crossOverPercentage;
  }

  public set setCrossOverPercentage(crossOverPercentage) {
    this.crossOverPercentage = crossOverPercentage;
  }
}

import { DisplayService } from '../service/display.service';
import { environment } from 'src/environments/environment';

export class Ecosystem {

  protected population: any[];

  protected wildlife: number;
  protected flora: number;
  protected temperature: number;
  protected water: number;
  public varToSaveInDisplay = [];
  public numIteration = 0;
  protected numGeneration = 0;

  constructor(populations: any[], wildlifes: number, floras: number,
    // tslint:disable-next-line:align
    temperatures: number, waters: number, public displayService: DisplayService) {
    this.population = populations;
    this.setEnv(wildlifes, floras, temperatures, waters);
  }

  public runAllGenerations() {
    // return new Promise((resolve, reject) => {
    this.showPopulation(0);
    for (let i = 0; i < environment.nbrGeneration + 2; i++) {
      if (i % 10 === 1) {
        this.showPopulation(i);
      }
      this.createNewGeneration();
      this.numGeneration = i;
    }
    console.log('Génération numéro : ', this.numGeneration);
    console.log('Visualisation de la génération : ', this.population);
    // });
  }

  public createNewGeneration(): void {
    for (let i = 0; i < 4; i++) {
      this.population[i] = this.newGeneration(this.population[i]);
    }
  }

  protected naturalSelection(racePop): any[] {
    // Overide
    return [];
  }

  protected sortWithFitness(racePop): any[] {
    // Overide
    return [];
  }

  protected crossoverAndMutation(racePop): any[] {
    // Overide
    return [];
  }

  public showFitness(racePop: any[]) {
    racePop.forEach(animal => {
      console.log(animal.getTotal(animal.temperatureResistanceG) + (100 - animal.getTotal(animal.waterG)));
    });
  }

  public newGeneration(racePop: any[]): any[] {
    console.log('Génération numéro : ', this.numGeneration);

    // Selection naturelle
    console.log('Population avant selection naturelle : ');
    // this.showFitness(racePop);
    racePop = this.naturalSelection(racePop);
    console.log('Population après selection naturelle : ');
    // this.showFitness(racePop);

    // Trie
    // Dans cette environnement aimer la chaleur rapport des points ainsi que avoir un faible besoin d'eau
    console.log('Population avant tri : ');
    this.showFitness(racePop);
    racePop = this.sortWithFitness(racePop);
    console.log('Population après tri : ');
    this.showFitness(racePop);

    // Crossover
    // On garde tel quel le top 5 % de la génération
    // On corssover les autres
    console.log('Population avant crossover', racePop);
    racePop = this.crossoverAndMutation(racePop);
    console.log('Population après crossover', racePop);
    return racePop;
  }

  public showPopulation(numGeneration) {
    this.varToSaveInDisplay.push([]);
    let varToSaveInDisplayTmp = [];

    for (let i = 0; i < 4; i++) {
      this.varToSaveInDisplay[this.numIteration].push([]);
    }

    varToSaveInDisplayTmp = this.population;

    for (let i = 0; i < 4; i++) {

      let moyennegeneEau = 0;
      let moyennegeneVege = 0;
      let moyennegeneMeal = 0;
      let moyennegenePredResist = 0;
      let moyennegeneAgressiveness = 0;
      let moyennegeneTemperatureResistanceG = 0;

      varToSaveInDisplayTmp[i].forEach(animal => {
        moyennegeneEau = moyennegeneEau + animal.getTotal(animal.waterG);
        moyennegeneVege = moyennegeneVege + animal.getTotal(animal.plantsG);
        moyennegeneMeal = moyennegeneMeal + animal.getTotal(animal.mealG);
        moyennegenePredResist = moyennegenePredResist + animal.getTotal(animal.predatorResistanceG);
        moyennegeneAgressiveness = moyennegeneAgressiveness + animal.getTotal(animal.agressivenessG);
        moyennegeneTemperatureResistanceG = moyennegeneTemperatureResistanceG + animal.getTotal(animal.temperatureResistanceG);
      });
      console.error(varToSaveInDisplayTmp[i]);
      const length = varToSaveInDisplayTmp[i].length;
      this.varToSaveInDisplay[this.numIteration][i].push({
        waterG: moyennegeneEau / varToSaveInDisplayTmp[i].length,
        plantsG: moyennegeneVege / varToSaveInDisplayTmp[i].length,
        mealG: moyennegeneMeal / varToSaveInDisplayTmp[i].length,
        predatorResistanceG: moyennegenePredResist / varToSaveInDisplayTmp[i].length,
        agressivenessG: moyennegeneAgressiveness / varToSaveInDisplayTmp[i].length,
        temperatureResistanceG: moyennegeneTemperatureResistanceG / varToSaveInDisplayTmp[i].length,
        lengthPop: length,
        numIteration: numGeneration
      });

    }
    this.displayService.setTabPopulationToDisplay(this.varToSaveInDisplay);
    this.numIteration = this.numIteration + 1;
  }

  public setEnv(wildlife: number, flora: number, temperature: number, water: number) {
    // Override
  }
}

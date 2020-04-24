import { Ecosystem } from './ecosystem';
import { DisplayService } from '../service/display.service';

export class City extends Ecosystem {

  constructor(population: any[], wildlife: number, flora: number, temperature: number, water: number, displayService: DisplayService) {
    super(population, wildlife, flora, temperature, water, displayService);
  }

  public setEnv(wildlife: number, flora: number, temperature: number, water: number): void {
    this.wildlife = wildlife;
    this.flora = flora;
    this.temperature = temperature;
    this.water = water;
  }

  protected naturalSelection(racePop): any[] {
    racePop.forEach((animal, index) => {
      if (animal.getTotal(animal.agressivenessG) > 40) {
        console.log('Un animal est mort par selection naturel');
        racePop.splice(index, 1);
      }
    });
    return racePop;
  }

  public fitness(animal: any): number {
    return animal.getTotal(animal.temperatureResistanceG) + (100 - animal.getTotal(animal.waterG));
  }

  protected sortWithFitness(racePop): any[] {
    return racePop.sort((animal1: any, animal2: any) => {
      // console.error(this.fitness(animal1));
      // console.error(this.fitness(animal2));
      return (this.fitness(animal1) - this.fitness(animal2));
    }).reverse();
  }

  protected crossoverAndMutation(racePop): any[] {
    const newPopulation: any[] = [];
    racePop.forEach((animal, index) => {
      if (index < (5 / 100 * racePop.length)) {
        newPopulation.push(animal);
      } else {

        const newAnimal = animal;
        newAnimal.waterG = animal.generateCrossover(racePop[index - 1].waterG, animal.waterG);
        newAnimal.mealG = animal.generateCrossover(racePop[index - 1].mealG, animal.mealG);
        newAnimal.plantsG = animal.generateCrossover(racePop[index - 1].plantsG, animal.plantsG);
        newAnimal.predatorResistanceG = animal.generateCrossover(racePop[index - 1].predatorResistanceG, animal.predatorResistanceG);
        newAnimal.agressivenessG = animal.generateCrossover(racePop[index - 1].agressivenessG, animal.agressivenessG);
        newAnimal.temperatureResistanceG =
          animal.generateCrossover(racePop[index - 1].temperatureResistanceG, animal.temperatureResistanceG);

        // on efectue une mutation sur les 5 plus mauvais %
        if (index > (95 / 100 * racePop.length)) {
          // Mutation
          newAnimal.waterG = animal.generateMutation(newAnimal.waterG);
          newAnimal.mealG = animal.generateMutation(newAnimal.mealG);
          newAnimal.plantsG = animal.generateMutation(newAnimal.plantsG);
          newAnimal.predatorResistanceG = animal.generateMutation(newAnimal.predatorResistanceG);
          newAnimal.agressivenessG = animal.generateMutation(newAnimal.agressivenessG);
          newAnimal.temperatureResistanceG = animal.generateMutation(newAnimal.temperatureResistanceG);
        }
        newPopulation.push(newAnimal);
      }
    });
    return newPopulation;
  }
}

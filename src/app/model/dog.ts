import { UtilsMethodesService } from '../service/utilsMethodes.service';
import { Animal } from './animal';
import { AnimalTypeEnum } from '../enum/animal-type.enum';

export class Dog extends Animal {

  // For generate gène Temp
  private readonly nbrRandomTempG: number = 20;
  private readonly nbr0TempG: number = 60;

  // For generate gène Meal
  private readonly nbrRandomMealG: number = 20;
  private readonly nbr0MealG: number = 20;

  // For generate gène Plante
  private readonly nbrRandomPlantsG: number = 10;
  private readonly nbr0PlantsG: number = 90;

  // For generate gène Water
  private readonly nbrRandomWater: number = 15;
  private readonly nbr0Water: number = 30;

  // For generate gène Resistance
  private readonly nbrRandomRestistance: number = 10;
  private readonly nbr0Restistance: number = 20;

  // For generate gène Agressiveness
  private readonly nbrRandomAgressiveness: number = 25;
  private readonly nbr0Agressiveness: number = 40;

  constructor() {
    super();
    this.generateAnimal();
  }

  private generateAnimal() {
    this.mealG = this.generatemealG();
    this.plantsG = this.generateplantsG();
    this.waterG = this.generateWater();
    this.predatorResistanceG = this.generateResistance();
    this.agressivenessG = this.generateAgressiveness();
    this.temperatureResistanceG = this.generateTemperatureResistance();
    this.typeOfAnmal = AnimalTypeEnum.DOG;
  }

  private generateTemperatureResistance(): number[] {
    let m: number[] = [];
    for (let i = 0; i < this.nbrRandomTempG; i++) {
      m.push(UtilsMethodesService.getRandomIntInclusive(0, 1));
    }
    for (let i = 0; i < this.nbr0TempG; i++) {
      m.push(0);
    }
    for (let i = 0; i < (100 - this.nbr0TempG - this.nbrRandomTempG); i++) {
      m.push(1);
    }
    m = this.shuffleTabforCreateG(m);
    return m;
  }

  private generatemealG(): number[] {
    let m: number[] = [];
    for (let i = 0; i < this.nbrRandomMealG; i++) {
      m.push(UtilsMethodesService.getRandomIntInclusive(0, 1));
    }
    for (let i = 0; i < this.nbr0MealG; i++) {
      m.push(0);
    }
    for (let i = 0; i < (100 - this.nbr0MealG - this.nbrRandomMealG); i++) {
      m.push(1);
    }
    m = this.shuffleTabforCreateG(m);
    return m;
  }

  protected generateplantsG(): number[] {
    let m: number[] = [];
    for (let i = 0; i < this.nbrRandomPlantsG; i++) {
      m.push(UtilsMethodesService.getRandomIntInclusive(0, 1));
    }
    for (let i = 0; i < this.nbr0PlantsG; i++) {
      m.push(0);
    }
    for (let i = 0; i < (100 - this.nbrRandomPlantsG - this.nbr0PlantsG); i++) {
      m.push(1);
    }
    m = this.shuffleTabforCreateG(m);
    return m;
  }

  private generateWater(): number[] {
    let m: number[] = [];
    for (let i = 0; i < this.nbrRandomWater; i++) {
      m.push(UtilsMethodesService.getRandomIntInclusive(0, 1));
    }
    for (let i = 0; i < this.nbr0Water; i++) {
      m.push(0);
    }
    for (let i = 0; i < (100 - this.nbrRandomWater - this.nbr0Water); i++) {
      m.push(1);
    }
    m = this.shuffleTabforCreateG(m);
    return m;
  }

  private generateResistance(): number[] {
    let m: number[] = [];
    for (let i = 0; i < this.nbrRandomRestistance; i++) {
      m.push(UtilsMethodesService.getRandomIntInclusive(0, 1));
    }
    for (let i = 0; i < this.nbr0Restistance; i++) {
      m.push(0);
    }
    for (let i = 0; i < (100 - this.nbrRandomRestistance - this.nbr0Restistance); i++) {
      m.push(1);
    }
    m = this.shuffleTabforCreateG(m);
    return m;
  }

  private generateAgressiveness(): number[] {
    let m: number[] = [];
    for (let i = 0; i < this.nbrRandomAgressiveness; i++) {
      m.push(UtilsMethodesService.getRandomIntInclusive(0, 1));
    }
    for (let i = 0; i < this.nbr0Agressiveness; i++) {
      m.push(0);
    }
    for (let i = 0; i < (100 - this.nbrRandomAgressiveness - this.nbr0Agressiveness); i++) {
      m.push(1);
    }
    m = this.shuffleTabforCreateG(m);
    return m;
  }
}

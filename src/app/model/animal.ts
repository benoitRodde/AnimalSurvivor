import { UtilsMethodesService } from '../service/utilsMethodes.service';
import { AnimalTypeEnum } from '../enum/animal-type.enum';

export class Animal {

  public waterG: number[] = [];
  public mealG: number[] = [];
  public plantsG: number[] = [];
  public temperatureResistanceG: number[] = [];
  public predatorResistanceG: number[] = [];
  public agressivenessG: number[] = [];
  public typeOfAnmal: AnimalTypeEnum;

  public show() {

    console.log('Gène besoin de viande = ' + this.mealG);
    console.log('Gène besoin de végétaux = ' + this.plantsG);
    console.log('Gène besoin d\'eau = ' + this.waterG);
    console.log('Gène resistance au autres animaux = ' + this.predatorResistanceG);
    console.log('Gène agressivité envers les autres animaux = ' + this.agressivenessG);
    console.log('Gène temperature = ' + this.temperatureResistanceG);


    console.log('Moyenne gène besoin de viande = ' + this.getTotal(this.mealG) + '/100');
    console.log('Moyenne gène besoin de végétaux = ' + this.getTotal(this.plantsG) + '/100');
    console.log('Moyenne gène besoin d\'eau = ' + this.getTotal(this.waterG) + '/100');
    console.log('Moyenne gène resistance au autres animaux = ' + this.getTotal(this.predatorResistanceG) + '/100');
    console.log('Moyenne gène resistance au autres animaux = ' + this.getTotal(this.agressivenessG) + '/100');
    console.log('Moyenne gène temperature = ' + this.getTotal(this.temperatureResistanceG) + '/100');
  }

  public getTotal(gene): number {
    let total = 0;
    gene.forEach(elem => {
      total += elem;
    });
    return total;
  }

  // On va mélanger le tableau d'entier pour qu'il devienne un gène,
  // pour ce fait on créer un nouveau tableau dans lequel on push chaque element du premier tableau
  // mais l'ordre de l'ajout est du hasard
  public shuffleTabforCreateG(tab): number[] {
    const newGene: number[] = [];
    while (tab.length !== 0) {
      const valueToInsert = UtilsMethodesService.getRandomIntInclusive(0, tab.length - 1);
      newGene.push(tab[valueToInsert]);
      tab.splice(valueToInsert, 1);
    }
    return newGene;
  }

  // Corssover basique on prend les 50 premiers elment du gène 1 qu'on met avec les 50 dernier du gène 2
  public generateCrossover(gene1: number[], gene2: number[]): number[] {
    // console.log('On effectue un crossover entre ces deux gènes :  ');
    // console.log('gene 1 : ', gene1);
    // console.log('gene 2 : ', gene2);
    const newGene: number[] = [];
    for (let i = 0; i < 50; i++) {
      newGene.push(gene1[UtilsMethodesService.getRandomIntInclusive(0, 1)]);
    }
    for (let i = 0; i < 50; i++) {
      newGene.push(gene2[UtilsMethodesService.getRandomIntInclusive(0, 1)]);

    }
    // console.log('le nouveau gène produit est : ', newGene);
    return newGene;
  }

  // On mute un gène depuis un x random jusqu'a un y random en prennant l'inverse de chaque itération
  public generateMutation(gene: number[]): number[] {
    console.log('On effectue une mutation du gène : ', gene);
    const newGene: number[] = gene;
    // Le premier element muté est aléatoire dans un gène
    const start = UtilsMethodesService.getRandomIntInclusive(0, 20);
    // On mute entre 10 et 20% d'un gène
    const end = start + UtilsMethodesService.getRandomIntInclusive(10, 20);
    gene.forEach((iteration, index) => {
      if (start - 1 < index && index < end + 1) {
        iteration === 0 ? newGene[index] = 1 : newGene[index] = 0;
      }
    });
    console.log('Après la mutation ce gène devient : ', newGene);
    return newGene;
  }

}

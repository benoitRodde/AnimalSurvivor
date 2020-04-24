from typing import List, Dict
from animals.animal import Animal
from initParams import InitParams
from animals.monkey import Monkey
from animals.snake import Snake
from animals.dog import Dog
from animals.mouse import Mouse
from copy import copy

import operator
import random


class Generation:

    animals = {}
    environment = {}

    def __init__(self, env_type: str, env_carac: List[int], nb_animals: List[int]) -> None:
        """ Lancement de l'initialisation des paramètres"""

        params = InitParams()
        self.environment = params.init_environment(env_type, env_carac)
        self.animals = params.init_first_generation(nb_animals)

    def natural_selection(self, animals: Dict) -> Dict:


        survivors = {}

        for key, espece in animals.items():

            self.environment.set_hostility(self.animals, key)
            self.environment.set_wildlife(self.animals, key, self.environment.type)

            espece_tmp = copy(espece)

            for animal in espece:

                death_risks = [
                    animal.meal_need.count(1) - self.environment.wildlife,
                    animal.vegetable_need.count(1) -self.environment.flora,
                    animal.water_need.count(1) - self.environment.water,
                    (100 - (self.environment.temperature + 50)) - animal.cold_resistance.count(1),
                    (self.environment.temperature + 50) - animal.heat_resistance.count(1),
                    self.environment.hostility - animal.predator_resistance.count(1),
                    ]

                if self.environment.type == "Ville":
                    death_risks.append((animal.aggressiveness.count(1)))


                for death_risk in death_risks:

                    death = round(random.randrange(0, 100))

                    if death < death_risk:
                        espece_tmp.remove(animal)
                        break

            survivors[key] = espece_tmp

        return survivors

    def fitness(self, animal: Animal) -> int:
        """ Calcule du score par animal """

        point = 0

        if animal.meal_need.count(1) > self.environment.wildlife:
            point += animal.meal_need.count(1) - self.environment.wildlife
        if animal.vegetable_need.count(1) > self.environment.flora:
            point += animal.vegetable_need.count(1) - self.environment.flora
        if animal.water_need.count(1) > self.environment.water:
            point += animal.water_need.count(1) - self.environment.water
        if animal.cold_resistance.count(1) < (100 - (self.environment.temperature + 50)):
            point += (100 - (self.environment.temperature + 50)) - animal.cold_resistance.count(1)
        if animal.heat_resistance.count(1) < (self.environment.temperature + 50):
            point += (self.environment.temperature + 50) - animal.heat_resistance.count(1)
        # if animal.predator_resistance.count(1) < self.environment.hostility:
        #     point += (self.environment.hostility - animal.predator_resistance.count(1))

        if self.environment.type == "Ville":
            point += animal.aggressiveness.count(1)


        return point

    def sort_by_fitness(self, animals: Dict) -> Dict:
        """ Classement des animaux les plus adaptés à l'environnement par espèce """

        sort_animals = {}

        for key, espece in animals.items():

            for animal in espece:
                point = self.fitness(animal)
                animal.score = point

            sort_animals[key] = sorted(espece, key=operator.attrgetter(
                    'score'))

        return sort_animals

    def crossover(self, alpha, animal) -> Animal:
        """ Création des nouveaux gènes en associant 50% du gène père et 50% du gène mère """

        new_animal = None
        if alpha.name == "Dogs":
            new_animal = Dog()
        elif alpha.name == "Monkeys":
            new_animal = Monkey()
        elif alpha.name == "Mouses":
            new_animal = Mouse()
        elif alpha.name == "Snakes":
            new_animal = Snake()

        new_animal.meal_need = random.sample(
            alpha.meal_need, 50) + random.sample(animal.meal_need, 50)
        new_animal.vegetable_need = random.sample(
            alpha.vegetable_need, 50) + random.sample(animal.vegetable_need, 50)
        new_animal.water_need = random.sample(
            alpha.water_need, 50) + random.sample(animal.water_need, 50)
        new_animal.cold_resistance = random.sample(
            alpha.cold_resistance, 50) + random.sample(animal.cold_resistance, 50)
        new_animal.heat_resistance = random.sample(
            alpha.heat_resistance, 50) + random.sample(animal.heat_resistance, 50)
        new_animal.aggressiveness = random.sample(
            alpha.aggressiveness, 50) + random.sample(animal.aggressiveness, 50)
        new_animal.predator_resistance = random.sample(
            alpha.predator_resistance, 50) + random.sample(animal.predator_resistance, 50)

        return new_animal

    def reproduction(self, animals: Dict) -> Dict:
        """ Reproduction des meilleurs éléments """

        new_generation = {}

        for key, espece in animals.items():

            new_generation[key] = []

            if len(espece) == 0:
                continue

            alpha = espece[0]

            i = 0
            while i <= alpha.reproduction_rate:
                try:
                    espece[i].age += 1
                    if espece[i].age <= 3:
                        new_generation[key].append(espece[i])
                    i += 1
                except:
                    break

            for element in espece:

                if element != alpha:
                    new_generation[key].append(self.crossover(alpha, element))
        return new_generation

    def mutation(self, gene: List, nb_mutation: int) -> List:
        """ Mutation d'un pourcentage d'un gène """

        gene_part = []

        while len(gene_part) < nb_mutation:
            gene_part.append(gene.pop(random.randrange(len(gene))))

        for g in gene_part:
            if g == 1:
                gene.append(0)
            elif g == 0:
                gene.append(1)

        return gene

    def calc_moyenne(self) -> List:
        """ Calcule de la moyenne des caractéristiques par espèces= """

        moyennes = []

        for index, espece in self.animals.items():

            nb_element = len(espece)
            total_meal_need = 0
            total_vegetable_need = 0
            total_water_need = 0
            total_res_cold = 0
            total_res_heat = 0
            total_aggressiveness = 0
            total_res_predator = 0

            for element in espece:
                total_meal_need += element.meal_need.count(1)
                total_vegetable_need += element.vegetable_need.count(1)
                total_water_need += element.water_need.count(1)
                total_res_cold += element.cold_resistance.count(1)
                total_res_heat += element.heat_resistance.count(1)
                total_aggressiveness += element.aggressiveness.count(1)
                total_res_predator += element.predator_resistance.count(1)

            moyennes.append({
                "need_meal": round(total_meal_need / nb_element, 2) if nb_element != 0 else None,
                "need_veg": round(total_vegetable_need / nb_element, 2) if nb_element != 0 else None,
                "need_water": round(total_water_need / nb_element, 2) if nb_element != 0 else None,
                "cold_res": round(total_res_cold / nb_element, 2) if nb_element != 0 else None,
                "heat_res": round(total_res_heat / nb_element, 2) if nb_element != 0 else None,
                "agressiveness": round(total_aggressiveness / nb_element, 2) if nb_element != 0 else None,
                "res_predator": round(total_res_predator / nb_element, 2) if nb_element != 0 else None,
                "nb": nb_element,
                "race": index
            })

        return moyennes

    def affichage_moyenne(self, moyennes: List) -> None:
        """ Affichage de la moyenne """

        for espece in moyennes:
            print(espece['race'], ":")
            for gene, moy in espece.items():
                if gene != "race":
                    print(gene, ":", round(moy, 2))
            print('')

    def affichage_compare_moyenne(self, first_moyenne: List, second_moyenne: List) -> None:
        """ Comparaison de la moyenne entre deux générations """

        index_espece = 0

        print(second_moyenne)

        for espece in first_moyenne:
            if second_moyenne[index_espece]['race'] in espece.values():
                print(espece['race'], ":")
                for gene, moy in espece.items():
                    if second_moyenne[index_espece][gene] is not None:
                        if gene != "race" and gene != "nb":
                            print(gene, ':', round(
                                moy, 2), '->', round(second_moyenne[index_espece][gene], 2))
                index_espece += 1

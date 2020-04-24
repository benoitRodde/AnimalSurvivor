from typing import List

from generation import Generation


def generation_iterator(environment_type: str, env_carac: List[int], nb_animals: List[int], nb_generation: int) -> List:
    """ Retourne un tableau des moyennes par génération """

    animal_evolution = Generation(environment_type, env_carac, nb_animals)
    nb_generation = int(nb_generation)
    result = []
    result.append(animal_evolution.calc_moyenne())

    for generation in range(nb_generation):
        survivors = animal_evolution.natural_selection(animal_evolution.animals)
        sorted_animals = animal_evolution.sort_by_fitness(survivors)
        animal_evolution.animals = animal_evolution.reproduction(sorted_animals)

        result.append(animal_evolution.calc_moyenne())

    return result
from typing import List, Dict
from environments.environment import Environment
from animals.monkey import Monkey
from animals.snake import Snake
from animals.dog import Dog
from animals.mouse import Mouse


class InitParams:

    @staticmethod
    def init_environment(env_type: str, env_carac: List) -> Environment:
        """ Paramétrage de l'environnement """

        veg = int(env_carac[1])
        temp = int(env_carac[2])
        water = int(env_carac[3])

        environment = Environment(env_type, veg, temp, water)

        return environment

    @staticmethod
    def init_first_generation(nb_animals: List) -> Dict:
        """ Initialisation de la première génération des animaux """

        """ Création des chiens """
        dogs = []
        for i in range(0, int(nb_animals[0])):
            dogs.append(Dog(True))

        """ Création des singes """
        monkeys = []
        for i in range(0, int(nb_animals[1])):
            monkeys.append(Monkey(True))

        """ Création des souris """
        mouses = []
        for i in range(0, int(nb_animals[2])):
            mouses.append(Mouse(True))

        """ Création des sepents """
        snakes = []
        for i in range(0, int(nb_animals[3])):
            snakes.append(Snake(True))

        """ Rassemblement de l'ensemble des espèces """

        animals = {"Dogs": dogs,"Mouses": mouses, "Monkeys": monkeys, "Snakes": snakes}

        return animals

from typing import Dict


class Environment:

    def __init__(self, env_type, veg, temp, water):
        self.type = env_type
        self.flora = veg
        self. temperature = temp
        self.water = water
        self.wildlife = None
        self.hostility = None

    def set_wildlife(self, animals: Dict, espece_delete: str, env: str) -> None:

        wildlife = 0

        for key, espece in animals.items():
            if key != espece_delete:
                wildlife += len(espece)

        if wildlife > 300:
            self.wildlife = 100
        elif espece_delete == "Snakes" and env == "Desert":
            self.wildlife = 100
        elif espece_delete == "Dogs" and env == "Foret":
            self.wildlife = 100
        elif env == "Ville":
            self.wildlife = 100
        else:
            self.wildlife = wildlife / 3

    def set_hostility(self, animals: Dict, espece_delete: str) -> None:

        nb_animals = 0
        total_aggressivity = 0

        for key, espece in animals.items():
            if key != espece_delete:
                nb_animals += len(espece)
                for animal in espece:
                    total_aggressivity += animal.aggressiveness.count(1)

        self.hostility  = 0 if nb_animals == 0 else int(total_aggressivity / nb_animals)


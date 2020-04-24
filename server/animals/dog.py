from animals.animal import Animal
from typing import Union


class Dog(Animal):

    name = 'Dogs'
    reproduction_rate = 5

    def __init__(self, first_generation: bool = False):

        super().__init__()

        if first_generation:
            self.init_meal(55, 40)
            self.init_vegetable(5, 90)
            self.init_water(60, 45)
            self.init_cold_resistance(70, 25)
            self.init_heat_resistance(55, 40)
            self.init_aggressiveness(35, 60)
            self.init_predator_resistance(55, 40)

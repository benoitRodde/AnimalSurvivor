from animals.animal import Animal
from typing import Union


class Monkey(Animal):

    name = 'Monkeys'
    reproduction_rate = 5

    def __init__(self, first_generation: bool = False):

        super().__init__()

        if first_generation:
            self.init_meal(40, 55)
            self.init_vegetable(65, 30)
            self.init_water(40, 55)
            self.init_cold_resistance(50, 45)
            self.init_heat_resistance(65, 30)
            self.init_aggressiveness(55, 40)
            self.init_predator_resistance(50, 45)

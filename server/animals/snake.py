from typing import Union
from animals.animal import Animal


class Snake(Animal):

    name = 'Snakes'
    reproduction_rate = 2

    def __init__(self, first_generation: bool = False):

        super().__init__()

        if first_generation:
            self.init_meal(50, 45)
            self.init_vegetable(10, 85)
            self.init_water(15, 80)
            self.init_cold_resistance(40, 35)
            self.init_heat_resistance(80, 15)
            self.init_aggressiveness(70, 25)
            self.init_predator_resistance(70, 25)

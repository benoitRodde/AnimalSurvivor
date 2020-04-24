from animals.animal import Animal
from typing import Union


class Mouse(Animal):

    name = 'Mouses'
    reproduction_rate = 12


    def __init__(self, first_generation: bool = False):

        super().__init__()

        if first_generation:
            self.init_meal(30, 65)
            self.init_vegetable(30, 65)
            self.init_water(35, 65)
            self.init_cold_resistance(60, 35)
            self.init_heat_resistance(50, 35)
            self.init_aggressiveness(20, 75)
            self.init_predator_resistance(35, 60)

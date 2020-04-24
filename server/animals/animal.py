import random

class Animal:

    def __init__(self):
        self.meal_need = []
        self.vegetable_need = []
        self.water_need = []
        self.cold_resistance = []
        self.heat_resistance = []
        self.aggressiveness = []
        self.predator_resistance = []
        self.age = 0
        self.score = None

    def init_meal(self, meal, no_meal):
        """ Methode d'initialisation du besoin en viande de l'animal """

        carn = []

        for i in range(0, meal):
            carn.append(1)

        for i in range(0, no_meal):
            carn.append(0)

        for i in range(100 - len(carn)):
            carn.append(random.randrange(0, 2))

        random.shuffle(carn)

        self.meal_need = carn

    def init_vegetable(self, vegetable, novegetable):

        """ Methode d'initialisation du besoin en végétaux de l'animal """

        veg = []

        for i in range(0, vegetable):
            veg.append(1)

        for i in range(0, novegetable):
            veg.append(0)

        for i in range(100 - len(veg)):
            veg.append(random.randrange(0, 2))

        random.shuffle(veg)

        self.vegetable_need = veg

    def init_water(self, water, nowater):

        """ Methode d'initialisation du besoin en eau de l'animal """

        wat = []

        for i in range(0, water):
            wat.append(1)

        for i in range(0, nowater):
            wat.append(0)

        for i in range(100 - len(wat)):
            wat.append(random.randrange(0, 2))

        random.shuffle(wat)

        self.water_need = wat

    def init_cold_resistance(self, rescold, norescold):

        """ Methode d'initialisation de la résistance au froid de l'animal """

        resistance = []

        for i in range(0, rescold):
            resistance.append(1)

        for i in range(0, norescold):
            resistance.append(0)

        for i in range(100 - len(resistance)):
            resistance.append(random.randrange(0, 2))

        random.shuffle(resistance)

        self.cold_resistance = resistance

    def init_heat_resistance(self, resheat, noresheat):

        """ Methode d'initialisation de la résistance à la chaleur de l'animal """

        resistance = []

        for i in range(0, resheat):
            resistance.append(1)

        for i in range(0, noresheat):
            resistance.append(0)

        for i in range(100 - len(resistance)):
            resistance.append(random.randrange(0, 2))

        random.shuffle(resistance)

        self.heat_resistance = resistance

    def init_aggressiveness(self, aggressivity, no_agressivity):
    
        """ Methode d'initialisation de l'agressivité de l'animal """

        aggressiveness = []

        for i in range(0, aggressivity):
            aggressiveness.append(1)

        for i in range(0, no_agressivity):
            aggressiveness.append(0)

        for i in range(100 - len(aggressiveness)):
            aggressiveness.append(random.randrange(0, 2))

        random.shuffle(aggressiveness)

        self.aggressiveness = aggressiveness
    
    def init_predator_resistance(self, pred_res, no_pred_res):
        
        """ Methode d'initialisation de la resistance aux prédateurs de l'animal """

        resistance = []

        for i in range(0, pred_res):
            resistance.append(1)

        for i in range(0, no_pred_res):
            resistance.append(0)

        for i in range(100 - len(resistance)):
            resistance.append(random.randrange(0, 2))

        random.shuffle(resistance)

        self.predator_resistance = resistance

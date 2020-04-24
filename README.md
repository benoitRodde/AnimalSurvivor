# AnimalSurvivor - Simulation of species evolution using a genetic algorithm



## Setup de l'environnement

#### Client
Installer npm version 6.12 mini puis faire :  
    `npm install -g @angular/cli`  
Installer node version 13:  
    `wget -qO- https://deb.nodesource.com/setup_13.x | sudo -E bash -`  
    `sudo apt install -y nodejs`  
    

#### Serveur
Installer python3 : `sudo apt install python3`  
Installer pip3  : `sudo apt install python3-pip`  
Installer flask : `pip3 install flask`  
Installer flask-cors : `pip3 install flask-cors`  

## Installation
Cloner le projet : `git clone https://gitlab.com/brodde/animalSurvivor.git`  
Lancer la commande `npm install` a la racine du projet  


## Run le client
Lancer `ng serve` à la racine du projet (si cela ne fonctionne faire un `sudo npm link @angular/cli` puis rééssayer) puis allez sur l'url `http://localhost:4200/`.  

Si encore erreur au lancement du ng serve vérifier sa version de npm, il faut une 6.12 minimum => si inférieur mettre a jour et lancer :  
    `sudo npm uninstall -g @angular/cli`  
    `sudo npm cache clean --force`  
    `sudo npm install -g @angular/cli`  
    `sudo npm install`  
## Run le serveur 
Lancer la commande `python serverRunner.py` dans le dossier serveur du projet  
ou lancer la commande `python3 surverRunner.py` si plusieurs versions de python sont installées.

# AnimalSurvivor - Simulation of species evolution using a genetic algorithm



## Setup env

#### Client
Install npm version 6.12 then run :  
    `npm install -g @angular/cli`  
Install node version 13:  
    `wget -qO- https://deb.nodesource.com/setup_13.x | sudo -E bash -`  
    `sudo apt install -y nodejs`  
    

#### Serveur
Install python3 : `sudo apt install python3`  
Install pip3  : `sudo apt install python3-pip`  
Install flask : `pip3 install flask`  
Install flask-cors : `pip3 install flask-cors`  

## Install
Clone project : `git clone https://gitlab.com/brodde/animalSurvivor.git`  
Run `npm install`


## Run front
Run `ng serve`  (if doesn't work try to run `sudo npm link @angular/cli` then retry first command) next go to `http://localhost:4200/`.  

Update version:
    `sudo npm uninstall -g @angular/cli`  
    `sudo npm cache clean --force`  
    `sudo npm install -g @angular/cli`  
    `sudo npm install`  

## Run back 
Launch `python serverRunner.py` or  `python3 surverRunner.py` in serve folder

import { Component } from '@angular/core';
import { DisplayService } from '../../service/display.service';
import { environment } from 'src/environments/environment';
import { UtilsMethodesService } from 'src/app/service/utilsMethodes.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.page.html',
  styleUrls: ['./runner.page.scss'],
})
export class RunnerPageComponent {

  public responseServePyhton = [];
  public population: any[] = [];
  
  public wildlife = environment.wildlifeDesertPercent;
  public flora = environment.floraDesertPercent;
  public temperature = environment.temperatureDesertPercent;
  public water = environment.waterDesertPercent;
  
  public numGenerationDisplay = 0;
  public dogNumber = 50;
  public ratNumber = 50;
  public singeNumber = 50;
  public snakeNumber = 50;
  
  public isPlaying = false;
  public isShowLoader = false;
  public isShowModal = false;
  public wasPlaying = false;
  
  public ecosysteme: any = 'Desert';
  public urlImg = './../../../assets/Desert.jpg';

  public readonly URL_SERVE = 'http://127.0.0.1:5000/api/v1.0/generations';
  public readonly configUrl = 'assets/config.json';

  constructor(public displayService: DisplayService, public utilsService: UtilsMethodesService, private http: HttpClient) { 
  }

  public changeUModalAnimal() {

  }

  public openModal() {
    this.isShowModal = true; 
    if(this.isPlaying) {
      this.wasPlaying = true;
      this.isPlaying = false;
      this.onClickPauseGen();
    }
  }

  public closeModal() {
    this.isShowModal = false;
    if(this.wasPlaying){
      this.isPlaying = true;
      this.wasPlaying = false;
      this.onClickPlayGen();
    }
  }

  private _resetVar() {
    this.numGenerationDisplay = 0;
    this.isPlaying = false;
    this.responseServePyhton = [];
    this.population= [];
    this.isShowModal = false;
  }

  private _postRequest(params: HttpParams): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true',
        Authorization: 'my-auth-token'
      }),
      // tslint:disable-next-line:object-literal-shorthand
      params: params
    };
    return this.http.post(this.URL_SERVE, params, httpOptions).toPromise();
  }

  public runOnServe(): void {
    this._resetVar();
    this.isShowLoader = true;
    let param = new HttpParams();
    param = param.set('environment', this.ecosysteme);
    // tslint:disable-next-line:max-line-length
    param = param.set('envCarac', JSON.stringify([this.wildlife, this.flora, this.temperature, this.water]));
    param = param.set('nbAnimals', JSON.stringify([this.dogNumber, this.singeNumber, this.ratNumber, this.snakeNumber]));
    param = param.set('nbGeneration', JSON.stringify(environment.nbrGeneration));

    this._postRequest(param)
      .then(response => {
        console.log(response);
        this.responseServePyhton = response.result;
        console.log(this.responseServePyhton);
        this.isShowLoader = false;
      })
      .then(()=>{
        setTimeout(()=>{
          this.onClickPlayGen();
        }, 1000)
      });
  }

  public changeUrlImg() {
    this.urlImg = './../../../assets/' + this.ecosysteme + '.jpg';
    switch (this.ecosysteme) {
      case 'Desert':
        this.wildlife = environment.wildlifeDesertPercent;
        this.flora = environment.floraDesertPercent;
        this.temperature = environment.temperatureDesertPercent;
        this.water = environment.waterDesertPercent;
        break;
      case 'Ville':
        this.wildlife = environment.wildlifeCityPercent;
        this.flora = environment.floraCityPercent;
        this.temperature = environment.temperatureCityPercent;
        this.water = environment.waterCityPercent;
        break;
      case 'Foret':
        this.wildlife = environment.wildlifeWoodPercent;
        this.flora = environment.floraWoodPercent;
        this.temperature = environment.temperatureWoodPercent;
        this.water = environment.waterWoodPercent;
        break;
    }
  }

  public getMin(value: string): number {
    switch (this.ecosysteme) {
      case 'Desert':
        switch (value) {
          case 'wildlife':
            return environment.wildlifeDesertPercent - 10;
          case 'flora':
            return environment.floraDesertPercent - 10;
          case 'temperature':
            return environment.temperatureDesertPercent - 10;
          case 'water':
            return environment.waterDesertPercent - 10;
        }
        break;
      case 'Ville':
        switch (value) {
          case 'wildlife':
            return environment.wildlifeCityPercent - 10;
          case 'flora':
            return environment.floraCityPercent - 10;
          case 'temperature':
            return environment.temperatureCityPercent - 10;
          case 'water':
            return environment.waterCityPercent - 10;
        }
        break;
      case 'Foret':
        switch (value) {
          case 'wildlife':
            return environment.wildlifeWoodPercent - 10;
          case 'flora':
            return environment.floraWoodPercent - 10;
          case 'temperature':
            return environment.temperatureWoodPercent - 10;
          case 'water':
            return environment.waterWoodPercent - 10;
        }
        break;
    }
  }

  public getRoundPercent(nbr: number) {
    return 'width: ' + Math.round(nbr) + '%';
  }

  public getMax(value: string): number {
    switch (this.ecosysteme) {
      case 'Desert':
        switch (value) {
          case 'wildlife':
            return environment.wildlifeDesertPercent + 10;
          case 'flora':
            return environment.floraDesertPercent + 10;
          case 'temperature':
            return environment.temperatureDesertPercent + 10;
          case 'water':
            return environment.waterDesertPercent + 10;
        }
        break;
      case 'Ville':
        switch (value) {
          case 'wildlife':
            return environment.wildlifeCityPercent + 10;
          case 'flora':
            return environment.floraCityPercent + 10;
          case 'temperature':
            return environment.temperatureCityPercent + 10;
          case 'water':
            return environment.waterCityPercent + 10;
        }
        break;
      case 'Foret':
        switch (value) {
          case 'wildlife':
            return environment.wildlifeWoodPercent + 10;
          case 'flora':
            return environment.floraWoodPercent + 10;
          case 'temperature':
            return environment.temperatureWoodPercent + 10;
          case 'water':
            return environment.waterWoodPercent + 10;
        }
        break;
    }
  }


  public addDogNumber() {
    if (this.dogNumber === 100) {
      return;
    }
    this.dogNumber = this.dogNumber + 1;
  }

  public removeDogNumber() {
    if (this.dogNumber === 0) {
      return;
    }
    this.dogNumber = this.dogNumber - 1;
  }

  public addSingeNumber() {
    if (this.singeNumber < 100) {
      this.singeNumber = this.singeNumber + 1;
    }
  }

  public removeSingeNumber() {
    if (this.singeNumber > 0) {
      this.singeNumber = this.singeNumber - 1;
    }
  }

  public addRatNumber() {
    if (this.ratNumber < 100) {
      this.ratNumber = this.ratNumber + 1;
    }
  }

  public removeRatNumber() {
    if (this.ratNumber > 0) {
      this.ratNumber = this.ratNumber - 1;
    }
  }

  public addSnakeNumber() {
    if (this.snakeNumber < 100) {
      this.snakeNumber = this.snakeNumber + 1;
    }
  }

  public removeSnakeNumber() {
    if (this.snakeNumber > 0) {
      this.snakeNumber = this.snakeNumber - 1;
    }
  }

  public applyStyles(value) {
    console.log(value);
    const styles = {'width' : Math.round(value).toString()};
    return styles;
  }

  public onClickPreviousGen() {
    if (this.numGenerationDisplay > 0){
      this.numGenerationDisplay = this.numGenerationDisplay - 1;
    }
  }

  public onClickPlayGen() {
    this.isPlaying = true;
    this._lauchGen(true);
  }

  public onClickPauseGen() {
    this.isPlaying = false;
  }

  public onClickNextGen() {
    if (this.numGenerationDisplay < environment.nbrGeneration-1){
      this.numGenerationDisplay = this.numGenerationDisplay + 1;
    } else {
      this.isPlaying = false;
    }
  }

  private _lauchGen(isplaying) {
    if(isplaying) {
      this.onClickNextGen();
      setTimeout((i)=>{
        // console.error(i);
        this._lauchGen(this.isPlaying);
      }, 1000);
    }
  }

  private _moveprogressbar(i) {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
}

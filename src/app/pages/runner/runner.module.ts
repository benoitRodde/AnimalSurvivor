import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RunnerPageComponent } from './runner.page';
import { MatProgressBarModule } from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ShowGenePageComponent } from '../show-gene/show-gene.page';
import { ShowModalPageComponent } from '../show-modal/show-modal.page';
import { ShowGenesPageComponent } from '../show-genes/show-genes.page';

const routes: Routes = [
  {
    path: '',
    component: RunnerPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    LazyLoadImageModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RunnerPageComponent, ShowGenePageComponent, ShowModalPageComponent, ShowGenesPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RunnerPageModule { }

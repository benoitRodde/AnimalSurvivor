import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShowModalPageComponent } from './show-modal.page';
import { ShowGenePageComponent } from '../show-gene/show-gene.page';
import { ShowGenesPageComponent } from '../show-genes/show-genes.page';

const routes: Routes = [
  {
    path: '',
    component: ShowModalPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ShowModalPageComponent, ShowGenePageComponent, ShowGenesPageComponent],
  schemas: []
})
export class ShowModalPageModule { }

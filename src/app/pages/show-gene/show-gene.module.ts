import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShowGenePageComponent } from './show-gene.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  {
    path: '',
    component: ShowGenePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ShowGenePageComponent],
  schemas: []
})
export class ShowGenePageModule { }

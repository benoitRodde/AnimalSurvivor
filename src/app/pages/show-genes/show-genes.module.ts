import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShowGenesPageComponent } from './show-genes.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  {
    path: '',
    component: ShowGenesPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ShowGenesPageComponent],
  schemas: []
})
export class ShowGenesPageModule { }

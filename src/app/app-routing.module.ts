import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'runner', pathMatch: 'full' },
  { path: 'runner', loadChildren: './pages/runner/runner.module#RunnerPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

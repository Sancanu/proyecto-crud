import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { config } from './helpers/config/config';

const routes: Routes = [
  {
    path: config.router.home, loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  { path: '**', redirectTo: config.router.home },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

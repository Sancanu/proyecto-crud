import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    HeaderComponent,
    ProjectCardComponent,
    
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    NavigationBarComponent,
    HeaderComponent,
    ProjectCardComponent,
  ]
})
export class GlobalComponentsModule { }

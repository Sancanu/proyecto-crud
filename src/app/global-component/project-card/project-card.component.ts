import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProjects } from '../../models/projects.models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: any 
  @Input() isDetail:boolean
  @Output() goToProductDetail = new EventEmitter<number>();
  @Output() deleteProject = new EventEmitter<void>();
  @Output() editProject = new EventEmitter<void>();

  constructor() { }


  ngOnInit(): void {
  }
  goToDetail(id:number){
    this.goToProductDetail.emit(id); // Emitir el evento con el _id de la campaña
  }

  delete(){
    this.deleteProject.emit();
  }
  edit(){
    this.editProject.emit();
  }

}

import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@services/projects-service/post.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProjects } from '../../../app/models/projects.models';

//Config
import { config } from '@helpers/config/config';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public projects: IProjects[] = []
  public role:string
  constructor(
    private readonly projectService: ProjectService,
    public router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.searchPosts()
  }

  searchPosts() {
    this.projectService.searchPosts().subscribe(
      (response) => {
        this.projects = response;

      },
      (error) => {
        // aca se debe mostar un error cuando no recibe los proyectos
        console.log("error en projects", error);
      }
    );

  }


  goToProjectDetail(id: number) {
      const urlRouter = `${config.router.user_admin}/${config.router.user_admin_sub.project}/${id} `
      this.router.navigate([
        urlRouter.trim()
      ]);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
//Enviroment
import { environment } from '../../../environments/environment';
import { ICreateProjects } from 'src/app/models/create-project.model';
import { IProjects } from 'src/app/models/projects.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private urlServer: string = ""
  private patch_post: string = ""

  constructor(
    private http: HttpClient,


  ) {
    this.urlServer = environment["url_server"];
    this.patch_post = environment["patch_post"];
  }

  searchPosts(): Observable<any> {
    const options = {
    }
    return this.http.get(
      this.urlServer + this.patch_post,
      options
    )


  }

  searchPost(id: number): Observable<any> {
    const options = {

    }
    return this.http.get(
      this.urlServer + this.patch_post + "/" + id,
      options
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          // Aquí puedes manejar el error 403 como desees
          console.log('Error 403: Acceso no autorizado');
        }
        return throwError(error); // Puedes relanzar el error para que el componente también pueda manejarlo
      }),
      map(res => {

        // login successful if there's a jwt token in the response
        if(res){
          return res
        }
        return null
      },
        (error) => {
          console.log(error);
        }
      )

    )

  }

  deletePost(id: number): Observable<any> {
    const options = {
    }
    return this.http.delete(
      this.urlServer + this.patch_post + "/" + id,
      options
    )

  }

  editPost(body:ICreateProjects|IProjects){
    const options = {
    }
    return this.http.post(
      this.urlServer + this.patch_post,
      body,
      options
    )
  }

  createProyect(body:any){
    const options = {
    }
    return this.http.post(
      this.urlServer + this.patch_post,
      body,
      options
    )
  }






}

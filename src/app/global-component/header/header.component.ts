import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { config } from '@helpers/config/config';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo_empreesa: string = "";
  empresaData: any;
  config = config;
  constructor(
    
  ) { }

  ngOnInit(): void {

  }

  logout() {

  }

}

import { Component, OnInit } from '@angular/core';
import { AUTORINFO } from '../Common/autorinfo';

const Autor_Info : AUTORINFO = {
  facebook : 'https://www.facebook.com/profile.php?id=100013980753646',
  twitter : 'https://twitter.com/Be81Bruno',
  github_profile : 'https://github.com/baesparza',
  autor : 'Bruno Esparza | 2017',
  github_repo : 'https://github.com/baesparza/Portfolio',
  license : 'https://opensource.org/licenses/mit-license.html'
 }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  AutorInfo : AUTORINFO = Autor_Info;
  
  constructor() { }

  ngOnInit() {
  }

}

/*
          Par implementar la api, que no funciona consultar a alguien y pedir ayuda, todo ya esta silo falta la implementacion

import { Component, OnInit } from '@angular/core';
import { AUTORINFO } from '../Common/autorinfo';
import { AUTORINFO_api } from '../Services/AUTORINFO_api.services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [AUTORINFO_api]
})

export class FooterComponent implements OnInit {

  AutorInfo : AUTORINFO;
  
  constructor(private AUTORINFO_api: AUTORINFO_api) { }

  getAUTORINFO() {
    this.AUTORINFO_api.getAUTORINFO().then(AutorInfo => this.AutorInfo = AutorInfo);
  }

  ngOnInit() {
    this.getAUTORINFO();
  }

}
*/

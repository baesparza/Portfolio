import { Component, OnInit } from '@angular/core';

import { HEADERINFO } from '../Common/headerinfo';
import { SKILLINFO } from '../Common/skilltinfo';

const headerInfo: HEADERINFO = {
  foto: "https://avatars3.githubusercontent.com/u/24482939?v=3&u=cc61dce19ae2a10ecd1850be413d8ce1d4990d3f&s=400",
  name: "Bruno Esparza",
  especialidad: "Web Developer",
  ciudad:"Loja, EC",
  correo:"bruno.be81@gmail.com",
  whatsApp: +5593992620353
}

const skillInfos: SKILLINFO[] = [
  {
  skill:"Illustrator",
  porcentage:40,
  },{
  skill:"Illustrator",
  porcentage:80,
  },{
  skill:"photoshop",
  porcentage:10,
  },{
  skill:"Illustrator",
  porcentage:40,
  },
]


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private headerInfo = headerInfo;
  private skillInfos = skillInfos;

  constructor() { }

  ngOnInit() {
  }

}

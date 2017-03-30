import { Component, OnInit } from '@angular/core';

import { HEADERINFO } from '../Common/headerinfo';
import { SKILLINFO } from '../Common/skilltinfo';
import { LANGUAGESINFO } from '../Common/languagesinfo';

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
  porcentage:35,
  current: true
},{
  skill:"Web Desing",
  porcentage:70,
  current: true
  },{
  skill:"Angular",
  porcentage:40,
  current: true
  },{
  skill:"HTML 5",
  porcentage:65,
  current: true
  },{
  skill:"CSS/Bootstrap",
  porcentage:70,
  current: true
  },{
  skill:"JS/TS",
  porcentage:30,
  current: true
  },
]

const languagesInfos: LANGUAGESINFO[] = [{
  language: "Español",
  porcentage: 85
},{
  language: "Ingles",
  porcentage: 60
}]


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private headerInfo = headerInfo;
  private skillInfos = skillInfos;
  private languagesInfos = languagesInfos;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PROYECTO } from '../Common/proyecto';

const proyectos : PROYECTO[] = [{
    id : 1,
    name : "Aaron Swart Tribute Page",
    image : "",
    repo : "https://github.com/baesparza/Tribute-Page-Aaron-Swart.git",
    link : "https://baesparza.github.io/Tribute-Page-Aaron-Swart/"
},{
    id : 2,
    name : "Aaron Swart Tribute Page",
    image : "",
    repo : "https://github.com/baesparza/Tribute-Page-Aaron-Swart.git",
    link : "https://baesparza.github.io/Tribute-Page-Aaron-Swart/"
},{
    id : 3,
    name : "Aaron Swart Tribute Page",
    image : "",
    repo : "https://github.com/baesparza/Tribute-Page-Aaron-Swart.git",
    link : "https://baesparza.github.io/Tribute-Page-Aaron-Swart/"
},{
    id : 4,
    name : "Aaron Swart Tribute Page",
    image : "",
    repo : "https://github.com/baesparza/Tribute-Page-Aaron-Swart.git",
    link : "https://baesparza.github.io/Tribute-Page-Aaron-Swart/"
},{
    id : 5,
    name : "Aaron Swart Tribute Page",
    image : "",
    repo : "https://github.com/baesparza/Tribute-Page-Aaron-Swart.git",
    link : "https://baesparza.github.io/Tribute-Page-Aaron-Swart/"
}]

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  private proyectos = proyectos;

  private lastproyects = this.lastproyects_Selector();

  constructor() { }

  ngOnInit() {
  }

  lastproyects_Selector() {
    var len = this.proyectos.length;
    var lastproyects: PROYECTO[];

    if (len > 3) {
      lastproyects = [this.proyectos[len - 1],this.proyectos[len - 2],this.proyectos[len - 3]];
    } else {
      lastproyects = this.proyectos;
    }

    return lastproyects;
  }

}

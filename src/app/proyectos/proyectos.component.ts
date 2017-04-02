import { Component, OnInit } from '@angular/core';
import { PROYECTO } from '../Common/proyecto';

const proyectos : PROYECTO[] = [{
    id : 1,
    name : "Aaron Swart Tribute Page",
    image : "https://upload.wikimedia.org/wikipedia/commons/2/26/Aaron_Swartz_2_at_Boston_Wikipedia_Meetup%2C_2009-08-18.jpg",
    repo : "https://github.com/baesparza/Tribute-Page-Aaron-Swart.git",
    link : "https://baesparza.github.io/Tribute-Page-Aaron-Swart/"
},{
    id : 2,
    name : "EL Ahorcado",
    image : "http://hechoecologico.weebly.com/uploads/1/8/5/3/18533360/1238205.png?241",
    repo : "https://github.com/baesparza/El-Ahorcado",
    link : "https://repl.it/FT27/55"
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
      lastproyects = [this.proyectos[len - 1],this.proyectos[len - 2]];
    } else {
      lastproyects = this.proyectos;
    }

    return lastproyects;
  }

}

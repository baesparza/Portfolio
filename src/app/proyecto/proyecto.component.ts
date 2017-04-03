import { Component, OnInit, Input } from '@angular/core';
import { PROYECTO } from '../Common/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input()
  private proyecto: PROYECTO;

  constructor() { }

  ngOnInit() {
  }

  ifactive () {
      if (this.proyecto.link == null) {
        return true;
      } else {
        return false;
      }
  }

}

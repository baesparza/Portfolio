import { Component, OnInit } from '@angular/core';

import { STUDIESINFO } from '../Common/studiesinfo';

const studiesInfos: STUDIESINFO[] = [{
  were:"UTPL",
  start:"2016",
  finish:"Still Studing",
  leyend:"Ingenieria en Sistemas Informaticos y Computacion."
},{
  were:"UTPL",
  start:"2016",
  finish:"2021",
  leyend:"Ingenieria en Sistemas Informaticos y Computacion."
},{
  were:"UTPL",
  start:"2016",
  leyend:"Ingenieria en Sistemas Informaticos y Computacion."
}]



@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  private studiesInfos = studiesInfos;

  constructor() { }

  ngOnInit() {
  }

}

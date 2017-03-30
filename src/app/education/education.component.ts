import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { STUDIESINFO } from '../Common/studiesinfo';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  @Input()
  private educationinfo : STUDIESINFO;

  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  iftextcolor(){
    if (this.educationinfo.finish == "Still Studing") {
      return true;
    }
  }

  

}

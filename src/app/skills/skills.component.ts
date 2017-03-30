import { Component, OnInit, Input } from '@angular/core';
import { SKILLINFO } from '../Common/skilltinfo';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input()
  private skillInfo: SKILLINFO;
  
  constructor() { }

  ngOnInit() {
  }

  ifStillActive() {
    if (this.skillInfo.current == true) {
      return true;
    }
  }

}

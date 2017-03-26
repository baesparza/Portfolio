import { Component, OnInit, Input } from '@angular/core';
import { LANGUAGESINFO } from '../Common/languagesinfo';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  
  @Input()
  private languageInfo: LANGUAGESINFO;

  constructor() { }

  ngOnInit() {
  }

}

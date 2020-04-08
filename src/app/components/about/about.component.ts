import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  readonly appData = {
    nombre: "Heart Stone App",
    fecha: "01/04/2020",
    version: "v1.0",
    autor: "Adrian Alejandro León Suñol",
    repositorio: "https://github.com/AdrianLeonSunyol/HeartStoneApp/tree/master"
  }

  constructor() { }

  ngOnInit() {}

}

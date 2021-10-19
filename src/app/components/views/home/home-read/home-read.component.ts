import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";
import {HomeModel} from "../home.model";

@Component({
  selector: 'app-home-read',
  templateUrl: './home-read.component.html',
  styleUrls: ['./home-read.component.css']
})
export class HomeReadComponent implements OnInit {

  home: HomeModel[] = [];
  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.findHome();
  }
  displayedColumns: string[] = ['type', 'value', 'percent'];
  findHome() {
    this.service.findByTypeAndValue().subscribe(resposta => {
      this.home = resposta;
    })
  }
}

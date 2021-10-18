import { Component, OnInit } from '@angular/core';
import {HomeReadService} from "./home-read/home-read.service";
import {HomeModel} from "./home-read/home.model";
import {of} from "rxjs";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  costs!: HomeModel;
  erro: any;
  constructor(private homeReadService: HomeReadService) {
    this.findByTypeAndValue();
  }

  ngOnInit(): void {
  }

  findByTypeAndValue(){
    this.homeReadService.getCosts().subscribe((data: HomeModel) => {
      this.costs = data;
      var map = new Map;
      if(!map.has(this.costs.type)){
        map.set(this.costs.type, this.costs.value);
      } else {
        var val = map.get(this.costs.type);
        val += this.costs.value;
        map.set(this.costs.type, val);
      }
      console.log(map)

      }, (error: any) =>{
      this.erro = error;
      console.log("ERRO:", error)
    })
  }


}

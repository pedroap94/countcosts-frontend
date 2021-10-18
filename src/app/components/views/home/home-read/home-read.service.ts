import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HomeModel} from "./home.model";

@Injectable({
  providedIn: 'root'
})
export class HomeReadService {

  baseUrl: String = environment.baseUrl
  constructor(private http: HttpClient) { }

  public getCosts(): Observable<HomeModel> {
    const url = `${this.baseUrl}/costs/totalType?month=10&year=2021`
    return this.http.get<HomeModel>(url)
  }
}

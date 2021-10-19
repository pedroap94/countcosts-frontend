import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HomeModel} from "./home.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl: String = environment.baseUrl

  constructor(private http:HttpClient) { }

  findByTypeAndValue(): Observable<HomeModel[]>{
    const url = `${this.baseUrl}costs/valuesByType?month=10&year=2021`
    return this.http.get<HomeModel[]>(url)
  }
}

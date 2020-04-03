import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  public getProducts()
  {
    return this.http.get("http://localhost:8082/prod");

  }

}

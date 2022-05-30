import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesersService {

  constructor(private DesertsServices:HttpClient) { }
  BaseURl = "http://localhost:5400/Deserts"

  GetAllDeserts(){
    return this.DesertsServices.get(this.BaseURl);
  }
  GetAllDesertsByID(_productId:number){

    return (this.DesertsServices.get(`${this.BaseURl}?id=${_productId}`));

  }

  DeleteDesertByID(_productId:number){
    return (this.DesertsServices.delete(`${this.BaseURl}/${_productId}`));
  }
}

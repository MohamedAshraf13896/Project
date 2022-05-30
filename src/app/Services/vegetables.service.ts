import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {

  constructor(private VegetablesServices:HttpClient) { }
  BaseURl = "http://localhost:5400/Vegetables"

  GetAllVegetables(){
    return this.VegetablesServices.get(this.BaseURl);
  }
  GetAllvegetablessByID(_productId:number){

    return (this.VegetablesServices.get(`${this.BaseURl}?id=${_productId}`));

  }
  DeleteVegetablesByID(_productId:number){
    return (this.VegetablesServices.delete(`${this.BaseURl}/${_productId}`));
  }
}

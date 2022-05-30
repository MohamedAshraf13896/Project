import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private FruitServices:HttpClient) { }
  BaseURl = "http://localhost:5400/Fruits"

  GetAllFruits(){
    return this.FruitServices.get(this.BaseURl);
  }
  GetAllFruitssByID(_productId:number){

    return (this.FruitServices.get(`${this.BaseURl}?id=${_productId}`));

  }
  DeleteFruitsByID(_productId:number){
    return (this.FruitServices.delete(`${this.BaseURl}/${_productId}`));
  }
}

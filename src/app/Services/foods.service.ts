import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private FoodsServices:HttpClient) { }
  BaseURl = "  http://localhost:5400/Foods"

  GetAllFoods(){
    return this.FoodsServices.get(this.BaseURl);
  }
  GetAllFoodsByID(_productId:number){

    return (this.FoodsServices.get(`${this.BaseURl}?id=${_productId}`));

  }
  DeleteFoodsByID(_productId:number){
    return (this.FoodsServices.delete(`${this.BaseURl}/${_productId}`));
  }
}

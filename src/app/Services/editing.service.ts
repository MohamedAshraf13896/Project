import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditingService {
  BaseUrl = "http://localhost:5400";
  constructor(private editservice:HttpClient) { }
  
  UpdateProductByID(id:any, product:any, type:any){
    return this.editservice.put(`${this.BaseUrl}/${type}/${id}`,product);
  }
  GetProductsInCatagoryByID(_id:number,type:string){
    return this.editservice.get(`${this.BaseUrl}/${type}/${_id}`);
  }
}
